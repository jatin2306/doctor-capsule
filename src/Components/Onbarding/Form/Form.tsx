import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CommonOnboardingForm from "./CommonOnboardingForm";
import Button from "../../../Utilities/Button/Button";

const Form = () => {
  const steps = useMemo(
    () => [
      "Basic Details",
      "Contacts Info",
      "Address",
      "Info structure",
      "Doctors",
      "Services",
      "Document",
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const { section } = useParams();

  return (
    <div className="min-h-full bg-[#f2f2f2]">
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden border border-gray-200 bg-white">
        <main className="bg-[#f7f7f7]">
          <div className=" bg-[#f5f5f5] py-6">
            <div className="relative flex items-start justify-between px-1">
              <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-gray-200" />
              <div
                className="absolute left-0 top-[14px] h-[2px] bg-[#2f87df]"
                style={{
                  width:
                    steps.length > 1
                      ? `${((activeIndex + 1) / steps.length) * 100}%`
                      : "0%",
                }}
              />

              {steps.map((step, index) => {
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

          <CommonOnboardingForm
            section={section}
            activeStep={activeIndex}
          />

          <div className="flex justify-end p-8 pt-0 bg-gray-100">
            <Button
              type="button"
              className="rounded-xl bg-[#2f87df] px-14 py-3 text-xl font-semibold text-white hover:bg-[#2576c8] disabled:cursor-not-allowed disabled:opacity-50"
              disabled={activeIndex >= steps.length - 1}
              onClick={() =>
                setActiveIndex((prev) =>
                  Math.min(prev + 1, steps.length - 1)
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
