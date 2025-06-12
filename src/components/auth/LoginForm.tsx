import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import Error from "../validation/Error";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema/auth.schema";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { SetLoginError } from "../../redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";

type TFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { LoginError } = useAppSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(loginSchema),
    // defaultValues: {
    //   email: "goniosman715149123@gmail.com",
    //   password: "1qaz2wwss",
    // },
  });


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetLoginError(""));
    login(data)
  };

  return (
    <>
      {LoginError && <Error message={LoginError} />}
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="relative">
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="form-checkbox accent-black" />
            Remember Password
          </label>
          <Link to="/forgot-password" className="text-gray-700 hover:underline">
            Forgot Password?
          </Link>
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
            "Sign In"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;