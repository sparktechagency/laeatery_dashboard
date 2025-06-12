import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profile from "../components/profile/Profile";
import ProfileLoading from "../components/loader/ProfileLoading";
import { useGetMeQuery } from "../redux/features/user/userApi";
import { useAppSelector } from "../redux/hooks/hooks";
import ServerErrorCard from "../components/card/ServerErrorCard";

const ProfilePage = () => {
  const { isLoading, isError, isSuccess,  isUninitialized } = useGetMeQuery(undefined);
  const { user } = useAppSelector((state) => state.user);


    if ((isLoading || isUninitialized ) && !user) {
    return (
      <>
        <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
          <GoBack />
          <ProfileLoading />
        </div>
      </>
    );
  }

  if (!isLoading && isError && !user) {
    return (
      <>
        <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
          <GoBack />
          <ServerErrorCard />
        </div>
      </>
    );
  }



  if (!isLoading && isSuccess && !isError && user?.name) {
    return (
      <>
        <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
          <GoBack />
          <Profile />
        </div>
      </>
    );
  }

    if (!isLoading && isSuccess && !user?.name) {
    return (
      <>
        <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
          <GoBack />
          <h1>There is No Data</h1>
        </div>
      </>
    );
  }

};




export default ProfilePage;

const GoBack = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="text-left mb-6 text-fieldColor text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Profile
      </div>
    </>
  );
};
