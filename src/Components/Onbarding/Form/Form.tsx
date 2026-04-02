import React, { useState } from "react";

const Form = () => {
  const steps = [
    "Hospital Name",
    "Legal Name",
    "Hospital Type",
    "Registration Number",
    "Year Founded",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-full bg-[#f2f2f2]">
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden border border-gray-200 bg-white">
        <main className="bg-[#f7f7f7]">
          <div className="border-b border-gray-200 bg-[#f5f5f5] py-6">
          <div className="relative flex items-start justify-between">
       
            <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-gray-200" />
      
            <div
              className="absolute left-0 top-[14px] h-[2px] bg-[#2f87df]"
              style={{
                width:
                  steps.length > 1
                    ? `${((activeIndex + 1) / (steps.length)) * 100}%`
                    : "0%",
              }}
            />

            {steps.map((step, index) => {
              const isDone = index <= activeIndex;
              return (
                <div key={step} className="relative  flex w-full flex-col items-center">
                  <div
                    className={`h-4 w-4 rounded-full border-4 mt-2 ${
                      isDone ? "border-[#2f87df] bg-[#2f87df]" : "border-gray-200 bg-white"
                    }`}
                  />
                  <p
                    className={`mt-3 text-xs font-medium ${
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

          <div className="grid gap-4 p-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {[
                "Hospital Name",
                "Legal Name",
                "Hospital Type",
                "Registration Number",
                "Year Founded",
              ].map((label) => (
                <div key={label}>
                  <label className="mb-1 block text-xl font-medium text-[#111827]">
                    {label}
                  </label>
                  <input
                    disabled
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-lg text-gray-400"
                    placeholder={
                      label === "Hospital Type"
                        ? "Select Type"
                        : label === "Year Founded"
                          ? "Select Year"
                          : label === "Registration Number"
                            ? "Enter Number"
                            : "K.R. Hospital"
                    }
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xl font-medium text-[#111827]">
                  Opening Time
                </label>
                <input
                  disabled
                  className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-lg text-gray-400"
                  placeholder="Select Time"
                />
              </div>
              <div>
                <label className="mb-1 block text-xl font-medium text-[#111827]">
                  Closing Time
                </label>
                <input
                  disabled
                  className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-lg text-gray-400"
                  placeholder="Select Time"
                />
              </div>

              <div className="rounded-md border border-dashed border-gray-300 bg-white p-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2f87df] px-3 py-2 text-white"
                >
                  +
                </button>
                <p className="mt-2 text-xl font-medium text-[#111827]">
                  Upload Hospital Logo
                </p>
                <p className="text-sm text-gray-400">JPG/PNG - Max-5MB</p>
              </div>

              <div className="rounded-md border border-gray-200 bg-white">
                <div className="border-b border-gray-200 px-4 py-3 text-2xl font-semibold text-[#111827]">
                  Validation:
                </div>
                <ul className="space-y-2 px-4 py-3 text-lg text-[#EF4444]">
                  <li>● Hospital Name is Required.</li>
                  <li>● Legal Name is Required.</li>
                  <li>● Invalid Registration Number.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end p-8 pt-0">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => Math.min(prev + 1, steps.length - 1))
              }
              disabled={activeIndex >= steps.length - 1}
              className="rounded-xl bg-[#2f87df] px-14 py-3 text-xl font-semibold text-white hover:bg-[#2576c8] disabled:cursor-not-allowed disabled:opacity-50"
            >
              NEXT
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Form;
