import React from "react";
import { useParams } from "react-router-dom";
import CommonOnboardingForm from "./CommonOnboardingForm";
import Button from "../../../Utilities/Button/Button";

type FormProps = {
  steps: readonly string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
};

const Form = ({ steps, activeIndex, onActiveIndexChange }: FormProps) => {
  const { section } = useParams();
  const stepList = [...steps];

  return (
    <div className="min-h-full bg-[#f2f2f2]">
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden border border-gray-200 bg-white">
        <main className="bg-[#f7f7f7]">
          <div className=" bg-[#f5f5f5] py-6">
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

          <CommonOnboardingForm section={section} activeStep={activeIndex} />

          <div className="flex justify-end bg-gray-100 p-8 pt-0">
            <Button
              type="button"
              className="rounded-xl bg-[#2f87df] px-14 py-3 text-sm font-semibold text-white hover:bg-[#2576c8] disabled:cursor-not-allowed disabled:opacity-50"
              disabled={activeIndex >= stepList.length - 1}
              onClick={() =>
                onActiveIndexChange(
                  Math.min(activeIndex + 1, stepList.length - 1),
                )
              }
            >
              NEXT
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Form;
