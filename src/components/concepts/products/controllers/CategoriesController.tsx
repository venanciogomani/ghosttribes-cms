import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ICategory } from '../../../../models/products.type';
import { IDataItem } from '../../../shared/DataTable/DataTable';

export function createCategoriesDataTable(categories: ICategory[]): IDataItem {
  return {
    columns: createCategoryColumns(),
    rows: createCategoryRows(categories),
  };
}

function createCategoryColumns(): string[] {
  return ['ID', 'Name', 'Parent', 'Actions'];
}

function createCategoryRows(categories: ICategory[]): JSX.Element[] {
  return categories.map((category) => (
    <div
      className={`grid grid-cols-6 p-2 text-gray-800 border-b border-gray-200`}
    >
      <div>{category.id}</div>
      <div>{category.name}</div>
      <div>Nothing</div>
      <div
        className="flex items-center p-2"
        onClick={() => {
          console.log(category.id);
        }}
      >
        <VisibilityIcon
          fontSize="small"
          className="text-sky-600 mr-2 cursor-pointer hover:text-sky-800 
          transition duration-300 ease-in-out"
        />
        <EditIcon
          fontSize="small"
          className="text-yellow-600 mr-2 cursor-pointer hover:text-yellow-800 
          transition duration-300 ease-in-out"
        />
        <DeleteOutlineIcon
          fontSize="small"
          className="text-rose-600 mr-2 cursor-pointer hover:text-rose-800 
          transition duration-300 ease-in-out"
        />
      </div>
    </div>
  ));
}
