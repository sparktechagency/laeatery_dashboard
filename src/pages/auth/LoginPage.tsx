import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png'; // Replace with your logo path

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Optional Profile Avatar Badge (Top Center) */}
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="w-14 h-14 rounded-full bg-orange-500 border-4 border-white flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">M</span>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-4 mt-8 flex justify-center">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Login to Account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please enter your email and password to continue
        </p>

        {/* Email Input */}
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Password Input */}
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex justify-between items-center text-sm mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="form-checkbox accent-black" />
            Remember Password
          </label>
          <button className="text-gray-700 hover:underline">
            Forget Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
