import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IProduct } from '../../../../models/products.type';
import { IDataItem } from '../../../shared/DataTable/DataTable';

export function createProductsDataTable(products: IProduct[]): IDataItem {
  return {
    columns: createProductColumns(),
    rows: createProductRows(products),
  };
}

function createProductColumns(): string[] {
  return ['ID', 'Name', 'SKU', 'Price', 'Sale Price', 'Actions'];
}

function createProductRows(products: IProduct[]): JSX.Element[] {
  return products.map((product) => (
    <div className="grid grid-cols-6 p-2 text-gray-800 border-b border-gray-200">
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.sku}</div>
      <div>{product.price}</div>
      <div>{product.salePrice}</div>
      <div
        className="flex items-center p-2"
        onClick={() => {
          console.log(product.id);
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
