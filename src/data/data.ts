
import {
    AppstoreOutlined,
    UserOutlined,
    CustomerServiceOutlined,
    SettingOutlined
  } from '@ant-design/icons';

export const menuItems = [
    { path: '/', label: 'Dashboard', icon:  AppstoreOutlined },
    { path: '/users', label: 'User Management', icon: UserOutlined },
    // { path: '/restaurants', label: 'Restaurants', icon: ShopOutlined },
    // { path: '/vibe', label: 'Vibe Management', icon: LineChartOutlined },
    // { path: '/cuisine', label: 'Cuisine Types', icon: TagsOutlined },
    { 
        // key: '/help',
        label: 'Help & Contact', 
        icon: CustomerServiceOutlined,
        hasArrow: true,
        children: [
            { path: '/help', label: 'Help & Support' },
            { path: '/faqs', label: 'FAQS' },
        ],
    },
    {
      icon: SettingOutlined,
      label: 'Settings',
      hasArrow: true,
      children: [
        { path: '/profile', label: 'Profile' },
        { path: '/about', label: 'About Us' },
        { path: '/terms', label: 'Terms & Conditions' },
        { path: '/privacy-policy', label: 'Privacy Policy' },
      ],
    },
  ];