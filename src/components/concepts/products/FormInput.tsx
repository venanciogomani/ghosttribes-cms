interface IFormInput {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  errorMessage?: string;
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  required,
  onChange,
  value = '',
  errorMessage,
}: IFormInput) {
  return (
    <div className="py-4 px-6">
      <label className="block text-sm text-gray-600 font-semibold mb-2">
        {label}
      </label>
      {errorMessage && (
        <span className="text-sm text-rose-600 py-2">
          Please enter a product name to continue.
        </span>
      )}
      <input
        className="w-full px-3 py-2 text-gray-700 bg-white rounded-md 
              focus:outline-none focus:shadow-sm border-2 border-gray-400"
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={() => onChange}
        required={required}
      />
    </div>
  );
}
