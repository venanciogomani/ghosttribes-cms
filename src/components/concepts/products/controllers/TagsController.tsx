import { ITag } from '../../../../models/products.type';
import { IDataItem } from '../../../shared/DataTable/DataTable';

export function createTagsDataTable(tags: ITag[]): IDataItem {
  return {
    columns: createTagsColumns(),
    rows: createTagsRows(tags),
  };
}

function createTagsColumns(): string[] {
  return ['ID', 'Name', 'Parent', 'Actions'];
}

function createTagsRows(tags: ITag[]): JSX.Element[] {
  return tags.map((tag) => (
    <div className="grid grid-cols-6 p-2 text-gray-800 border-b border-gray-200">
      <div>{tag.id}</div>
      <div>{tag.name}</div>
      <div>Nothing</div>
      <div
        onClick={() => {
          console.log(tag.id);
        }}
      >
        Edit | Action
      </div>
    </div>
  ));
}
