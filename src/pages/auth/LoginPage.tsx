import Logo from '../../assets/images/logo.png'; // Replace with your logo path
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-4 mt-8 flex justify-center">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Login to Account</h2>
        <p className="text-md text-gray-500 mb-6">
          Please enter your email and password to continue
        </p>
        <LoginForm/>   
      </div>
    </div>
  );
};

export default LoginPage;
