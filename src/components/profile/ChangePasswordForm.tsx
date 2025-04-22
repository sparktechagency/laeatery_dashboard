import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type TField = "current" | "new" | "confirm";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field: TField) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  return (
    <>
      {/* Change Password Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.current ? "text" : "password"}
              className="w-full p-2 border rounded-md pr-10 outline-none focus:border-blue-500"
            />
            <span
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => toggleVisibility("current")}
            >
              {showPassword.current ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">New Password</label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              className="w-full p-2 border rounded-md pr-10 outline-none focus:border-blue-500"
            />
            <span
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => toggleVisibility("new")}
            >
              {showPassword.new ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword.confirm ? "text" : "password"}
              className="w-full p-2 border rounded-md pr-10"
            />
            <span
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => toggleVisibility("confirm")}
            >
              {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;
