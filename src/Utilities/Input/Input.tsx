interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;

  variant?: "default" | "verify";

  className?: string;
  labelClassName?: string;
  disabled?: boolean;

  codeValue?: string;
  onCodeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVerify?: () => void;
  onResend?: () => void;
}
const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  variant = "default",
  className,
  labelClassName,
  disabled,

  codeValue,
  onCodeChange,
  onVerify,
  onResend,
}: InputProps) => {
  return (
    <div className="space-y-2">
      <label className={labelClassName}>{label}</label>

      {variant === "default" && (
        <input
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          disabled={disabled}
        />
      )}

      {variant === "verify" && (
        <div className="flex flex-col gap-3 md:flex-row md:items-start">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${className} w-full flex-1`}
          />

          <input
            type="text"
            placeholder="Enter Code"
            value={codeValue}
            onChange={onCodeChange}
            className={`${className} md:w-[140px]`}
          />

          <div className="flex flex-col items-end gap-1.5">
            <button
              type="button"
              onClick={onVerify}
              className="h-10 px-6 bg-black text-white rounded-md"
            >
              Verify
            </button>

            <button
              type="button"
              onClick={onResend}
              className="text-sm text-blue-500 underline"
            >
              Resend
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
