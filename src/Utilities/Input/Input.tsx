interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
}

const Input = ({
  placeholder,
  value,
  onChange,
  type,
  className,
}: InputProps) => {
  return (
    <input
      className={`${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
