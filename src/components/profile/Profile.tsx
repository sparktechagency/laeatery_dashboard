import { useState } from "react";
import { Tabs } from "antd";
import EditProfilePic from "./EditProfilePic";
import EditProfile from "./EditProfile";
import ChangePasswordForm from "./ChangePasswordForm";
const { TabPane } = Tabs;

const Profile = () => {
  const [file, setFile] = useState<null | File>(null);
  const [isProfile, setIsProfile] = useState(true);

  const onChange = (key: any) => {
    setIsProfile(!isProfile);
  };

 

  return (
    <div className="flex-grow flex justify-center">
      <div className="w-full max-w-xl p-6 rounded-2xl self-center">
        <div className="flex flex-col items-center">
          {/* {isProfile ? ( */}
            <EditProfilePic setFile={setFile} isProfile={isProfile}/>
          {/* ) : (
            <h2 className="mt-4 text-xl font-semibold">Change Password</h2>
          )} */}
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
            <EditProfile file={file}/>
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
  );
};

export default Profile;
