import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { resetPassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setError("Invalid or missing reset token");
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      const result = await resetPassword(token, newPassword);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to reset password");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center overflow-hidden">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-white p-6">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-orange-500">Reset your password</h1>
          <p className="text-base text-gray-700 mt-2">
            Enter your new password below to complete the reset process.
          </p>

          {success ? (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              <p>Password reset successfully! You can now log in with your new password.</p>
              <button 
                onClick={() => navigate("/login")}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Go to Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <div className="mb-4 text-left">
                <label className="text-sm text-gray-700">New Password</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  disabled={loading}
                  className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>

              <div className="mb-4 text-left">
                <label className="text-sm text-gray-700">Confirm New Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  disabled={loading}
                  className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>

              <div className="flex justify-between gap-4 mt-4">
                <button 
                  type="button"
                  onClick={() => navigate("/forgotPassword")}
                  className="flex-1 bg-gray-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-600"
                >
                  <FaArrowLeft className="text-lg" /> Back
                </button>
                <button 
                  type="submit"
                  disabled={loading || !token}
                  className="flex-1 bg-orange-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Resetting..." : "Reset Password"} 
                  {!loading && <FaArrowRight className="text-lg" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Right Side - Image (Remains Unchanged) */}
      <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden">
        <img 
          className="absolute top-0 right-0 w-1/2 h-screen object-cover" 
          src="./Aside.jpg" 
          alt="Background" 
        />
      </div>
    </div>
  );
};

export default ResetPassword;
