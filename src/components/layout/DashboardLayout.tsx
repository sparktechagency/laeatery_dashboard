
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  

  return (
   <>
  
     <div className="flex">
        {/* sidebar left-side */}
        <div className="sidebar w-[250px] bg-green-500">
          <Sidebar/>
        </div>
        {/* right-side */}
        <div className="flex-1">
           {/* header part */}
           <div className="h-[90px] bg-pink-400">
             This is Header
           </div>
           {/* content */}
           <div className="h-[calc(100vh-90px)] overflow-auto bg-purple-400">
              <Outlet/>
           </div>
        </div>
     </div>
   </>
  );
};

export default DashboardLayout;