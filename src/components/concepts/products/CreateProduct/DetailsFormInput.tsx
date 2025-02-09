// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

interface IDetailsFormInput {
  label: string;
}

export default function DetailsFormInput({ label }: IDetailsFormInput) {
  return (
    <div className="mt-4">
      <div
        className="w-full border border-gray-200 px-3 py-1 
            text-gray-500 text-sm flex items-center justify-between"
      >
        <label className="font-semibold" htmlFor={label}>
          Add {label}
        </label>
        <ExpandLessOutlinedIcon className="cursor-pointer" />
      </div>
      <div className="w-full min-h-40 border border-gray-200">
        <textarea
          name={label}
          className="w-full min-h-40 border-0 px-3"
        ></textarea>
      </div>
      <div
        className="w-full bg-gray-100 border border-gray-200 px-3 py-1 
            text-xs text-gray-500"
      >
        Word count: 0
      </div>
    </div>
  );
}
