import Button from "../../../Utilities/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarItems = [
    { name: "Hospitals", slug: "hospitals", icon: HospitalIcon },
    { name: "Clinics", slug: "clinics", icon: ClinicIcon },
    { name: "Doctors", slug: "doctors", icon: DoctorIcon },
    { name: "Nurses", slug: "nurses", icon: NurseIcon },
    { name: "Medicine", slug: "medicine", icon: MedicineIcon },
    { name: "Diagnostics", slug: "diagnostics", icon: DiagnosticsIcon },
    { name: "Physiotherapy", slug: "physiotherapy", icon: PhysiotherapyIcon },
    { name: "Ambulance", slug: "ambulance", icon: AmbulanceIcon },
  ];
  return (
    <aside className="h-screen w-[290px] shrink-0 bg-[#2f87df]">
      <div className="flex border-b bg-white border-white/20 p-8 justify-center items-center text-xl font-semibold">
        My Doctor Capsule
      </div>

      <nav className="px-3 py-5">
        {sidebarItems.map((item) => {
          const isActive =
            location.pathname === "/sign-in" ? item.slug === "hospitals" : location.pathname === `/sign-in/${item.slug}`;

          return (
            <Button
            key={item.name}
            onClick={() => navigate(`/sign-in/${item.slug}`)}
            className={`group mb-2 flex w-full items-center gap-3 px-4 py-3 text-left text-md ${
              isActive
                ? "bg-white font-medium text-[#111827] rounded-lg"
                : "text-white hover:bg-white hover:font-medium hover:text-[#16477B] hover:rounded-lg border-b border-white/40"
            }`}
          >
            <span
              className={`shrink-0 transition ${
                isActive
                  ? "[&>svg>path]:fill-[#16477B] [&>svg>path]:stroke-[#16477B]"
                  : "group-hover:[&>svg>path]:fill-[#16477B] group-hover:[&>svg>path]:stroke-[#16477B]"
              }`}
            >
              {item.icon}
            </span>
            {item.name}
          </Button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
