import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { useState } from 'react';
import SubMenuItem, { ISubMenuItem } from './SubMenuItem';

interface IMenuItem {
  label: string;
  open: boolean;
  clickAction: () => void;
  icon: JSX.Element;
  hasSubmenu: boolean;
  submenu?: ISubMenuItem[];
}
export default function MenuItem({
  label,
  open,
  clickAction,
  icon,
  hasSubmenu,
  submenu,
}: IMenuItem) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleAction = () => {
    if (hasSubmenu) {
      setOpenDropdown(!openDropdown);
    } else {
      clickAction();
    }
  };

  const renderExpandIcon = () => {
    if (openDropdown) {
      return <ExpandLessOutlinedIcon />;
    } else {
      return <ExpandMoreOutlinedIcon />;
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="p-4 flex items-center w-full bg-transparent text-white 
            cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out"
        onClick={handleAction}
      >
        {icon}
        {open && (
          <>
            <span className="mr-1">{label}</span>
            {hasSubmenu && submenu && submenu.length > 0 && renderExpandIcon()}
          </>
        )}
      </div>
      {openDropdown && submenu && submenu.length > 0 && (
        <div className="bg-gray-100 flex flex-col w-full">
          {submenu?.map((sub, subIndex) => (
            <SubMenuItem key={subIndex} label={sub.label} url={sub.url} />
          ))}
        </div>
      )}
    </div>
  );
}
