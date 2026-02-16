import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ResendPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await forgotPassword(email);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to send reset email");
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
          <h1 className="text-4xl font-bold text-gray-700">Check your email!</h1>
          <p className="text-lg text-gray-600 mt-2">
            We have sent a password reset link to your email. Please check your inbox and follow the instructions.
          </p>

          {success ? (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              <p>If you don't receive the email within a few minutes, please check your spam folder.</p>
              <button 
                onClick={() => navigate("/login")}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Back to Login
              </button>
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

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden disabled:bg-gray-400 disabled:cursor-not-allowed
                         hover:bg-gradient-to-t hover:from-orange-500/30 hover:to-orange-400 hover:shadow-lg"
                >
                  {loading ? "Sending..." : "Resend Email"} 
                  {!loading && <FaArrowRight className="text-xl" />}
                </button>
            </form>
          )}
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

export default ResendPassword;
