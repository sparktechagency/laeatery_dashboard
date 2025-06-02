import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PasswordStrength from "../validation/PasswordStrength";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../schema/auth.schema";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import Error from "../validation/Error";
import { CgSpinnerTwo } from "react-icons/cg";
import { SetChangePasswordError } from "../../redux/features/auth/authSlice";

type TField = "current" | "new" | "confirm";

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const { ChangePasswordError } = useAppSelector((state) => state.auth);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const newPassword = watch("newPassword");

  useEffect(() => {
    if (newPassword) {
      // Only trigger validation if confirmPassword has been entered
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword) {
        trigger("confirmPassword");
      }
    }
  }, [newPassword, watch, trigger]);

  //password show-hide
  const toggleVisibility = (field: TField) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  type FormValues = z.infer<typeof changePasswordSchema>;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(SetChangePasswordError(""));
    changePassword(data);
  };

  return (
    <>
      {ChangePasswordError && <Error message={ChangePasswordError} />}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Current Password
          </label>
          <Controller
            control={control}
            name="oldPassword"
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="relative">
                  <input
                    {...field}
                    type={showPassword.current ? "text" : "password"}
                    placeholder="Enter current password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => toggleVisibility("current")}
                  >
                    {showPassword.current ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            New Password
          </label>
          <Controller
            control={control}
            name="newPassword"
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="relative">
                  <input
                    {...field}
                    type={showPassword.new ? "text" : "password"}
                    placeholder="Enter new password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => toggleVisibility("new")}
                  >
                    {showPassword.new ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error.message}</p>
                )}
              </>
            )}
          />
          {newPassword && <PasswordStrength password={newPassword} />}
        </div>
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Confirm New Password
          </label>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="relative">
                  <input
                    {...field}
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Enter confirm password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => toggleVisibility("confirm")}
                  >
                    {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:bg-gray-800 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;
