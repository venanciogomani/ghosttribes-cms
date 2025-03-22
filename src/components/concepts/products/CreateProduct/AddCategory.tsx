import AddCircleIcon from '@mui/icons-material/AddCircle';
import GtButton, { GtButtonType } from '../../../shared/GtButton/GtButton';

export default function AddCategory() {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Literature',
      subcategories: [
        {
          id: 2,
          name: 'Novels',
        },
        {
          id: 3,
          name: 'Comic Books',
        },
        {
          id: 4,
          name: 'History',
        },
        {
          id: 5,
          name: 'Education',
        },
      ],
    },
  ];
  return (
    <div className="p-2 flex flex-col">
      <div className="flex flex-col h-40 overflow-y-auto border-b border-gray-200 p-1">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col mb-2">
            <CategoryInput
              label={category.name}
              value={category.id}
              onSubmit={() => {}}
            />
            {category.subcategories?.map((subcategory) => (
              <div className="ml-4 my-1" key={subcategory.id}>
                <CategoryInput
                  label={subcategory.name}
                  value={subcategory.id}
                  onSubmit={() => {}}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex">
        <GtButton
          label="New category"
          variant={GtButtonType.PRIMARY}
          onClick={() => {}}
          fontSize="sm"
          startIcon={<AddCircleIcon />}
        />
      </div>
    </div>
  );
}

interface CategoryInputProps {
  label: string;
  value: number;
  onSubmit: (categoryId: number) => void;
}
function CategoryInput({ label, value, onSubmit }: CategoryInputProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4"
        onChange={() => onSubmit(value)}
      />
      <span className="ml-2 text-gray-600 text-sm font-semibold">{label}</span>
    </div>
  );
}

interface Category {
  id: number;
  name: string;
  subcategories?: {
    id: number;
    name: string;
  }[];
}
