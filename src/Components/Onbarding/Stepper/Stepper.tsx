const Stepper = ({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) => {
  const totalSteps = steps.length;

  const stepWidth = 100 / totalSteps;

  const progressWidth = stepWidth * (activeStep - 0.5);

  return (
    <div className="w-full px-8 py-8 bg-[#f5f5f5] border-b border-gray-200">
      <div className="relative flex items-center justify-between">
        <div className="absolute top-[6px] left-0 right-0 h-[2px] bg-gray-300" />

        <div
          className="absolute top-[6px] left-0 h-[2px] bg-[#2f87df] transition-all duration-300"
          style={{
            width: `${progressWidth}%`,
          }}
        />

        {steps.map((step, index) => {
          const isActive = index + 1 === activeStep;
          const isCompleted = index + 1 < activeStep;

          return (
            <div
              key={step}
              className="flex flex-col items-center flex-1 text-center"
            >
              <div
                className={`z-0 h-4 w-4 rounded-full ${
                  isActive || isCompleted ? "bg-[#2f87df]" : "bg-gray-300"
                }`}
              />

              <p
                className={`mt-3 text-lg ${
                  isActive ? "text-black font-medium" : "text-gray-400"
                }`}
              >
                {index + 1}. {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Stepper;
