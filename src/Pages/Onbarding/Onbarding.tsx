import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/Onbarding/Sidebar/Sidebar";
import Form from "../../Components/Onbarding/Form/Form";
import Header from "../../Components/Onbarding/Header/Header";
import { getOnboardingStepsForSection } from "../../Components/Onbarding/onboardingSteps";

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

export type OnboardingLocationState = {
  initialStep?: number;
};

const Onbarding = () => {
  const { section } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const sectionTitle = section
    ? (sectionTitleMap[section] ?? "Hospital")
    : "Hospital";

  const steps = getOnboardingStepsForSection(section);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const st = location.state as OnboardingLocationState | null;
    if (
      st &&
      typeof st.initialStep === "number" &&
      Number.isFinite(st.initialStep) &&
      st.initialStep >= 0
    ) {
      setActiveStep(st.initialStep);
      navigate(
        { pathname: location.pathname, search: location.search },
        { replace: true, state: null },
      );
      return;
    }
    setActiveStep(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- reset per section; read `location.state` only on section change
  }, [section]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <Header
          sectionTitle={sectionTitle}
          steps={steps}
          activeStepIndex={activeStep}
        />
        <Form
          steps={steps}
          activeIndex={activeStep}
          onActiveIndexChange={setActiveStep}
        />
      </div>
    </div>
  );
};

export default Onbarding;
