import React from "react";

const SocialIcon = ({ label }: { label: string }) => (
  <button
    type="button"
    aria-label={label}
    className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-[11px] font-medium text-white/90"
  >
    {label}
  </button>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F3F3] ">
      <div className=" overflow-hidden bg-[#2F87DF] text-white">
        <div className="bg-[#2B7FD3] py-2 text-center text-sm text-white/95">
          Connecting you to better healthcare, anytime, anywhere
        </div>

        <div className="grid gap-6 px-8 py-8 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr]">
          <div className="border-white/20 md:border-r md:pr-6">
            <h3 className="mt-2 text-3xl font-semibold">My Doctor Capsule</h3>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Discover</h4>
            <p className="mt-3 text-sm text-white/70">Doctor Appointment</p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Pharmacy</h4>
            <p className="mt-3 text-sm text-white/70">Order Track</p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Diagnostics</h4>
            <p className="mt-3 text-sm text-white/70">Book Test Track</p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Legal</h4>
            <p className="mt-3 text-sm text-white/70">Policies Disclaimer</p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Support</h4>
            <p className="mt-3 text-sm text-white/70">Mail Chat</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between border-t border-white/20 px-8 py-3">
          <p className="text-xs text-white/70">© 2026 mydoctorcapsule.com all rights reserved.</p>
          <div className="flex items-center gap-2">
            <SocialIcon label="g" />
            <SocialIcon label="f" />
            <SocialIcon label="in" />
            <SocialIcon label="t" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

