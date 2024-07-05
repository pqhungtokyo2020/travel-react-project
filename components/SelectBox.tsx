// components/SelectBox.tsx
import { useState, ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  onChange?: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;