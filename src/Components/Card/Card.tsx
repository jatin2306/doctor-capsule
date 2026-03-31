import React from "react";

export type ServiceCardData = {
  title: string;
  description: string;
  icon: string;
  accent: string;
  image: string;
  descriptionClass?: string;
};

type Cards = {
  item: ServiceCardData;
  descriptionClass?: string;
};

const Card: React.FC<Cards> = ({ item, descriptionClass }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(15,60,108,0.06)]">
      <div className="h-44 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative px-6 pb-3 pt-7">
        <div
          className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-2xl shadow-md"
          style={{ backgroundColor: item.accent }}
        >
          <span aria-hidden="true">{item.icon}</span>
        </div>
        <h3 className="text-xl pt-4 font-semibold text-[#0F172A]">
          {item.title}
        </h3>
        <p
          className={`mt-2 min-h-12 text-sm leading-6 text-gray-500 ${descriptionClass}`}
        >
          {item.description}
        </p>
        <div className="mt-4 flex items-center gap-1">
          <div className="flex items-center gap-[2px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-[4px] h-[4px] rounded-[1px]"
                style={{
                  backgroundColor: `rgba(107,114,128, ${0.1 + i * 0.08})`,
                }}
              />
            ))}
          </div>

          <div className="flex items-center text-xl">
            <span className="text-gray-800 ">{">"}</span>{" "}
            <span className="text-gray-300 -ml-1">{">"}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
