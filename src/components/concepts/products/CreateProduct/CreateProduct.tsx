import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { toSentenceCase } from '../../../../utils/text-constants';
import PublishProduct from './PublishProduct';
import AddCategory from './AddCategory';
import DetailsFormInput from './DetailsFormInput';
import AddMedia from './AddMedia';
import ProductData from './ProductData';
import AddFeaturedImage from './AddFeaturedImage';
import AddTag from './AddTag';

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
          <CollapsibleSection
            title="Description"
            children={<DetailsFormInput />}
          />
          <CollapsibleSection title="Product data" children={<ProductData />} />
          <CollapsibleSection
            title="Specification"
            children={<DetailsFormInput />}
          />
        </div>
        <div className="w-1/3 py-4 px-6 flex flex-col">
          <CollapsibleSection title="Publish" children={<PublishProduct />} />
          <CollapsibleSection
            title="Featured image"
            children={<AddFeaturedImage />}
          />
          <CollapsibleSection title="Categories" children={<AddCategory />} />
          <CollapsibleSection title="Tags" children={<AddTag />} />
        </div>
      </div>
    </div>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}
function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full border-2 border-gray-200 mb-4">
      <div
        className="font-semibold text-gray-600 p-2 border-b-2 border-gray-200 
              flex items-center justify-between"
      >
        <span>{title}</span>
        {isOpen ? (
          <ExpandMoreOutlinedIcon
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <ExpandLessOutlinedIcon
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && children}
    </div>
  );
}
