import { FaArrowLeft} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profile from "../components/profile/Profile";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 p-4 rounded-md">
      <div className="text-left mb-6 text-fieldColor text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Profile
      </div>
      {/* Profile Part */}
      <Profile/>
    </div>
  );
};

export default ProfilePage;
