import logo from '../../../assets/logo-white.png';
import patternBg from '../../../assets/pattern_h.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { getCurrentDate } from '../../../utils/date-constants';
import { useNavigate } from 'react-router-dom';

interface ISidebar {
  open: boolean;
}

export default function Sidebar({ open }: ISidebar) {
  const navigate = useNavigate();
  const currentDate = getCurrentDate();

  return (
    <div
      className={`bg-[#15283c]
        h-screen sticky flex flex-col shadow-lg z-50 relative 
        ${open ? 'w-1/5' : 'w-[60px]'}`}
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full h-16 bg-[#214162] flex items-center p-4">
        <img src={logo} alt="logo" className="w-8" />
        {open && (
          <div className="hidden md:flex items-end ml-2">
            <span className="text-white text-xl font-semibold">
              Ghost Tribes
            </span>
            <span className="text-white font-bold text-xs bg-pink-600 p-1 rounded-full ml-1">
              cms
            </span>
          </div>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin')}
      >
        <SpeedOutlinedIcon className="mr-2 text-amber-600" />
        {open && <span className="mr-1 text-gold-600">Dashboard</span>}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/orders')}
      >
        <EuroOutlinedIcon className="mr-2 text-emerald-600" />
        {open && (
          <>
            <span className="mr-1">Orders</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/products')}
      >
        <SellOutlinedIcon className="mr-2 text-indigo-600" />
        {open && (
          <>
            <span className="mr-1">Products</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/books')}
      >
        <AutoStoriesOutlinedIcon className="mr-2 text-rose-600" />
        {open && (
          <>
            <span className="mr-1">Books</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/articles')}
      >
        <HistoryEduOutlinedIcon className="mr-2 text-yellow-600" />
        {open && (
          <>
            <span className="mr-1">Articles</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/pages')}
      >
        <LibraryBooksOutlinedIcon className="mr-2 text-sky-600" />
        {open && (
          <>
            <span className="mr-1">Pages</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/users')}
      >
        <PeopleOutlineOutlinedIcon className="mr-2 text-pink-600" />
        {open && (
          <>
            <span className="mr-1">Users</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </div>
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
        cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={() => navigate('/admin/settings')}
      >
        <SettingsOutlinedIcon className="mr-2 text-orange-600" />
        {open && <span className="mr-1">Settings</span>}
      </div>
      {open && (
        <div className="absolute bottom-0 left-0 flex items-center p-4 text-white text-xs text-center font-semibold">
          &copy; {currentDate.year} Ghost Tribes CMS.
        </div>
      )}
    </div>
  );
}
