interface IAuthStep {
  action: (step: number) => void;
}
export default function GenerateCode({ action }: IAuthStep) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="px-3 py-2 border-2 border-rose-800 text-rose-800 font-semibold 
        text-center rounded-full cursor-pointer hover:text-slate-800 hover:border-slate-800 
        transition duration-300 ease-in-out"
        onClick={() => action(1)}
      >
        Generate Code
      </div>
      <span className="text-sm text-gray-100 dark:text-gray-800 mt-2 font-semibold">
        Please keep your browser open.
      </span>
    </div>
  );
}
