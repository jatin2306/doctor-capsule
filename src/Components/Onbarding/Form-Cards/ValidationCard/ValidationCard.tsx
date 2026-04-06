type ValidationItem = {
  label: string;
  message: string;
};

const ValidationCard = ({ options }: { options: ValidationItem[] }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-[#111827]">
        Validation:
      </div>

      <ul className="space-y-3 px-5 py-6 pb-6 ">
        {options.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-base">
            {/* Red circle check */}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6668]">
              <span className="text-white text-xs">✓</span>
            </span>

            {item.label && (
              <span className="text-[#EF4444] font-medium">{item.label}</span>
            )}
            <span className="text-[#111827] font-medium">{item.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationCard;
