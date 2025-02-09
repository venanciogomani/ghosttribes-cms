import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

interface IStatusActions {
  id: number;
  link: string;
}
export default function StatusActions({ link, id }: IStatusActions) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center p-2">
      <VisibilityIcon
        fontSize="small"
        className="text-sky-600 mr-2 cursor-pointer hover:text-sky-800 
          transition duration-300 ease-in-out"
        onClick={() => navigate(`/admin/${link}/view/${id}`)}
      />
      <EditIcon
        fontSize="small"
        className="text-yellow-600 mr-2 cursor-pointer hover:text-yellow-800 
          transition duration-300 ease-in-out"
        onClick={() => navigate(`/admin/${link}/edit/${id}`)}
      />
      <DeleteOutlineIcon
        fontSize="small"
        className="text-rose-600 mr-2 cursor-pointer hover:text-rose-800 
          transition duration-300 ease-in-out"
      />
    </div>
  );
}
