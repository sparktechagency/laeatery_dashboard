import Logo from "../../assets/images/logo.png";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Forgot Password?</h2>
        <p className="text-md text-gray-500 mb-6">
          Please enter your email to get verification code
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
