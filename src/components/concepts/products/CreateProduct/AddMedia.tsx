import CloseIcon from '@mui/icons-material/Close';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import { trimToEllipsis } from '../../../../utils/text-constants';
import GtButton, { GtButtonType } from '../../../shared/GtButton/GtButton';

export default function AddMedia() {
  const hasMedia = false;
  return (
    <>
      <div className="w-full my-4 flex items-center">
        <GtButton
          label="Add media"
          variant={GtButtonType.PRIMARY}
          onClick={() => {}}
          startIcon={<PermMediaOutlinedIcon fontSize="small" />}
          fontSize="sm"
        />
      </div>
      {hasMedia && (
        <div className="w-full flex items-center mt-2">
          <div
            className="text-sky-600 text-sm border-2 border-sky-200 rounded-full
                text-center cursor-pointer py-1 px-2 transition duration-300 ease-in-out
                flex items-center justify-between"
            onClick={() => {}}
            title="gt-volume-1-the-ghost-of-africa-ebook.pdf"
          >
            <span>
              {trimToEllipsis('gt-volume-1-the-ghost-of-africa-ebook.pdf')}
            </span>
            <CloseIcon fontSize="small" className="ml-1" />
          </div>
          <div
            className="text-sky-600 text-sm border-2 border-sky-200 rounded-full
                text-center cursor-pointer py-1 px-2 transition duration-300 ease-in-out
                flex items-center justify-between ml-1"
            onClick={() => {}}
            title="gt-volume-1-the-ghost-of-africa-audio.pdf"
          >
            <span>
              {trimToEllipsis('gt-volume-1-the-ghost-of-africa-audio.pdf')}
            </span>
            <CloseIcon fontSize="small" className="ml-1" />
          </div>
        </div>
      )}
    </>
  );
}
