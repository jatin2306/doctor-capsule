interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  className,
  labelClassName,
  disabled,
}: InputProps) => {
  return (
    <div>
      <label className={` ${labelClassName}`}> {label}</label>
      <input
        className={`${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
