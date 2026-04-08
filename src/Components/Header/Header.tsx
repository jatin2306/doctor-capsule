import React from "react";
import Button from "../../Utilities/Button/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full border-white/50 pt-4">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between gap-8 px-4 pb-4">
        <div className="text-3xl font-medium text-[#DEF0FF]">
          My Doctor Capsule
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/sign-up")}
            type="button"
            className="rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-[#2b87de]"
          >
            Sign up
          </Button>

          <Button
            onClick={() => navigate("/sign-in")}
            type="button"
            className="rounded-md border-2 border-white/50 px-4 py-2 text-sm font-semibold text-white"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
