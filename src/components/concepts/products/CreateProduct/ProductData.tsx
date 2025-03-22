import { useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LinkIcon from '@mui/icons-material/Link';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

export default function ProductData() {
  const [tabSelected, setTabSelected] = useState(ITab.GENERAL);

  function renderTab() {
    switch (tabSelected) {
      case ITab.GENERAL:
        return <GeneralTab />;
      case ITab.INVENTORY:
        return <InventoryTab />;
      case ITab.SHIPPING:
        return <ShippingTab />;
      case ITab.LINKED_PRODUCTS:
        return <LinkedProductsTab />;
      case ITab.ATTRIBUTES:
        return <AttributesTab />;
      default:
        return <GeneralTab />;
    }
  }

  function handleTabChange(tab: ITab) {
    if (tabSelected === tab) {
      return;
    }
    setTabSelected(tab);
  }

  return (
    <div className="w-full min-h-40 flex justify-between">
      <div className="w-1/3 min-h-40 h-full border-r border-gray-200 flex flex-col">
        <TabButton
          label="General"
          icon={<BuildIcon className="p-1" />}
          selected={tabSelected === ITab.GENERAL}
          onClick={() => handleTabChange(ITab.GENERAL)}
        />
        <TabButton
          label="Inventory"
          icon={<InventoryIcon className="p-1" />}
          selected={tabSelected === ITab.INVENTORY}
          onClick={() => handleTabChange(ITab.INVENTORY)}
        />
        <TabButton
          label="Shipping"
          icon={<LocalShippingIcon className="p-1" />}
          selected={tabSelected === ITab.SHIPPING}
          onClick={() => handleTabChange(ITab.SHIPPING)}
        />
        <TabButton
          label="Linked Products"
          icon={<LinkIcon className="p-1" />}
          selected={tabSelected === ITab.LINKED_PRODUCTS}
          onClick={() => handleTabChange(ITab.LINKED_PRODUCTS)}
        />
        <TabButton
          label="Attributes"
          icon={<EditAttributesIcon className="p-1" />}
          selected={tabSelected === ITab.ATTRIBUTES}
          onClick={() => handleTabChange(ITab.ATTRIBUTES)}
        />
      </div>
      <div className="w-2/3 min-h-40 h-full flex flex-col p-2">
        {renderTab()}
      </div>
    </div>
  );
}

function TabButton({
  label,
  icon,
  selected,
  onClick,
}: {
  label: string;
  icon: JSX.Element;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${
        selected ? 'text-gray-600' : 'text-sky-600'
      } flex p-2 cursor-pointer hover:bg-gray-100`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-1">{label}</span>
    </div>
  );
}

enum ITab {
  GENERAL = 'General',
  INVENTORY = 'Inventory',
  SHIPPING = 'Shipping',
  LINKED_PRODUCTS = 'Linked Products',
  ATTRIBUTES = 'Attributes',
}

function GeneralTab() {
  return (
    <>
      <InputField
        label="Regular Price (€)"
        onChange={() => {}}
        type="number"
        placeholder="0.00"
      />
      <InputField
        label="Sale Price (€)"
        onChange={() => {}}
        type="number"
        placeholder="0.00"
      />
    </>
  );
}

function InventoryTab() {
  return (
    <InputField
      label="SKU"
      onChange={() => {}}
      type="text"
      placeholder="Enter SKU"
    />
  );
}

function ShippingTab() {
  return <div>Shipping tab (NOT MVP)</div>;
}

function LinkedProductsTab() {
  return <div>Linked Products tab (NOT MVP)</div>;
}

function AttributesTab() {
  return <div>Attributes tab (NOT MVP)</div>;
}

interface IInputField {
  label: string;
  type: string;
  placeholder?: string;
  onChange: (value: string | number) => void;
}
function InputField({ label, type, placeholder, onChange }: IInputField) {
  return (
    <div className="flex items-center justify-between mb-2 w-full">
      <span className="flex text-sm text-gray-600 mr-4">{label}</span>
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        className="border-2 border-gray-300 px-2 min-w-80 h-8 rounded-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
