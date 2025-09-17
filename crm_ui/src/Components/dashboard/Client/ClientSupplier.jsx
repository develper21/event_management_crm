import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModulLoginRegister = () => {
  const [isClient, setIsClient] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Side - Centered Form */}
      <div className="w-1/2 flex justify-center items-center px-12">
        <div className="w-full max-w-md"> {/* Ensuring same width */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-gray-600 mt-2">
              Already have an account?{" "}
              <span className="text-orange-400 font-bold cursor-pointer" onClick={() => navigate("/")}>
                Log in
              </span>
            </p>
          </div>

          <div className="p-3 rounded-lg flex space-x-2">
            <button 
              className="w-1/2 py-2 text-orange-400 font-bold rounded-lg cursor-pointer"
              onClick={() => navigate("/CreateAccount/Admin")}>
              Representative
              </button>
            <button 
              className="w-1/2 py-2 text-black font-bold rounded-lg cursor-pointer" 
              onClick={() => navigate("/Client")}>
              Client/Supplier
            </button>
          </div>

          <p className="text-black mt-4 text-center">
            Are you the representative of a company you want to register in the Cluster? Fill in the details below.
          </p>

          {/* Client & Supplier Buttons */}
          <div className="p-3 flex space-x-2">
            <button
              className={`w-1/2 py-2 font-bold rounded-lg ${
                isClient ? "bg-orange-500 text-white" : "text-gray-600 cursor-pointer"
              }`}
              onClick={() => setIsClient(true)}
            >
              Client
            </button>
            <button
              className={`w-1/2 py-2 font-bold rounded-lg ${
                !isClient ? "bg-orange-500 text-white" : "text-gray-600 cursor-pointer"
              }`}
              onClick={() => setIsClient(false)}
            >
              Supplier
            </button>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4"> {/* Changed flex to space-y for better spacing */}
            {/* Company Name & Registration Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Unique Registration Code</label>
                <input
                  type="text"
                  placeholder="Enter registration code"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
            </div>

            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-orange-500 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button 
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition cursor-pointer"
              onClick={() => navigate("/")}>
              {isClient ? "Register as Client" : "Register as Supplier"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 h-screen fixed top-0 right-0">
        <img className="w-full h-full object-cover" src="./Aside.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default ModulLoginRegister;
