interface GtButtonProps {
  label: string;
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: GtButtonType;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export default function GtButton({
  label,
  onClick,
  startIcon,
  endIcon,
  variant = GtButtonType.PRIMARY,
  fontSize = 'md',
}: GtButtonProps) {
  return (
    <div
      className={`flex items-center justify-center 
        cursor-pointer shadow-0 hover:shadow-md text-${fontSize}
        ${
          variant === GtButtonType.PRIMARY
            ? 'text-white bg-sky-800 hover:bg-sky-600 rounded p-2'
            : variant === GtButtonType.SECONDARY
              ? 'text-sky-600 border-2 border-sky-600 rounded p-2'
              : 'text-sky-800 border-b-2 border-sky-800 px-1'
        } transition duration-200 ease-in-out`}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </div>
  );
}

export enum GtButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}
