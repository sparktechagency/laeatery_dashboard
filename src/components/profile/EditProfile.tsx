import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useUpdateProfileMutation } from "../../redux/features/user/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "../../schema/user.schema";
import { z } from "zod";
import Error from "../validation/Error";
import { CgSpinnerTwo } from "react-icons/cg";
import { SetProfileError } from "../../redux/features/auth/authSlice";

type TProps = {
  file: null | File;
};

type FormValues = z.infer<typeof updateProfileSchema>;

const EditProfile = ({ file }: TProps) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name as string,
      phone_number: user?.phone_number as string
    }
  });



  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(SetProfileError(""))
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_number", data.phone_number);

    if (file !== null) {
      formData.append("profile_image", file);
    }
    //  const formObject = Object.fromEntries(formData.entries());
    //  console.log(formObject);
     updateProfile(formData);
  };

  return (
    <>
      {ProfileError && <Error message={ProfileError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Full Name
          </label>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  type="text"
                  {...field}
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
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            defaultValue={user?.email}
            disabled
          />
        </div>
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Phone Number
          </label>
          <Controller
            control={control}
            name="phone_number"
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  type="text"
                  {...field}
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

export default EditProfile;
