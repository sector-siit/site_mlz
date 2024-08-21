import React from 'react';

interface SelectWithLabelProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;  
  className?: string;
}
 
const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  label,
  options,
  placeholder = 'Seleccionar una opción',  
  className = '',
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="block text-azul-muni-texto text-base font-bold mb-1">
        {label}
      </label>
      <select
        className="w-[274px] h-[48px] p-2 rounded border border-cards-muni-light-blue text-base bg-cards-muni-light-sky text-azul-muni-texto"
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithLabel;
