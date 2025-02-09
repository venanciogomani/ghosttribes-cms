import { IProduct } from '../../../../models/products.type';
import { IDataItem } from '../../../shared/DataTable/DataTable';
import StatusActions from '../StatusActions';

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
      <StatusActions id={product.id} link="products" />
    </div>
  ));
}
