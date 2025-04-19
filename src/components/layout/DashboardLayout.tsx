
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  

  return (
    <>
      <div className="flex">
        {/* sidebar left-side */}
        <div className="sidebar w-[250px]">
          <Sidebar />
        </div>
        {/* right-side */}
        <div className="flex-1">
          <Header/>
          {/* content */}
          <div className="h-[calc(100vh-85px)] overflow-auto bg-[#E6E4E0] p-4">
              <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;