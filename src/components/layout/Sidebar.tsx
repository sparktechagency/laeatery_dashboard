import { Layout} from 'antd';
import Logo from '../../assets/images/logo.png';
import MenuItem from './MenuItem';
import { menuItems } from '../../data/data';
import { TbLogout } from 'react-icons/tb';
const { Sider } = Layout;


const Sidebar = () => {

  return (
    <>
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
      }}
    >
   

      <div className="flex flex-col flex-1 overflow-y-auto "> 
        {/* Logo */}
        <div className="flex items-center justify-center h-[85px]">
          <img src={Logo} alt="Logo" className="h-16 object-contain" />
        </div> 

        {/* Menu Items */}
        <nav className="flex flex-col gap-1 px-4 pt-4 text-primary font-medium">
        {menuItems?.map((item, index) => (
          <MenuItem item={item}  key={index}/>
        ))}
         
        </nav>
      </div> 

      {/* Fixed Logout Button */}
      <div className="px-4 py-3 w-full absolute bottom-10">
        <div className='flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-100 text-primary font-medium'>
         <TbLogout className="text-[20px]"/> <span className='text-lg'>
         Logout
         </span>
        </div>
      </div> 
    </Sider>

    </>
  )
}

export default Sidebar