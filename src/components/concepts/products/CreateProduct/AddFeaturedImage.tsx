import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GtButton, { GtButtonType } from '../../../shared/GtButton/GtButton';

export default function AddFeaturedImage() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 h-32 text-gray-400 text-sm flex items-center justify-center">
        Add featured image
      </div>
      <div className="flex p-2">
        <GtButton
          label="Upload image"
          variant={GtButtonType.PRIMARY}
          onClick={() => {}}
          fontSize="sm"
          startIcon={<InsertPhotoIcon fontSize="small" />}
        />
      </div>
    </div>
  );
}
