import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ModulLoginRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 text-lg">
            <img className="w-[285px] h-[160px] mb-6" alt="Logo" src="./Logo_Variation.jpg" />
            <b className="text-gray-700 text-xl">
              Choose which type of account you're testing today?
            </b>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full">
            {["SuperAdmin", "Representative", "Supplier/Client", "Change Password"].map(
              (role, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (role === "SuperAdmin") {
                      navigate("/Dashboard");
                    } else if (role === "Change Password"){
                      navigate("/ChangePassword");
                    } else if (role === "Supplier/Client"){
                      navigate("/Client&Supplier");
                    }
                    // Add more conditions if you want to handle other roles.
                  }}
                  className={`flex items-center justify-center gap-2 px-6 py-4 w-full rounded-lg text-base transition-all
                    ${
                      role === "Change Password"
                        ? "border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer"
                        : "bg-orange-400 text-white hover:bg-orange-600 cursor-pointer"
                    }`}
                >
                  <b>Continue as {role}</b>
                  <FaArrowRight className="text-lg" />
                </button>
              )
            )}
          </div>

          {/* Privacy Links */}
          <div className="flex justify-center gap-5 text-sm text-orange-500">
            <b>Confidentiality</b>
            <b>Terms and Conditions</b>
          </div>
        </div>
      </div>

      {/* Right Side - Background Image */}
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

export default ModulLoginRegister;
