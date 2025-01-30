import { useNavigate } from 'react-router-dom';

export interface ISubMenuItem {
  label: string;
  url: string;
}

export default function SubMenuItem({ label, url }: ISubMenuItem) {
  const navigate = useNavigate();
  return (
    <span
      className="px-4 py-2 text-gray-600 bg-transparent cursor-pointer hover:bg-gray-200"
      onClick={() => navigate(url)}
    >
      {label}
    </span>
  );
}
