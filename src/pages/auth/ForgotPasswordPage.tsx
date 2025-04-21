import { useState } from 'react';
import Logo from '../../assets/images/logo.png';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission logic here
    console.log('Submitted email:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Forget Password?</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please enter your email to get verification code
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-left">
          {/* Email Input */}
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-6"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
