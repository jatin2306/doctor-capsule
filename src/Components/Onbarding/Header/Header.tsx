import { SearchIcon } from "../../../Assets/SVG/Index";
import Button from "../../../Utilities/Button/Button";
import { Icon } from "@iconify/react";

type HeaderProps = {
  sectionTitle: string;
};

const Header = ({ sectionTitle }: HeaderProps) => {
  return (
    <div className="bg-white flex items-center justify-between border-b border-gray-200  py-[12px] px-4 sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#1f2937]">
          {sectionTitle} Onboarding
        </h1>
        <div className="mt-1 ml-1 flex items-center gap-3">
          <span className="text-lg text-gray-500">Steps 1 to 8</span>
          <div className="h-1.5 w-52 rounded-full bg-gray-300">
            <div className="h-1.5 w-[20%] rounded-full bg-[#2f87df]" />
          </div>
          <span className="text-xl text-gray-600">20%</span>
        </div>
      </div>
      <button
        type="button"
        className="rounded-full p-3 bg-[#FAFAFA] text-center"
      >
        <Icon
          icon="material-symbols:search-rounded"
          width="32"
          height="32"
          color="#808389"
        />
      </button>
    </div>
  );
};

export default Header;
