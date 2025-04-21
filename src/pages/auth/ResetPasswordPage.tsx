import ResetPasswordForm from '../../components/auth/ResetPasswordForm';
import Logo from '../../assets/images/logo.png';


const ResetPasswordPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain"/>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl font-semibold mb-2">Set a new password</h2>
        <p className="text-sm text-gray-500 mb-6">
          Create a new password. Ensure it differs from previous ones for security
        </p>

       <ResetPasswordForm/>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
