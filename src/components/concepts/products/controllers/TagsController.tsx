import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
        className="flex items-center p-2"
        onClick={() => {
          console.log(tag.id);
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
