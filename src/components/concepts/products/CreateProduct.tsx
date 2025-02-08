import CloseIcon from '@mui/icons-material/Close';
import FormInput from './FormInput';

export default function CreateProduct() {
  return (
    <div className="relative flex flex-col h-full p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-bold text-slate-800">Create Product</h1>
        <div className="text-sky-600 p-1 border-b-2 cursor-pointer">
          Go back
          <CloseIcon fontSize="small" className="ml-2" />
        </div>
      </div>
      <div className="mt-4 bg-white rounded-lg w-full h-full shadow-lg">
        <div className="grid grid-cols-3">
          <FormInput
            label="Product Name"
            type="text"
            placeholder="Ghost Tribes Volume 3"
            required
            onChange={() => {}}
            value=""
          />
          <FormInput
            label="Price"
            type="number"
            placeholder="9.99"
            onChange={() => {}}
            value=""
          />
          <FormInput
            label="Sale Price"
            type="number"
            placeholder="7.99"
            onChange={() => {}}
            value=""
          />
        </div>
      </div>
    </div>
  );
}
