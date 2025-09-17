import { useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Form = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  // State variables for all input fields
  const [companyName, setCompanyName] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Representative");

  // State variables for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      const userData = {
        role,
        companyName,
        uniqueRegistrationCode: registrationCode,
        firstName,
        lastName,
        email,
        phoneNumber,
        password
      };

      const result = await register(userData);
      if (result.success) {
        navigate("/login");
      } else {
        setError(result.error || "Registration failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Centered Form */}
      <div className="w-1/2 flex justify-center items-center px-12">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-gray-600 mt-2">
              Already have an account?{" "}
              <span className="text-orange-400 font-bold cursor-pointer"
                onClick={() => navigate("/Login")}
              >
                Log in
              </span>
            </p>
          </div>

          <div className="p-3 rounded-lg flex space-x-2">
            <button 
              type="button"
              className={`w-1/2 py-2 font-bold rounded-lg ${
                role === "Representative" 
                  ? "bg-orange-400 text-white" 
                  : "text-orange-400 hover:bg-orange-50"
              }`}
              onClick={() => setRole("Representative")}
            >
              Representative
            </button>
            <button
              type="button"
              className={`w-1/2 py-2 font-bold rounded-lg ${
                role === "Client" || role === "Supplier"
                  ? "bg-orange-400 text-white" 
                  : "text-orange-400 hover:bg-orange-50"
              }`}
              onClick={() => setRole("Client")}
            >
              Client/Supplier
            </button>
          </div>

          <p className="text-black mt-4 text-center">
            Are you the representative of a company you want to register in the Cluster? Fill in the details below.
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                disabled={loading}
                className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Unique Registration Code</label>
              <input
                type="text"
                value={registrationCode}
                onChange={(e) => setRegistrationCode(e.target.value)}
                required
                disabled={loading}
                className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={loading}
                className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                disabled={loading}
                className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600 font-semibold">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              disabled={loading}
              className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">Password</label>
              {/* Wrapping input in a relative container for the eye icon */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full border border-gray-300 p-2 rounded-lg disabled:bg-gray-100"
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading} 
            className="w-full bg-orange-400 text-white font-bold py-2 mt-6 rounded-lg flex items-center justify-center cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Continue"} 
            {!loading && <span className="ml-2"><FaArrowRight /></span>}
          </button>
          </form>

          <div className="mt-4 text-center text-gray-600">
            <span className="cursor-pointer font-bold">Privacy</span> |{" "}
            <span className="cursor-pointer font-bold">Terms and Conditions</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-screen fixed top-0 right-0">
        <img
          className="w-full h-full object-cover"
          src="/Aside.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Form;
