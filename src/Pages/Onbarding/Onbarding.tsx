import Sidebar from "../../Components/Onbarding/Sidebar/Sidebar";
import Form from "../../Components/Onbarding/Form/Form";
import Header from "../../Components/Onbarding/Header/Header";
import { useParams } from "react-router-dom";

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

const stepsConfig: Record<string, string[]> = {
  hospitals: [
    "Hospital Name",
    "Legal Name",
    "Hospital Type",
    "Registration Number",
    "Year Founded",
  ],
  clinics: ["Clinic Name", "Owner Name", "Clinic Type", "License Number"],
  doctors: [
    "Doctor Name",
    "Specialization",
    "Experience",
    "Registration Number",
  ],
  nurses: ["Nurse Name", "Qualification", "Experience"],
  medicine: ["Medicine Name", "Category", "Manufacturer"],
  diagnostics: ["Center Name", "Test Types", "Equipment"],
  physiotherapy: ["Center Name", "Services", "Experience"],
  ambulance: [
    "Service Details",
    "Staff Availability",
    "Address",
    "Services",
    "Documents",
  ],
};

const Onbarding = () => {
  const { section } = useParams();
  const sectionTitle = section
    ? (sectionTitleMap[section] ?? "Hospital")
    : "Hospital";

  const steps = section
    ? stepsConfig[section] || stepsConfig["hospitals"]
    : stepsConfig["hospitals"];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header sectionTitle={sectionTitle} />
        <Form steps={steps} />
      </div>
    </div>
  );
};

export default Onbarding;
