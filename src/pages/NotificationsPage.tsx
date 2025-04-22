import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NotificationList from "../components/notification/NotificationList";

const NotificationsPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full p-6 bg-gray-50 rounded-md">
      {/* Back button */}
      <div className="text-left mb-6 text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Notifications
      </div>
      {/* Total count */}
      <div className="text-md text-fieldColor font-semibold mb-4">
        Total 128 Notifications
      </div>

      {/* Notification List */}
      <NotificationList />
    </div>
  );
};

export default NotificationsPage;
