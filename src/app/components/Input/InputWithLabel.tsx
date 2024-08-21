import React from 'react';

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  className?: string;
}

// Define the reusable InputWithLabel component
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="block text-azul-muni-texto text-base font-bold mb-1">
        {label}
      </label>
      <input
        type="text"
        className="w-[274px] h-[48px] p-2 py-2 px-4 gap-2 rounded border-t border-l border-[1px] border-cards-muni-light-blue text-base bg-cards-muni-light-sky text-azul-muni-texto placeholder-azul-muni-texto"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputWithLabel;
