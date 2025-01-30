import CloseIcon from '@mui/icons-material/Close';

interface IFilterDrawer {
  show: boolean;
  setShow: (show: boolean) => void;
}
export default function FilterDrawer({ show, setShow }: IFilterDrawer) {
  return (
    <div
      className={`${!show ? 'hidden' : ''} absolute top-0 right-0 bg-white p-2 h-full w-80 shadow-xl border-l-4 border-slate-100 z-30`}
    >
      <div className="flex items-center justify-between my-3 pb-3 border-b-2 border-gray-200">
        <span>&nbsp;</span>
        <span className="text-gray-600">Filter</span>
        <CloseIcon
          className="text-sky-400 cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        />
      </div>
      {/* Add your filter components here */}
      <div className="flex flex-col">
        <select className="w-full p-2 border-2 border-sky-400 rounded text-sm">
          <option value="">Select a category</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
        <select className="mt-4 w-full p-2 border-2 border-sky-400 rounded text-sm">
          <option value="">Select a tag</option>
          <option value="1">Tag 1</option>
          <option value="2">Tag 2</option>
          <option value="3">Tag 3</option>
        </select>
      </div>
      <div className="w-full flex items-center justify-between mt-4">
        <div
          className="text-sm font-semibold bg-sky-600 border-2 border-sky-600 py-3 px-8 
            text-white rounded cursor-pointer hover:bg-sky-800 hover:border-sky-800 
            transition duration-300 ease-in-out"
        >
          Apply
        </div>
        <div
          className="text-sm font-semibold border-2 border-sky-600 py-3 px-8 
            text-sky-600 rounded cursor-pointer hover:border-sky-800 hover:text-sky-800 
            transition duration-300 ease-in-out"
        >
          Clear
        </div>
      </div>
    </div>
  );
}
