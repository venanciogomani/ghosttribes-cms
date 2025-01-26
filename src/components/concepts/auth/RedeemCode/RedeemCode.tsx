interface IAuthStep {
  action: (step: number) => void;
}

export default function RedeemCode({ action }: IAuthStep) {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <span className="text-sm text-gray-100 dark:text-gray-800 mt-2 font-semibold mb-4">
        Please keep your browser open.
      </span>
      <input
        type="text"
        className="border-2 outline-none border-slate-800 bg-gray-100 w-full h-12 p-2"
        placeholder="Enter Code"
      />
      <div
        className="mt-4 px-3 py-2 border-2 border-rose-800 text-rose-800 font-semibold 
        text-center rounded-full cursor-pointer hover:text-slate-800 hover:border-slate-800 
        transition duration-300 ease-in-out"
        onClick={() => action(2)}
      >
        Redeem Code
      </div>
      <span
        className="cursor-pointer underline text-sm text-slate-600 mt-2"
        onClick={() => action(0)}
      >
        Go back.
      </span>
    </div>
  );
}
