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
    <div className="flex h-screen items-center justify-center overflow-hidden">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-white p-6">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-700">Create account</h1>
          <p className="text-lg text-gray-600 mt-2">
            Already have an account? <span className="text-orange-400 cursor-pointer font-semibold" onClick={() => navigate("/Login")}>
              Log in
            </span>
          </p>

          <div className="p-3 rounded-lg flex space-x-0">
            <button 
              type="button"
              className={`w-1/2 py-2 font-semibold rounded-lg relative ${
                role === "Representative" 
                  ? "text-orange-400" 
                  : "text-gray-600 hover:text-orange-400"
              }`}
              onClick={() => setRole("Representative")}
            >
              Representative
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${
                role === "Representative" ? "bg-orange-400" : "bg-gray-300"
              }`}></div>
            </button>
            <button
              type="button"
              className={`w-1/2 py-2 font-semibold rounded-lg relative ${
                role === "Client" || role === "Supplier"
                  ? "text-orange-400" 
                  : "text-gray-600 hover:text-orange-400"
              }`}
              onClick={() => setRole("Client")}
            >
              Client/Supplier
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${
                role === "Client" || role === "Supplier" ? "bg-orange-400" : "bg-gray-300"
              }`}></div>
            </button>
          </div>

          <p className="text-black mt-4 text-center">
            {role === "Representative" 
              ? "Are you the representative of a company you want to register in the Cluster? Fill in the details below."
              : "Do you collaborate with companies in the cluster as a client or supplier? Register here!"
            }
          </p>

          <div className="mt-6 flex justify-center w-full max-w-md mx-auto">
            {(role === "Client" || role === "Supplier") ? (
              <div className="relative z-10 flex rounded-lg bg-gray-100 p-1 w-full">
                <button
                  type="button"
                  className={`flex-1 px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    role === "Client"
                      ? "bg-white text-orange-500 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setRole("Client")}
                >
                  Client
                </button>
                <button
                  type="button"
                  className={`flex-1 px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    role === "Supplier"
                      ? "bg-white text-orange-500 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setRole("Supplier")}
                >
                  Supplier
                </button>
              </div>
            ) : (
              <div className="h-10"></div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-18">
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Unique Registration Code</label>
                <input
                  type="text"
                  value={registrationCode}
                  onChange={(e) => setRegistrationCode(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
              />
            </div>

            <div className="mb-4 relative">
              <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Phone number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                disabled={loading}
                className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700 z-10">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700 z-10">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center cursor-pointer justify-center gap-2 p-3 bg-orange-400 text-white text-lg font-semibold rounded-lg transition-all duration-300 relative overflow-hidden disabled:bg-gray-400 disabled:cursor-not-allowed
                         hover:bg-gradient-to-t hover:from-orange-500/30 hover:to-orange-400 hover:shadow-lg"
            >
              {loading ? "Creating Account..." : "Continue"} 
              {!loading && <FaArrowRight className="text-xl" />}
            </button>
          </form>

          <div className="mt-5 text-sm text-gray-600">
            <span className="cursor-pointer text-orange-500 font-semibold">Privacy</span> | <span className="cursor-pointer text-orange-500 font-semibold">Terms and Conditions</span>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
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

export default Form;
