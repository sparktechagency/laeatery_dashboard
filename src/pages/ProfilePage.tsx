import { FaArrowLeft} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profile from "../components/profile/Profile";
import ProfileLoading from "../components/loader/ProfileLoading";
import { useGetMeQuery } from "../redux/features/user/userApi";
import { useAppSelector } from "../redux/hooks/hooks";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isLoading, isError } = useGetMeQuery(undefined);
  const { user } = useAppSelector((state) => state.user);

  const handleGoBack = () => {
    navigate(-1);
  };

  if(!isLoading && isError){
    return "Server error is occured"
  }

  return (
   <>
    <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
      <div className="text-left mb-6 text-fieldColor text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Profile
      </div>
      {
        isLoading ? (
          <>
           <ProfileLoading/>
          </>
        ): (
          <>
            {
              user?.name ? (
                <Profile/>
              ) : (
                <>
                 <h1>There is No Data</h1>
                </>
              )
            }
          </>
        )
      }
    </div>
   </>
  );
};

export default ProfilePage;
