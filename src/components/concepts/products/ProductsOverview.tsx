import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

export default function ProductsOverview() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl text-bold text-slate-800">Products Overview</h1>
      <div className="mt-4 bg-white rounded-lg w-full h-full shadow-lg">
        <div className="p-4 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center grow">
              <div className="p-2 rounded-t-lg border-t border-l border-r border-slate-300">
                Products
              </div>
              <div
                className="p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <span className="cursor-pointer">Categories</span>
              </div>
              <div
                className="p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <span className="cursor-pointer">Tags</span>
              </div>
              <div className="p-2 grow border-b border-slate-300">&nbsp;</div>
            </div>
            <div className="relative p-4">
              <TuneOutlinedIcon className="text-sky-600 cursor-pointer" />
              <span className="absolute top-2 right-2 bg-pink-600 px-1 rounded-full text-white text-xs">
                2
              </span>
            </div>
          </div>
          <div>Table</div>
        </div>
      </div>
    </div>
  );
}
