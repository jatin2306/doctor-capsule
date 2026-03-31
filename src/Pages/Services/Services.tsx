import Card, { ServiceCardData } from "../../Components/Card/Card";
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from "../../Assets/Index";

const serviceCards: ServiceCardData[] = [
  {
    title: "Hospital",
    description: "Find Trusted Hospitals Near You Instantly",
    icon: "🏥",
    accent: "#45B8D8",
    image: Card1,
    descriptionClass: "pr-28",
  },
  {
    title: "Clinics",
    description: "Discover Nearby Clinics for Quick Consultations You Instantly",
    icon: "🏥",
    accent: "#45B8D8",
    image: Card2,
    descriptionClass: "pr-4",
  },
  {
    title: "Doctor",
    description: "Consult Experienced Doctors Anytime, Anywhere.",
    icon: "🩺",
    accent: "#4F8AE6",
    image: Card3,
    descriptionClass: "pr-4",
  },
  {
    title: "Nurses",
    description: "Book Professional Nursing Support at Your Convenience.",
    icon: "👩‍⚕️",
    accent: "#F58AB8",
    image: Card4,
    descriptionClass: "pr-4",
  },
  {
    title: "Medicine",
    description: "Order medicines from Trusted Nearby Pharmacies.",
    icon: "💊",
    accent: "#FF8FA3",
    image: Card5,
    descriptionClass: "pr-4",
  },
  {
    title: "Diagnostics",
    description: "Book Lab Tests and Health Checkups with Ease.",
    icon: "🧪",
    accent: "#A78BFA",
    image: Card6,
    descriptionClass: "pr-4",
  },
  {
    title: "Physiotherapy",
    description: "Explore Personalized Physiotherapy and Recovery Plans.",
    icon: "🧘",
    accent: "#7BD88A",
    image: Card7,
    descriptionClass: "pr-4",
  },
];

const Services = () => {
  return (
    <section className="bg-white pb-14 pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center rounded-md bg-[#E8F3FF] px-3 py-1">
              <span className="text-sm font-semibold text-[#2b87de]">
                Services
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-medium text-[#111827]">
              All Medical Services in One Place
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/50">
              Access a complete range of healthcare services in one convenient
              platform, from finding nearby hospitals and clinics to booking
              doctor consultations, diagnostics, and medicines. Everything is
              designed to make your healthcare journey simple, reliable, and
              hassle-free.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/50">
              Manage your entire healthcare experience effortlessly with a
              single platform that connects you to trusted doctors, hospitals,
              diagnostic centers, and pharmacies. Search, book, and get the care
              you need anytime, anywhere with ease.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/50">
              Expert consultations to diagnostics and pharmacy services,
              everything is integrated.
            </p>
          </div>

          <Card item={serviceCards[0]} descriptionClass={serviceCards[0].descriptionClass} />
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.slice(1).map((item) => (
            <Card key={item.title} item={item} descriptionClass={item.descriptionClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
