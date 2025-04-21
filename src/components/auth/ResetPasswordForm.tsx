import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="">
      {/* New Password Field */}
      <div className="mb-4 text-left">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          New Password
        </label>
        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-6 text-left">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
        Reset Password
      </button>
    </div>
  );
};

export default ResetPasswordForm;
