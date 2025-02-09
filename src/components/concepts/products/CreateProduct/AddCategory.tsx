// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

export default function AddCategory() {
  return (
    <div className="w-full h-40 border-2 border-gray-200 mt-4">
      <div
        className="font-semibold text-gray-600 p-2 border-b-2 border-gray-200 
              flex items-center justify-between"
      >
        <span>Categories</span>
        <ExpandLessOutlinedIcon className="cursor-pointer" />
      </div>
    </div>
  );
}
