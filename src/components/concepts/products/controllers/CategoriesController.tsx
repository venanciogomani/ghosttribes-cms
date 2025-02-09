import { ICategory } from '../../../../models/products.type';
import { IDataItem } from '../../../shared/DataTable/DataTable';
import StatusActions from '../StatusActions';

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
      <StatusActions id={category.id} link="categories" />
    </div>
  ));
}
