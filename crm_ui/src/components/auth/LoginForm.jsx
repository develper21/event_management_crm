import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.error || "Login failed");
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
          <h1 className="text-4xl font-bold text-gray-700">Welcome</h1>
          <p className="text-lg text-gray-600 mt-2">
            New here? <span className="text-orange-400 cursor-pointer font-semibold" onClick={() => navigate("/Register")}>
              Create an account
            </span>
          </p>

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
              <label className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-700">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                required 
                disabled={loading}
                className="w-full p-3 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
              />
            </div>

            <div 
              className="text-right text-orange-500 text-sm cursor-pointer mb-3 font-semibold" 
              onClick={() => navigate("/forgotPassword")}>
              Forgot your password?
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center cursor-pointer justify-center gap-2 p-3 bg-orange-400 text-white text-lg font-semibold rounded-lg transition-all duration-300 relative overflow-hidden disabled:bg-gray-400 disabled:cursor-not-allowed
                         hover:bg-gradient-to-t hover:from-orange-500/30 hover:to-orange-400 hover:shadow-lg">
              {loading ? "Signing in..." : "Continue"} 
              {!loading && <FaArrowRight className="text-xl" />}
            </button>
          </form>

          <div className="mt-5 text-sm text-gray-600">
            <span className="cursor-pointer text-orange-500">Privacy</span> | <span className="cursor-pointer text-orange-500">Terms and Conditions</span>
          </div>
        </div>
      </div>

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

export default LoginPage;
