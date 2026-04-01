const Form = () => {
  const steps = [
    "Hospital Name",
    "Legal Name",
    "Hospital Type",
    "Registration Number",
    "Year Founded",
  ];

  return (
    <div className="min-h-full bg-[#f2f2f2] p-4 md:p-6">
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden border border-gray-200 bg-white">
        <main className="bg-[#f7f7f7]">
        

          <div className="border-b border-gray-200 bg-[#f5f5f5] px-8 py-6">
            <div className="grid grid-cols-7 gap-6">
              {steps.map((step, index) => (
                <div key={step} className="text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#2f87df]/20">
                    {index === 0 && (
                      <div className="h-4 w-4 rounded-full bg-[#2f87df]" />
                    )}
                  </div>
                  <p
                    className={`text-2xl ${index === 0 ? "font-semibold text-[#111827]" : "text-gray-400"}`}
                  >
                    {index + 1}. {step}
                  </p>
                </div>
              ))}
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
              className="rounded-xl bg-[#2f87df] px-14 py-3 text-xl font-semibold text-white hover:bg-[#2576c8]"
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
