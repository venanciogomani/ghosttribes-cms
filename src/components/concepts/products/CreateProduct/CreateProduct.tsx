import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { toSentenceCase } from '../../../../utils/text-constants';
import PublishProduct from './PublishProduct';
import AddCategory from './AddCategory';
import DetailsFormInput from './DetailsFormInput';
import AddMedia from './AddMedia';
import ProductData from './ProductData';

export default function CreateProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const productType = type ? toSentenceCase(type) : 'Product';

  return (
    <div className="relative flex flex-col p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-bold text-slate-800">
          Create {productType}
        </h1>
        <div
          className="text-sky-600 p-1 border-b-2 cursor-pointer"
          onClick={() => navigate(`/admin/products`)}
        >
          Go back
          <CloseIcon fontSize="small" className="ml-2" />
        </div>
      </div>
      <div className="mt-4 bg-white rounded-lg w-full h-full shadow-lg flex justify-between">
        <div className="w-2/3 flex flex-col py-4 px-6">
          <input
            className="w-full h-10 px-3 py-1 
              border border-gray-200"
            type="text"
            placeholder="Add name"
            onChange={() => {}}
          />
          <AddMedia />
          <DetailsFormInput label="Description" />
          <ProductData />
          <DetailsFormInput label="Specification" />
        </div>
        <div className="w-1/3 py-4 px-6 flex flex-col">
          <PublishProduct />
          <AddCategory />
        </div>
      </div>
    </div>
  );
}
