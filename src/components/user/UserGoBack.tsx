import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserGoBack = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button onClick={handleGoBack} className="hover:text-black">
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">User Management</h1>
      </div>
    </>
  );
};

export default UserGoBack;
