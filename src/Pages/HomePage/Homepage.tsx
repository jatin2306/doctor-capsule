import React from "react";
import Ambulance from "../../Assets/Ambulance.png";
import Button from "../../Utilities/Button/Button";
import Header from "../../Components/Header/Header";
import Input from "../../Utilities/Input/Input";

const SearchIcon = (props: { className?: string; stroke?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
      stroke={props.stroke ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
    />
    <path
      d="M16.5 16.5L21 21"
      stroke={props.stroke ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
    />
  </svg>
);

const Homepage: React.FC = () => {
  const [query, setQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      <section
        className="relative overflow-hidden bg-[#2b87de] text-white home-bg"
     
      >
        <Header />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6">
          <div className="flex justify-end">
            <img src={Ambulance} alt="Ambulance" className="w-35 h-10" />
          </div>
          <div className="pb-10 pt-5 text-center">
            <div className="inline-flex items-center justify-center bg-white/10 rounded-lg px-4 py-2 border-2 border-white/10 text-sm mb-2">
              + Healthcare made effortless
            </div>
            <h1 className="text-3xl font-medium leading-tight sm:text-5xl md:text-5xl">
              Find Trusted Healthcare
              <br />
              Near You
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm text-white/50 sm:text-small">
              Instant results, verified professionals, and seamless booking
              experience all designed for you.
            </p>

            <div className="mx-auto mt-10 w-full max-w-3xl">
              <div className="flex items-center gap-3 rounded-md bg-white/95 px-4 py-3 shadow-lg">
                <div>
                  <SearchIcon className="h-8 w-6" stroke="#9CA3AF" strokeWidth={3.5} />
                </div>
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-base"
                  placeholder="Search Doctors, Medicines, ..."
                />
                <Button onClick={() => {}} type="button" className=" bg-[#F6F6F6] px-6 py-2 text-sm font-medium text-[#0F3C6C] shadow">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-[-40px] h-40 bg-[radial-gradient(circle_at_10px_10px,rgba(255,255,255,0.28)_2px,transparent_2px)] bg-[length:18px_18px] opacity-40"
          aria-hidden="true"
        />
      </section>

      <section className="bg-white pb-14 pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-3 rounded-md bg-[#e9f4ff] px-4 py-2">
            <span className="text-sm font-semibold text-[#2b87de]">
              Services
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            All Medical Services in One Place
          </h2>

          <div className="mt-10 h-40 w-full rounded-2xl bg-gray-100" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
