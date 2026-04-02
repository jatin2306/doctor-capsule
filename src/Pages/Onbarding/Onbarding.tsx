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

const Onbarding = () => {
  const { section } = useParams();
  const sectionTitle = section ? sectionTitleMap[section] ?? "Hospital" : "Hospital";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header sectionTitle={sectionTitle} />
        <Form />
      </div>
    </div>
  );
};

export default Onbarding;
