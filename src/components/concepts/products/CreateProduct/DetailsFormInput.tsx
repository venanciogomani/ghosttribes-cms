export default function DetailsFormInput() {
  return (
    <>
      <div className="w-full min-h-40">
        <textarea className="w-full min-h-40 border-0 px-3"></textarea>
      </div>
      <div
        className="w-full bg-gray-100 border border-gray-200 px-3 py-1 
            text-xs text-gray-500"
      >
        Word count: 0
      </div>
    </>
  );
}
