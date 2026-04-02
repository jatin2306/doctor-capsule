import { DropdownIcon } from "../../Assets/SVG/Index";

interface SelectProps {
  label: string;
  placeholder: string;
  labelClassName: string;
  className: string;
  options: string[];
}
const Select = ({
  label,
  labelClassName,
  placeholder,
  className,
  options,
}: SelectProps) => {
  return (
    <div>
      <label className={`${labelClassName}`}> {label}</label>
      <div className="relative">
        <select
          className={`w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-400 ${className}`}
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
