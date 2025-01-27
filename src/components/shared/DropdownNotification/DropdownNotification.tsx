import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
// import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { formatDate } from '../../../utils/date-constants';
import { INotification } from '../../../models/notifications.type';

interface IDropdownNotification {
  notifications: INotification[];
}
export default function DropdownNotification({
  notifications,
}: IDropdownNotification) {
  return (
    <div className="absolute top-14 right-0 bg-white shadow-lg flex flex-col min-w-80">
      {notifications
        .map((notification, index) => (
          <div
            key={index}
            className="py-1 px-2 bg-gray-100 hover:bg-gray-200 
          transition duration-300 ease-in-out cursor-pointer 
          border-b border-gray-200"
          >
            <div className="flex items-center">
              <DoneAllOutlinedIcon className="text-sky-600 mr-2" />
              <div className="flex-1">
                <span className="text-sm font-semibold mr-1">
                  {notification.author}
                </span>
                <span className="text-xs text-gray-600">
                  {notification.content}
                </span>
              </div>
              <span className="text-xs text-gray-600">
                {formatDate(notification.createdAt)}
              </span>
            </div>
          </div>
        ))
        .slice(0, 4)}
      <span
        className="text-sm text-sky-600 font-semibold cursor-pointer 
        hover:text-sky-600 transition duration-300 ease-in-out 
        border-t border-sky-200 text-center p-2"
      >
        See all
      </span>
    </div>
  );
}
