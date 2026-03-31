const MetricPage = () => {
  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Trusted Healthcare in Numbers
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-2 text-black/45">
            Connecting patients with experienced doctors and trusted clinics,
            our platform makes it easy to access quality healthcare services
            without any hassle.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-2 text-black/45">
            With a strong network of medical professionals and facilities, we
            ensure that you receive reliable guidance, timely consultations and
            the care you deserve.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-2 text-black/45">
            Supported by 24/7 assistance.
          </p>

          <div className="mt-7 ml-40 w-28">
            <svg
              viewBox="0 0 180 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C6 12 5 53 39 49C72 45 72 9 103 14C136 20 131 57 171 57"
                stroke="#9CA3AF"
                strokeWidth="2.4"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
              <path d="M169 52L178 57L169 62" fill="#9CA3AF" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-7 h-40 w-40 rounded-full bg-[#DCE7F6]/70" />
          <div className="relative grid grid-cols-2 border border-transparent">
            {/* 1 → RIGHT */}
            <div className="border-b border-r border-dashed border-gray-300 p-11 text-right">
              <p className="text-3xl font-bold text-[#111827]">10K+</p>
              <p className="mt-2 text-md text-[#111827]/85">
                Happy Patients Served
              </p>
            </div>

            {/* 2 → LEFT */}
            <div className="border-b border-dashed border-gray-300 p-10 text-left">
              <p className="text-3xl font-bold text-[#111827]">250+</p>
              <p className="mt-2 text-md text-[#111827]/85">
                Trusted Medical Partners
              </p>
            </div>

            {/* 3 → RIGHT */}
            <div className="border-r border-dashed border-gray-300 p-10 text-right">
              <p className="text-3xl font-bold text-[#111827]">24/7</p>
              <p className="mt-2 text-md text-[#111827]/85">
                Continuous Medical Support
              </p>
            </div>

            {/* 4 → LEFT */}
            <div className="p-10 text-left">
              <p className="text-3xl font-bold text-[#111827]">200+</p>
              <p className="mt-2 text-md text-[#111827]/85">
                Hospitals &amp; Clinics Connected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricPage;
