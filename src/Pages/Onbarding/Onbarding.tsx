import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Onbarding/Sidebar/Sidebar";
import Form from "../../Components/Onbarding/Form/Form";
import Header from "../../Components/Onbarding/Header/Header";
import { ONBOARDING_STEPS } from "../../Components/Onbarding/onboardingSteps";

const sectionTitleMap: Record<string, string> = {
  hospitals: "Hospital",
  clinics: "Clinic",
  doctors: "Doctor",
  nurses: "Nurse",
  medicine: "Medicine",
  diagnostics: "Diagnostics",
  physiotherapy: "Physiotherapy",
  ambulance: "Ambulance",
};

const Onbarding = () => {
  const { section } = useParams();
  const sectionTitle = section
    ? (sectionTitleMap[section] ?? "Hospital")
    : "Hospital";

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [section]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header
          sectionTitle={sectionTitle}
          steps={ONBOARDING_STEPS}
          activeStepIndex={activeStep}
        />
        <Form
          steps={ONBOARDING_STEPS}
          activeIndex={activeStep}
          onActiveIndexChange={setActiveStep}
        />
      </div>
    </div>
  );
};

export default Onbarding;
