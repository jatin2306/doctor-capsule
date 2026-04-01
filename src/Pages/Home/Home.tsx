import { Ambulance } from "../../Assets/Index";
import { SearchIcon } from "../../Assets/SVG/Index";
import Button from "../../Utilities/Button/Button";
import Input from "../../Utilities/Input/Input";

import { useState } from "react";
const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query);
  };

  return (
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
              <SearchIcon
                className="h-8 w-6"
                stroke="#9CA3AF"
                strokeWidth={3.5}
              />
            </div>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-base"
              placeholder="Search Doctors, Medicines, ..."
            />
            <Button
              onClick={handleSearch}
              type="button"
              className=" bg-[#F6F6F6] px-6 py-2 text-sm font-medium text-[#0F3C6C] shadow"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
