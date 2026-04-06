import { SearchIcon } from "../../../Assets/SVG/Index";
import Button from "../../../Utilities/Button/Button";

type HeaderProps = {
  sectionTitle: string;
  steps: readonly string[];
  activeStepIndex: number;
};

const Header = ({ sectionTitle, steps, activeStepIndex }: HeaderProps) => {
  const total = steps.length;
  const current = Math.min(activeStepIndex, Math.max(0, total - 1));
  const stepNumber = total > 0 ? current + 1 : 0;
  const progressPercent =
    total > 0 ? Math.round(((current + 1) / total) * 100) : 0;

  return (
    <div className="sticky top-0 z-10 flex shrink-0 items-start justify-between border-l-2 border-gray-300 bg-white px-4 py-[14px]">
      <div className="pl-4">
        <h1 className="text-xl font-semibold text-[#1f2937]">
          {sectionTitle} Onboarding
        </h1>
 

        <div className="mt-2 flex flex-wrap items-center gap-3 ml-0.5">
          <span className="text-sm text-gray-500">
            Step {stepNumber} of {total}
          </span>
          <div className="h-1.5 min-w-[8rem] flex-1 max-w-xs rounded-full bg-gray-200">
            <div
              className="h-1.5 rounded-full bg-[#2f87df] transition-[width] duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-sm font-medium tabular-nums text-gray-600">
            {progressPercent}%
          </span>
        </div>
      </div>
      <Button
        onClick={() => {}}
        type="button"
        className="rounded-full p-2 text-5xl text-gray-500"
      >
        <SearchIcon className="h-8 w-6" stroke="#9CA3AF" strokeWidth={3.5} />
      </Button>
    </div>
  );
};

export default Header;
