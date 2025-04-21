import { useState } from "react";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle the email submission logic here
      console.log('Submitted email:', email);
    };
    
  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="text-left">
          {/* Email Input */}
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-6"
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
    </>
  )
}

export default ForgotPasswordForm