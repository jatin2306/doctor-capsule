interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;

  variant?: "default" | "verify" | "checkbox";

  className?: string;
  labelClassName?: string;
  disabled?: boolean;

  // verify props
  codeValue?: string;
  onCodeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVerify?: () => void;
  onResend?: () => void;

  // checkbox props
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
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

  checked,
  defaultChecked,
  onCheckboxChange,
  children,
}: InputProps) => {
  return (
    <div className="space-y-2">
      {label && <label className={labelClassName}>{label}</label>}

      {/* DEFAULT INPUT */}
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

      {/* VERIFY INPUT */}
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

      {variant === "checkbox" && (
        <label className="flex cursor-pointer items-center gap-2.5">
          <input
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onCheckboxChange}
            className={`h-4 w-4 shrink-0 rounded-md border border-gray-300 text-[#2f87df] accent-[#324664] ${className}`}
          />
          <span className="text-sm font-semibold text-[#111827]">
            {children}
          </span>
        </label>
      )}
    </div>
  );
};

export default Input;