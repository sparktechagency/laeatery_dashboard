import React, { useState } from 'react';
import { Tabs } from 'antd';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaCamera } from 'react-icons/fa';
//import 'antd/dist/antd.min.css';

const { TabPane } = Tabs;

const ProfileSettings = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  return (
    <div className="min-h-full bg-gray-50 p-4 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md">
        <div className="text-left mb-6 cursor-pointer text-gray-500">← Profile</div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full">
              <FaCamera size={14} />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Mr. Admin</h2>
        </div>

        <Tabs defaultActiveKey="1" centered className="mt-6">
          <TabPane tab={<span className="font-medium">Edit Profile</span>} key="1">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">User Name</label>
                <input type="text" className="w-full p-2 border rounded-md" defaultValue="Asadujjaman" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" defaultValue="Asadujjaman@gmail.com" />
              </div>
              <div>
                <label className="block text-gray-700">Contact no</label>
                <input type="text" className="w-full p-2 border rounded-md" defaultValue="+99007007007" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Save Change</button>
            </form>
          </TabPane>

          <TabPane tab={<span className="font-medium">Change Password</span>} key="2">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword.current ? 'text' : 'password'}
                    className="w-full p-2 border rounded-md pr-10"
                    defaultValue="********"
                  />
                  <span className="absolute top-2.5 right-3 cursor-pointer" onClick={() => toggleVisibility('current')}>
                    {showPassword.current ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword.new ? 'text' : 'password'}
                    className="w-full p-2 border rounded-md pr-10"
                    defaultValue="********"
                  />
                  <span className="absolute top-2.5 right-3 cursor-pointer" onClick={() => toggleVisibility('new')}>
                    {showPassword.new ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showPassword.confirm ? 'text' : 'password'}
                    className="w-full p-2 border rounded-md pr-10"
                    defaultValue="********"
                  />
                  <span className="absolute top-2.5 right-3 cursor-pointer" onClick={() => toggleVisibility('confirm')}>
                    {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Save Change</button>
            </form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileSettings;
