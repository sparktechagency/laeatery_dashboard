import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/")
    }

  return (
    <>
      <form>
         {/* Email Input */}
       <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2"
          />
        </div>

        {/* Password Input */}
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 pr-10"
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
          <Link to="/forgot-password" className="text-gray-700 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          Sign in
        </button>
      </form>
    </>
  )
}

export default LoginForm