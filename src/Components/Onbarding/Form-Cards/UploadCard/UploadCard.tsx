import React, { useRef, useState } from "react";

interface UploadCardProps {
  label: string;
  maxSize: number;
}

const UploadCard = ({ label, maxSize }: UploadCardProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
  };

  return (
    <div
      className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white p-6"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,image/jpeg,image/png"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#264F7D] text-white">
          +
        </div>
        <div>
          <p className="text-sm font-medium text-[#111827]">{label}</p>
          <p className="mt-1 text-xs text-gray-400">
            {fileName || `JPG/PNG - Max-${maxSize}MB`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;