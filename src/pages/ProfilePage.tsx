import { useState } from "react";
import { Tabs } from "antd";
import { FaArrowLeft} from "react-icons/fa";
import EditProfile from "../components/profile/EditProfile";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import { useNavigate } from "react-router-dom";
import EditProfilePic from "../components/profile/EditProfilePic";
const { TabPane } = Tabs;

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isProfile, setIsProfile] = useState(true);
  const onChange = (key: any) => {
    setIsProfile(!isProfile);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 p-4">
      <div className="text-left mb-6 text-fieldColor text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Profile
      </div>
      <div className="flex-grow flex justify-center">
        <div className="w-full max-w-xl p-6 rounded-2xl self-center">
          <div className="flex flex-col items-center">
            {
              isProfile ? (
                <EditProfilePic/>
              ) : (
                <h2 className="mt-4 text-xl font-semibold">Change Password</h2>
              )
            }
            
          </div>

          {/* Tabs Part */}
          <Tabs
            onChange={onChange}
            defaultActiveKey="1"
            centered
            className="mt-6"
          >
            <TabPane
              tab={<span className="font-medium">Edit Profile</span>}
              key="1"
            >
              <EditProfile />
            </TabPane>

            <TabPane
              tab={<span className="font-medium">Change Password</span>}
              key="2"
            >
              {/* Change Password Form */}
              <ChangePasswordForm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
