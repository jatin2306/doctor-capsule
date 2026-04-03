import { DropdownIcon } from "../../Assets/SVG/Index";

interface SelectProps {
  label: string;
  placeholder: string;
  labelClassName: string;
  className: string;
  options: string[];
  disabled?: boolean;
}
const Select = ({
  label,
  labelClassName,
  placeholder,
  disabled,
  className,
  options,
}: SelectProps) => {
  return (
    <div>
      <label className={`${labelClassName}`}> {label}</label>
      <div className="relative">
        <select
          className={`w-full appearance-none rounded-md bg-gray-50 px-4 py-2.5 pr-10 text-base text-gray-400 focus-visible:outline-none ${className}`}
          disabled={disabled}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-end pb-2">
          {DropdownIcon}
        </div>
      </div>
    </div>
  );
};

export default Select;
