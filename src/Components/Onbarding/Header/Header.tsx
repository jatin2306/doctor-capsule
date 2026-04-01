const Header = () => {
  return (
    <div className="bg-white flex items-start justify-between border-b border-gray-200  py-[12px] px-4" >
      <div>
        <h1 className="text-2xl font-semibold text-[#1f2937]">
          Hospital Onboarding
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xl text-gray-500">Steps 1 to 8</span>
          <div className="h-1.5 w-52 rounded-full bg-gray-300">
            <div className="h-1.5 w-[20%] rounded-full bg-[#2f87df]" />
          </div>
          <span className="text-xl text-gray-600">20%</span>
        </div>
      </div>
      <button type="button" className="rounded-full p-2 text-5xl text-gray-500">
        ⌕
      </button>
    </div>
  );
};

export default Header;
