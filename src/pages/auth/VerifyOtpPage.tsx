import { useState, useRef } from 'react';
import Logo from '../../assets/images/logo.png';

const VerifyOtpPage = () => {
  const [code, setCode] = useState(new Array(5).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input
    if (index < 4 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl font-semibold mb-2">Check your email</h2>
        <p className="text-sm text-gray-500 mb-6">
          We sent a code to your email address @. Please check your email for the 5 digit code.
        </p>

        {/* Code Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputRefs.current[idx] = el)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mb-4">
          Verify
        </button>

        {/* Resend */}
        <p className="text-sm text-gray-500">
          You have not received the email?{' '}
          <button className="text-black font-medium hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
