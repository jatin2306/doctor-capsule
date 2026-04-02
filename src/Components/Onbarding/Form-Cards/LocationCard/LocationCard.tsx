import Button from "../../../../Utilities/Button/Button";

const LocationPreviewCard = () => (
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
export default LocationPreviewCard;
