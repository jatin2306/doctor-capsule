import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommonOnboardingForm from "./CommonOnboardingForm";
import Button from "../../../Utilities/Button/Button";
import { SIDEBAR_MODULE_SLUGS, getSidebarModuleIndex } from "../sidebarModules";
import { getOnboardingStepsForSection } from "../onboardingSteps";

type FormProps = {
  steps: readonly string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
};

const Form = ({ steps, activeIndex, onActiveIndexChange }: FormProps) => {
  const { section } = useParams();
  const navigate = useNavigate();
  const stepList = [...steps];

  const moduleIndex = getSidebarModuleIndex(section);
  const isLastStep = activeIndex >= stepList.length - 1;
  const isLastModule = moduleIndex >= SIDEBAR_MODULE_SLUGS.length - 1;
  const canGoBack = activeIndex > 0 || moduleIndex > 0;

  const handleNext = () => {
    if (!isLastStep) {
      onActiveIndexChange(
        Math.min(activeIndex + 1, stepList.length - 1),
      );
      return;
    }

    if (!isLastModule) {
      const nextSlug = SIDEBAR_MODULE_SLUGS[moduleIndex + 1];
      navigate(`/sign-in/${nextSlug}`);
      return;
    }

    navigate("/");
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      onActiveIndexChange(activeIndex - 1);
      return;
    }

    if (moduleIndex > 0) {
      const prevSlug = SIDEBAR_MODULE_SLUGS[moduleIndex - 1];
      const prevSteps = getOnboardingStepsForSection(prevSlug);
      const lastIdx = Math.max(0, prevSteps.length - 1);
      navigate(`/sign-in/${prevSlug}`, {
        state: { initialStep: lastIdx },
      });
    }
  };

  const nextLabel =
    isLastStep && isLastModule ? "Finish" : "NEXT";

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#f2f2f2]">
      <div className="mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 flex-col overflow-hidden border border-gray-200 bg-white">
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#f7f7f7]">
          <div className="shrink-0 bg-[#f5f5f5] pt-6">
            <div className="relative flex items-start justify-between px-1">
              <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-gray-200" />
              <div
                className="absolute left-0 top-[14px] h-[2px] bg-[#2f87df] transition-[width] duration-300 ease-out"
                style={{
                  width:
                    stepList.length > 1
                      ? `${((activeIndex + 1) / stepList.length) * 100}%`
                      : "0%",
                }}
              />

              {stepList.map((step, index) => {
                const isDone = index <= activeIndex;
                return (
                  <div
                    key={step}
                    className="relative flex w-full flex-col items-center"
                  >
                    <div
                      className={`mt-2 h-4 w-4 rounded-full border-4 ${
                        isDone
                          ? "border-[#2f87df] bg-[#2f87df]"
                          : "border-gray-200 bg-white"
                      }`}
                    />
                    <p
                      className={`mt-3 text-[12px] font-medium ${
                        isDone ? "text-[#111827]" : "text-gray-400"
                      }`}
                    >
                      {index + 1}. {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex min-h-full flex-col">
              <div className="flex-1">
                <CommonOnboardingForm
                  section={section}
                  activeStep={activeIndex}
                />
              </div>
              <div className="flex shrink-0 items-center justify-between gap-4 border-t border-gray-200 bg-gray-100 px-8 py-5">
                <div>
                  {canGoBack ? (
                    <Button
                      type="button"
                      className="rounded-xl border-2 border-gray-300 bg-white px-10 py-3 text-sm font-semibold text-[#374151] hover:bg-gray-50"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  ) : null}
                </div>
                <Button
                  type="button"
                  className="rounded-xl bg-[#2f87df] px-14 py-3 text-sm font-semibold text-white hover:bg-[#2576c8]"
                  onClick={handleNext}
                >
                  {nextLabel}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Form;
