import { Tabs } from "antd";
import { FaCamera } from "react-icons/fa";
import EditProfile from "../components/profile/EditProfile";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import { useState } from "react";
import profile_img from "../assets/images/profile_placeholder.png";


const { TabPane } = Tabs;

const ProfilePage = () => {
  const [isProfile, setIsProfile] = useState(true);
  const onChange = (key: any) => {
    setIsProfile(!isProfile);
  };
 
  return (
    <div className="min-h-full flex flex-col bg-gray-50 p-4">
      <div className="text-left mb-6 cursor-pointer text-gray-500">
        ← Profile
      </div>

       {/* Main Part */}
      <div className="flex-grow flex justify-center">
        <div className="w-full max-w-xl p-6 rounded-2xl self-center">
          <div className="flex flex-col items-center">
            {isProfile ? (
              <>
                <div className="relative">
                  <img
                    src={profile_img}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full">
                    <FaCamera size={14} />
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-semibold">Edit Profile</h2>
              </>
            ) : (
              <h2 className="mt-4 text-xl font-semibold">Change Password</h2>
            )}
          </div>

          <Tabs onChange={onChange} defaultActiveKey="1" centered className="mt-6">
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
       {/* Main Part ended*/}
    </div>
  );
};

export default ProfilePage;
