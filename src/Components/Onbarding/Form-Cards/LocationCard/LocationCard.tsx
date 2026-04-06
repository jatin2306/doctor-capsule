import Button from "../../../../Utilities/Button/Button";

const MapGlyph = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.25" fill="currentColor" />
  </svg>
);

const RedPin = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 2C7.03 2 3 6.03 3 11c0 7.5 9 15 9 15s9-7.5 9-15c0-4.97-4.03-9-9-9z"
      fill="#EF4444"
    />
    <circle cx="12" cy="11" r="3" fill="white" />
  </svg>
);

export type LocationPreviewCardProps = {
  /** Clinic step: pin on map, coords, full-width bottom "Open in Maps". */
  variant?: "default" | "clinic";
};

const LocationPreviewCard = ({
  variant = "default",
}: LocationPreviewCardProps) => {
  if (variant === "clinic") {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-44 w-full bg-gradient-to-br from-sky-100 via-sky-50 to-emerald-100">
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 drop-shadow-md">
            <RedPin />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 border-t border-gray-100 px-5 py-4 text-center">
          <div className="border-r border-gray-200 pr-4">
            <p className="text-sm font-semibold text-[#111827]">Latitude</p>
            <p className="mt-1 text-base font-semibold text-[#2f87df]">
              22.3364
            </p>
          </div>
          <div className="pl-4">
            <p className="text-sm font-semibold text-[#111827]">Longitude</p>
            <p className="mt-1 text-base font-semibold text-[#2f87df]">
              103.8438
            </p>
          </div>
        </div>
        <div className="px-5 pb-5">
          <Button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-100 py-3 text-sm font-semibold text-[#374151] hover:bg-gray-200"
            onClick={() => {}}
          >
            <MapGlyph className="h-5 w-5 text-gray-600" />
            Open in Maps
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-lg bg-white pb-4 ">
      <div className="relative overflow-hidden rounded-t-lg rounded-b-none">
        <div
          className="h-44 w-full bg-gradient-to-br from-sky-100 via-sky-50 to-emerald-100"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <Button
            type="button"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] shadow-md"
            onClick={() => {}}
          >
            Open in Maps
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0  pt-2 justify-center items-center text-center">
        <div className="border-r border-gray-200 pr-4">
          <p className="text-md font-semibold text-[#111827]">Latitude</p>
          <p className="mt-1 text-sm font-semibold text-[#2f87df]/90">22.3364</p>
        </div>
        <div className="pl-4">
          <p className="text-md font-semibold text-[#111827]">Longitude</p>
          <p className="mt-1 text-sm font-semibold text-[#2f87df]/90">103.8438</p>
        </div>
      </div>
    </div>
  );
};

export default LocationPreviewCard;
