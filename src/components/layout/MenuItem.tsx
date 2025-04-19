import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({ item } : {item:any}) => {
  const { label, path, hasArrow, children } = item;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = path && pathname === path;

  const toggleOpen = () => {
    if (hasArrow) setOpen(!open);
    else if (path) navigate(path);
  };


  return (
    <div>
      <div
        onClick={toggleOpen}
        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all
          ${isActive ? 'bg-primary text-white' : 'text-primary hover:bg-gray-100'}`}
      >
        <div className="flex items-center gap-3">
          {item?.icon && (
            <item.icon className={`text-lg`}/>
          )}
          <span className="text-base font-medium">{label}</span>
        </div>
        {hasArrow && (
          <span className="text-xs">{open ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>
        )}
      </div>

      {/* Submenu Items */}
      {open && children && (
        <div className="ml-8 mt-1 flex flex-col gap-1">
          {children.map((child, index) => (
            <div
              key={index}
              onClick={() => navigate(child.path)}
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                pathname === child.path
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
