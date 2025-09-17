const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../Models/User");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddkeware");
const { sendPasswordResetEmail, sendWelcomeEmail } = require("../services/emailService");
require("dotenv").config();

const router = express.Router();

// 🟢 Registration Route
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
    body("phoneNumber").matches(/^\+?[1-9]\d{1,14}$/).withMessage("Invalid phone format"),
    body("role").isIn(["Representative", "Supplier", "Client"]).withMessage("Invalid role"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { role, companyName, uniqueRegistrationCode, firstName, lastName, email, phoneNumber, password } = req.body;

      let existingUser = await User.findOne({ email });
      if (existingUser) return res.status(409).json({ error: "Email already in use" });

      const newUser = new User({
        role,
        companyName,
        uniqueRegistrationCode,
        firstName,
        lastName,
        email,
        phoneNumber,
        password, // Pass plain text password; middleware will hash it
      });

      await newUser.save();

      // Send welcome email
      await sendWelcomeEmail(email, firstName, role);

      res.status(201).json({ 
        message: "Registration successful", 
        user: {
          id: newUser._id,
          role: newUser.role,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email
        }
      });
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.isActive) {
      console.log("User Not Found or Inactive");
      return res.status(401).json({ error: "Invalid email or password" });
    }

    console.log("User Found:", email);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match Result:", isMatch);

    if (!isMatch) {
      console.log("Password Mismatch");
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log("Login Successful");
    res.json({ 
      token, 
      role: user.role, 
      userId: user._id,
      user: {
        id: user._id,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        companyName: user.companyName
      }
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Forgot Password Route
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate reset token
    const resetToken = user.generatePasswordResetToken();
    await user.save();

    // Send reset email
    const emailSent = await sendPasswordResetEmail(email, resetToken, user.firstName);
    
    if (emailSent) {
      res.json({ message: "Password reset email sent successfully" });
    } else {
      res.status(500).json({ error: "Failed to send reset email" });
    }
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Reset Password Route
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ error: "Token and new password are required" });
    }

    // Hash the token to compare with stored hash
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired reset token" });
    }

    // Update password
    user.password = newPassword;
    user.clearPasswordResetToken();
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Verify Token Route (for checking if user is authenticated)
router.get("/verify-token", authMiddleware, async (req, res) => {
  try {
    res.json({
      valid: true,
      user: {
        id: req.user._id,
        role: req.user.role,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        companyName: req.user.companyName
      }
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Get User Profile Route
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password -resetPasswordToken -resetPasswordExpires');
    res.json(user);
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update User Profile Route
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, companyName } = req.body;
    
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update allowed fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (companyName) user.companyName = companyName;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        companyName: user.companyName
      }
    });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Change Password Route
router.put("/change-password", authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: "Current password and new password are required" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Logout Route (client-side token removal)
router.post("/logout", authMiddleware, async (req, res) => {
  try {
    // In a more advanced setup, you could maintain a blacklist of tokens
    // For now, we'll just return success as token removal is handled client-side
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
