import Logo from '../../assets/images/logo.png';
import VerifyOtpForm from '../../components/auth/VerifyOtpForm';
import { getEmail } from '../../helper/SessionHelper';

const VerifyOtpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full bg-white p-4 md:p-8 rounded-2xl shadow-lg max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl lg:text-2xl font-semibold mb-2">Verify otp</h2>
        <p className="text-md text-gray-500 mb-6">
          We have just sent a code to your email address <span className="text-gray-900 font-semibold">{getEmail()}</span> 
          {/* Please check your email for the 5 digit code. */}
        </p>
        {/* VerifyOtp Form */}
        <VerifyOtpForm/>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
