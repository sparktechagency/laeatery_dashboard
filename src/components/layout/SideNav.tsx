import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  UserOutlined,
  ShopOutlined,
  LineChartOutlined,
  TagsOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideNav = () => {
  const navigate = useNavigate();

  const menuItems = [
    { key: '/', label: 'Dashboard', icon: <AppstoreOutlined /> },
    { key: '/users', label: 'User Management', icon: <UserOutlined /> },
    { key: '/restaurants', label: 'Restaurants', icon: <ShopOutlined /> },
    { key: '/vibe', label: 'Vibe Management', icon: <LineChartOutlined /> },
    { key: '/cuisine', label: 'Cuisine Types', icon: <TagsOutlined /> },
    { key: '/help', label: 'Help & Contact', icon: <CustomerServiceOutlined /> },
    {
      key: 'settings',
      label: 'Settings',
      children: [
        { key: '/settings/profile', label: 'Profile' },
        { key: '/settings/about', label: 'About Us' },
      ],
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
     

  return (
    <Sider
      width={250}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Scrollable Top */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-center h-[80px] border-b border-gray-200">
          <img src="/logo.png" alt="Logo" className="h-10 object-contain" />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['/']}
          items={menuItems}
          onClick={handleMenuClick}
          className="px-2 pt-4"
        />
      </div>

      {/* Logout Button */}
      <div className="px-4 py-3 border-t border-gray-200">
        <div
          onClick={() => navigate('/logout')}
          className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <LogoutOutlined className="text-lg" />
          <span className="text-sm font-medium">Log out</span>
        </div>
      </div>
    </Sider>
  );
};

export default SideNav;
