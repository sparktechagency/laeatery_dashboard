import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useForgotPasswordSendOtpMutation } from "../../redux/features/auth/authApi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSendOtpSchema } from "../../schema/auth.schema";
import { SetForgotError } from "../../redux/features/auth/authSlice";
import Error from "../validation/Error";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CgSpinnerTwo } from "react-icons/cg";

type IFormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { ForgotError } = useAppSelector((state) => state.auth);
  const [forgotPasswordSendOtp, { isLoading, isSuccess }] =
    useForgotPasswordSendOtpMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgotPasswordSendOtpSchema),
    // defaultValues: {
    //   email: "goniosman715149123@gmail.com",
    // },
  });

  //otp is sent successfully
  useEffect(() => {
    if (!isLoading && isSuccess) {
      navigate("/verify-otp");
    }
  }, [navigate, isSuccess, isLoading]);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    dispatch(SetForgotError(""));
    forgotPasswordSendOtp(data);
  };

  return (
    <>
      {ForgotError && <Error message={ForgotError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="text-left">
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Email address
          </label>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <input
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="you@example.com"
                  className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                    error
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:bg-gray-800 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Sending...
            </>
          ) : (
            "Send Otp"
          )}
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
