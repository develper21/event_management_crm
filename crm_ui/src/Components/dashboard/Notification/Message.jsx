import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ModulLoginRegister = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setStep(2), 1800); // 3 sec me "Password Changed" message dikhaye
    } else if (step === 2) {
      setTimeout(() => navigate('/'), 1500); // 1 sec me Home page pe redirect kare
    }
  }, [step, navigate]);

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      {/* Left Side - Dynamic Content */}
      <div className="flex flex-1 items-center justify-center bg-white p-6">
        <div className="w-full max-w-md text-center">
          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold text-orange-500">Check your email!</h1>
              <p className="text-base text-gray-700 mt-2">
                We have sent an email to the address <b className="text-orange-500">bob@keenthemes.com</b>
              </p>
              <p className="text-sm text-gray-700 mt-2">Please follow the verification link.</p>
              <p className='text-gray-700'> Didn't receive any email? <b className='text-orange-500'>Resend</b></p>
            </>
          )}
          
          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold text-orange-500">The password has been changed!</h1>
              <p className="text-base text-gray-700 mt-2">The password has been successfully changed!</p>
              <p className="text-sm text-gray-700 mt-2">
                Log in to your account through the main page!
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Fixed Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden">
        <img className="absolute top-0 right-0 w-1/2 h-screen object-cover" src="./Aside.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default ModulLoginRegister;
