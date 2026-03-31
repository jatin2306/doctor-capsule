import React from "react";

const WellnessStrip: React.FC = () => {
  const labels = Array.from({ length: 50 }, (_, i) => `WELLNESS-${i}`);

  return (
    <div className="relative w-full overflow-hidden">
      {/* top strip */}
      <div
        className="h-[12px] w-1/2 bg-[#1F6FBE]"
        style={{
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      />

      {/* main strip */}
      <div className="h-6 bg-[#2B87DE] overflow-hidden">
        <div className="flex h-full items-center whitespace-nowrap animate-marquee">
          {labels.concat(labels).map((_, index) => (
            <span
              key={index}
              className="mr-5 text-[10px] font-medium tracking-wide text-white/95"
            >
              WELLNESS
            </span>
          ))}
        </div>
      </div>

      {/* bottom strip */}
      <div
        className="ml-auto h-[12px] w-1/2 bg-[#1F6FBE]"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      />
    </div>
  );
};

export default WellnessStrip;