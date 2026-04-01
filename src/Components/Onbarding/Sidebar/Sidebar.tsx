import Button from "../../../Utilities/Button/Button";
import {
  HospitalIcon,
  ClinicIcon,
  DoctorIcon,
  NurseIcon,
  MedicineIcon,
  DiagnosticsIcon,
  PhysiotherapyIcon,
  AmbulanceIcon,
} from "../../../Assets/SVG/Index";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Hospitals", icon: HospitalIcon },
    { name: "Clinics", icon: ClinicIcon },
    { name: "Doctors", icon: DoctorIcon },
    { name: "Nurses", icon: NurseIcon },
    { name: "Medicine", icon: MedicineIcon },
    { name: "Diagnostics", icon: DiagnosticsIcon },
    { name: "Physiotherapy", icon: PhysiotherapyIcon },
    { name: "Ambulance", icon: AmbulanceIcon },
  ];
  return (
    <aside className="h-screen w-[290px] shrink-0 bg-[#2f87df]">
      <div className="flex border-b bg-white border-white/20 p-8 justify-center items-center text-xl font-semibold">
        My Doctor Capsule
      </div>

      <nav className="px-3 py-5">
        {sidebarItems.map((item, index) => (
          <Button
            key={item.name}
            onClick={() => {}}
            className={`group mb-2 flex w-full items-center gap-3 px-4 py-3 text-left text-md ${
              index === 0
                ? "bg-white font-medium text-[#111827] rounded-lg"
                : "text-white hover:bg-white hover:font-medium hover:text-[#16477B] hover:rounded-lg border-b border-white/40"
            }`}
          >
            <span
              className={`shrink-0 transition ${
                index === 0
                  ? ""
                  : "group-hover:[&>svg>path]:fill-[#16477B] group-hover:[&>svg>path]:stroke-[#16477B]"
              }`}
            >
              {item.icon}
            </span>
            {item.name}
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
