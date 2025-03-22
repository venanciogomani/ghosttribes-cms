import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GtButton, { GtButtonType } from '../../../shared/GtButton/GtButton';

export default function PublishProduct() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between mb-2">
        <GtButton
          label="Save draft"
          variant={GtButtonType.SECONDARY}
          onClick={() => {}}
          fontSize="sm"
        />
        <GtButton
          label="Preview"
          variant={GtButtonType.SECONDARY}
          onClick={() => {}}
          fontSize="sm"
        />
      </div>
      <StatusAttributes
        label="Status"
        value="Draft"
        icon={<PermDeviceInformationIcon className="text-gray-600" />}
        onChange={() => {}}
      />
      <StatusAttributes
        label="Visibility"
        value="Public"
        icon={<VisibilityIcon className="text-gray-600" />}
        onChange={() => {}}
      />
      <StatusAttributes
        label="Publish"
        value="immediately"
        icon={<CalendarMonthIcon className="text-gray-600" />}
        onChange={() => {}}
      />
      <div className="flex justify-end my-2">
        <GtButton
          label="Create product"
          variant={GtButtonType.PRIMARY}
          onClick={() => {}}
          fontSize="sm"
        />
      </div>
    </div>
  );
}

interface StatusAttributesProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
}
function StatusAttributes({
  label,
  value,
  icon,
  onChange,
}: StatusAttributesProps) {
  return (
    <div className="flex items-center my-2">
      {icon}
      <div className="flex items-center mx-1">
        <span className="text-gray-600">{label}:</span>
        <span className="text-gray-600 font-semibold ml-1">{value}</span>
      </div>
      <GtButton
        label="Edit"
        variant={GtButtonType.TERTIARY}
        onClick={() => {
          onChange;
        }}
        fontSize="sm"
      />
    </div>
  );
}
