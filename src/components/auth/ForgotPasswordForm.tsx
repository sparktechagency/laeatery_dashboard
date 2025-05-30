import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useForgotPasswordSendOtpMutation } from "../../redux/features/auth/authApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


type IFormValues = {
  email: string;
  password: string;
};


const ForgotPasswordForm = () => {
    const dispatch = useAppDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const { LoginError } = useAppSelector((state) => state.auth);
    const [forgotPasswordSendOtp, { isLoading }] =
      useForgotPasswordSendOtpMutation();
    const { handleSubmit, control } = useForm({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "goniosman715149123@gmail.com",
        password: "1qaz2wwss",
      },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      dispatch(SetLoginError(""));
      login(data);
    };
    

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

          {/* <div className="text-left mb-4">
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
                  type="email"
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
        </div> */}

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