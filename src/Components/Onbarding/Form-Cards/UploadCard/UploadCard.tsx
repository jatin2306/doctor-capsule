import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface UploadCardProps {
  label: string;
  maxSize: number;
  /** Merged with default outer card styles */
  className?: string;
  /** Plus / icon square */
  iconClassName?: string;
  /** Main label line */
  labelClassName?: string;
  /** Hint line under label (file type / selected name) */
  hintClassName?: string;
  /** Row that wraps icon + text (or icon+text group when Preview is shown) */
  innerClassName?: string;
  accept?: string;
  /** When false, only the title line is shown (no file-type row). Default true. */
  showHintLine?: boolean;
  /** Appends a red asterisk after the label (e.g. required photo). */
  required?: boolean;
  /** Left side of hint before " - Max-{maxSize}MB" (default "JPG/PNG") */
  formatsHint?: string;
  /** Optional Preview control on the right; click does not open file picker */
  showPreviewButton?: boolean;
  previewDisabled?: boolean;
  onPreviewClick?: () => void;
  /** Icon above text, both centered in the card (vertical + horizontal). */
  centered?: boolean;
  /** Called after the user picks a file (or clears). For parent-driven previews. */
  onFileSelected?: (file: File | null) => void;
}

const defaultRoot =
  "cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 transition-colors hover:border-gray-400";
const defaultIcon =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#264F7D] text-base font-medium text-white";
const defaultLabel = "text-base font-medium text-[#111827]";
const defaultHint = "mt-1 text-xs text-gray-400";
const defaultInner = "flex items-center gap-4";

const UploadCard = ({
  label,
  maxSize,
  className,
  iconClassName,
  labelClassName,
  hintClassName,
  innerClassName,
  accept = ".jpg,.jpeg,.png,image/jpeg,image/png",
  showHintLine = true,
  required = false,
  formatsHint = "JPG/PNG",
  showPreviewButton = false,
  previewDisabled = true,
  onPreviewClick,
  centered = false,
  onFileSelected,
}: UploadCardProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFileName("");
      onFileSelected?.(null);
      return;
    }
    setFileName(file.name);
    onFileSelected?.(file);
  };

  const hintText =
    fileName || `${formatsHint} - Max-${maxSize}MB`;

  const iconEl = (
    <div className={twMerge(defaultIcon, iconClassName)}>+</div>
  );

  const textBlock = (
    <div
      className={twMerge(
        "min-w-0",
        !centered && "flex-1",
        centered && "w-full text-center",
      )}
    >
      <p className={twMerge(defaultLabel, labelClassName)}>
        {label}
        {required ? (
          <span className="text-red-500" aria-hidden>
            *
          </span>
        ) : null}
      </p>
      {showHintLine ? (
        <p className={twMerge(defaultHint, hintClassName)}>{hintText}</p>
      ) : null}
    </div>
  );

  return (
    <div
      className={twMerge(defaultRoot, className)}
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
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        className={twMerge(
          defaultInner,
          centered &&
            "w-full flex-1 flex-col items-center justify-center gap-3 text-center",
          showPreviewButton && "w-full justify-between gap-4",
          innerClassName,
        )}
      >
        {showPreviewButton ? (
          <div className="flex min-w-0 flex-1 items-center gap-4">
            {iconEl}
            {textBlock}
          </div>
        ) : (
          <>
            {iconEl}
            {textBlock}
          </>
        )}

        {showPreviewButton ? (
          <button
            type="button"
            disabled={previewDisabled}
            onClick={(e) => {
              e.stopPropagation();
              onPreviewClick?.();
            }}
            className={twMerge(
              "shrink-0 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500",
              previewDisabled && "cursor-not-allowed opacity-70",
              !previewDisabled && "cursor-pointer hover:bg-gray-100",
            )}
          >
            Preview
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default UploadCard;
