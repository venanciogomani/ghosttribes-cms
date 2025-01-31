import logo from '../../../assets/logo-white.png';
import patternBg from '../../../assets/pattern_h.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { getCurrentDate } from '../../../utils/date-constants';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import { ISubMenuItem } from './SubMenuItem';

interface ISidebar {
  open: boolean;
}

export default function Sidebar({ open }: ISidebar) {
  const navigate = useNavigate();
  const currentDate = getCurrentDate();

  const productsSubmenu: ISubMenuItem[] = [
    {
      label: 'Products',
      url: '/admin/products',
    },
    {
      label: 'Categories',
      url: '/admin/products?type=categories',
    },
    {
      label: 'Tags',
      url: '/admin/products?type=tags',
    },
  ];

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
      <MenuItem
        label="Dashboard"
        open={open}
        clickAction={() => navigate('/admin')}
        icon={<SpeedOutlinedIcon className="mr-2 text-amber-600" />}
        hasSubmenu={false}
      />
      <MenuItem
        label="Orders"
        open={open}
        clickAction={() => navigate('/admin/orders')}
        icon={<EuroOutlinedIcon className="mr-2 text-emerald-600" />}
        hasSubmenu={true}
        submenu={[]}
      />
      <MenuItem
        label="Products"
        open={open}
        clickAction={() => navigate('/admin/products')}
        icon={<SellOutlinedIcon className="mr-2 text-indigo-600" />}
        hasSubmenu={true}
        submenu={productsSubmenu}
      />
      <MenuItem
        label="Books"
        open={open}
        clickAction={() => navigate('/admin/books')}
        icon={<AutoStoriesOutlinedIcon className="mr-2 text-rose-600" />}
        hasSubmenu={true}
      />
      <MenuItem
        label="Articles"
        open={open}
        clickAction={() => navigate('/admin/articles')}
        icon={<HistoryEduOutlinedIcon className="mr-2 text-yellow-600" />}
        hasSubmenu={true}
      />
      <MenuItem
        label="Pages"
        open={open}
        clickAction={() => navigate('/admin/pages')}
        icon={<LibraryBooksOutlinedIcon className="mr-2 text-sky-600" />}
        hasSubmenu={true}
      />
      <MenuItem
        label="Users"
        open={open}
        clickAction={() => navigate('/admin/users')}
        icon={<PeopleOutlineOutlinedIcon className="mr-2 text-pink-600" />}
        hasSubmenu={true}
      />
      <MenuItem
        label="Settings"
        open={open}
        clickAction={() => navigate('/admin/settings')}
        icon={<SettingsOutlinedIcon className="mr-2 text-orange-600" />}
        hasSubmenu={false}
      />
      {open && (
        <div className="absolute bottom-0 left-0 flex items-center p-4 text-white text-xs text-center font-semibold">
          &copy; {currentDate.year} Ghost Tribes CMS.
        </div>
      )}
    </div>
  );
}
