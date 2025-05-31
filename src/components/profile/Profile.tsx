/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Tabs, TabsProps } from "antd";
import EditProfilePic from "./EditProfilePic";
import EditProfile from "./EditProfile";
import ChangePasswordForm from "./ChangePasswordForm";

const Profile = () => {
  const [file, setFile] = useState<null | File>(null);
  const [isProfile, setIsProfile] = useState(true);

  const onChange = (_key:string) => {
    setIsProfile(!isProfile);
  };

 const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Edit Profile',
    children: <EditProfile file={file}/>,
  },
  {
    key: '2',
    label: 'Change Password',
    children: <ChangePasswordForm />,
  }
];


  return (
    <div className="flex-grow flex justify-center">
      <div className="w-full max-w-xl p-6 rounded-2xl self-center">
        <div className="flex flex-col items-center">
          <EditProfilePic setFile={setFile} isProfile={isProfile}/>   
        </div>

        {/* Tabs Part */}
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Profile;
