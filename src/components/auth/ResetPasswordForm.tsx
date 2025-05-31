import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useForgotPasswordResetMutation } from "../../redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../validation/Error";
import { useDispatch } from "react-redux";
import { resetPasswordSchema } from "../../schema/auth.schema";
import { SetResetPasswordError } from "../../redux/features/auth/authSlice";
import PasswordStrength from "../validation/PasswordStrength";

type TFormValues = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPasswordForm = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const { ResetPasswordError } = useAppSelector((state) => state.auth);
  const [forgotPasswordReset, { isLoading }] = useForgotPasswordResetMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
      resolver: zodResolver(resetPasswordSchema),
      mode: "onChange"
  });

   const newPassword = watch('newPassword');


    useEffect(() => {
    if (newPassword) {
      // Only trigger validation if confirmPassword has been entered
      const confirmPassword = watch('confirmPassword');
      if (confirmPassword) {
        trigger('confirmPassword');
      }
    }
  }, [newPassword, watch, trigger]);
  
  
    const onSubmit: SubmitHandler<TFormValues> = (data) => {
      dispatch(SetResetPasswordError(""));
      forgotPasswordReset(data)
    };




  return (
     <>
      {ResetPasswordError && <Error message={ResetPasswordError} />}
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    type={showNew ? "text" : "password"}
                    placeholder="Enter new password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowNew(!showNew)}
                  >
                    {showNew ? <FaEyeSlash /> : <FaEye />}
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
                    type={showConfirm ? "text" : "password"}
                    placeholder="Enter confirm password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
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
            "Set Password"
          )}
        </button>
      </form>
     </>
  );
};

export default ResetPasswordForm;
