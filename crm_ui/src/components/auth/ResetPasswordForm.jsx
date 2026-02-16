import { useState, useEffect } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { resetPassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

    try {
      const result = await resetPassword(token, newPassword);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to verify code");
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
          <h1 className="text-4xl font-bold text-orange-500">Change password</h1>
          <p className="text-lg text-gray-600 mt-2">
            Enter your email and we will send you a verification code to reset your password.
          </p>

          {success ? (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              <p>Verification successful! You can now reset your password.</p>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => navigate("/login")}
                  className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Go to Login
                </button>
                <button 
                  onClick={() => navigate(`/resend-password?email=${encodeURIComponent(email)}`)}
                  className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Resend
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <div className="mb-6 relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@openhub.ro"
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>

              <div className="mb-6 relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Reset code</label>
                <input 
                  type="text" 
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  placeholder="Enter verification code"
                  required
                  disabled={loading}
                  className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
                />
              </div>

              <div className="mb-6 relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700 z-10">New password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    disabled={loading}
                    className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100 pr-10"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading || !token}
                className="w-full bg-orange-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden disabled:bg-gray-400 disabled:cursor-not-allowed
                         hover:bg-gradient-to-t hover:from-orange-600/30 hover:to-orange-500 hover:shadow-lg"
                >
                  {loading ? "Verifying..." : "Next"} 
                  {!loading && <FaArrowRight className="text-xl" />}
                </button>
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
