import profilePic from '../../../assets/profile_pic.jpg';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';

export default function Header() {
  return (
    <div className="w-full bg-[#15283c] h-16 flex justify-between items-center">
      <div
        className="flex items-center w-16 h-16 bg-pink-600 items-center 
            justify-center text-white cursor-pointer hover:bg-pink-800 
            transition duration-300 ease-in-out"
      >
        <MenuOutlinedIcon />
      </div>
      <div className="flex items-center h-full">
        <div className="flex items-center h-full">
          <div className="relative flex items-center mr-4 h-full">
            <EuroOutlinedIcon
              className="text-white hover:text-gray-200 transition 
                  duration-300 ease-in-out cursor-pointer"
            />
            <span
              className="absolute top-3 left-3 bg-pink-600 rounded-full 
                  px-1 text-white text-center text-xs"
            >
              3
            </span>
          </div>
          <div className="relative flex items-center mr-4 h-full">
            <NotificationsOutlinedIcon
              className="text-white hover:text-gray-200 transition 
                  duration-300 ease-in-out cursor-pointer"
            />
            <span
              className="absolute top-3 left-3 bg-pink-600 rounded-full 
                  px-1 text-white text-center text-xs"
            >
              7
            </span>
          </div>
          <div className="relative flex items-center mr-4 h-full">
            <MailOutlinedIcon
              className="text-white hover:text-gray-200 transition 
                  duration-300 ease-in-out cursor-pointer"
            />
            <span
              className="absolute top-3 left-3 bg-pink-600 rounded-full 
                  px-1 text-white text-center text-xs"
            >
              2
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-pink-600 h-full px-4">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center mr-2">
            <img
              src={profilePic}
              alt="profile"
              className="w-full rounded-full"
            />
          </div>
          <span className="text-sm text-white mr-2 font-semibold">
            Venancio Gomani
          </span>
          <KeyboardArrowDownOutlinedIcon className="text-white" />
        </div>
      </div>
    </div>
  );
}
