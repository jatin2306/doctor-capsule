import React from "react";
import Input from "../../../Utilities/Input/Input";
import Select from "../../../Utilities/Select/Select";

type CommonOnboardingFormProps = {
  section?: string;
  activeStep: number;
};

type SelectFieldProps = {
  label: string;
  placeholder: string;
  options: string[];
};

const DisabledTextField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div>
      <Input
        label={label}
        labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
        value={""}
        onChange={() => {}}
        type="text"
        className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
        placeholder={placeholder}
      />
    </div>
  );
};

const DisabledSelectField = ({
  label,
  placeholder,
  options,
}: SelectFieldProps) => {
  return (
    <div>
      <Select
        label={label}
        labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
        placeholder={placeholder}
        className=" focus-visible:outline-none w-full appearance-none rounded-xl bg-gray-50 border border-gray-50 bg-white px-4 py-2.5 text-sm text-gray-400"
        options={options ?? []}
      />
    </div>
  );
};

const UploadLogoCard = () => {
  return (
    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#264F7D] text-white">
          +
        </div>
        <div>
          <p className="text-sm font-medium text-[#111827]">
            Upload Hospital Logo
          </p>
          <p className="mt-1 text-xs text-gray-400">JPG/PNG - Max-5MB</p>
        </div>
      </div>
    </div>
  );
};

const ValidationCard = ({ options }: { options: string[] }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-5 text-xl font-semibold text-[#111827]">
        Validation:
      </div>
      <ul className="space-y-2 px-5 py-5 text-md text-[#EF4444]">
        <li className="flex items-center gap-2">
          <span className="inline-flex p-2.5 h-2 w-2 items-center text-sm justify-center rounded-full bg-[#FF6668]">
            <span className="text-white text-sm">✓</span>
          </span>
          <span className="text-md text-[#FF6668] font-medium ">
            {" "}
            Hospital Name{" "}
          </span>
          <span className="text-md text-[#FF6668  ] font-medium ">
            {" "}
            is Required.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-flex p-2.5 h-2 w-2 items-center text-sm justify-center rounded-full bg-[#FF6668]">
            <span className="text-white text-sm">✓</span>
          </span>
          <span className="text-md text-[#FF6668] font-medium ">
            {" "}
            Legal Name{" "}
          </span>
          <span className="text-md text-[#111827] font-medium ">
            {" "}
            is Required.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-flex p-2.5 h-2 w-2 items-center text-sm justify-center rounded-full bg-[#FF6668]">
            <span className="text-white text-sm">✓</span>
          </span>
          <span className="text-md text-black font-medium ">
            {" "}
            Invalid Registration Number{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

const BasicDetailsForm = () => {
  return (
    <div className="grid gap-6 p-10 lg:grid-cols-[2fr_1fr] bg-gray-100">
      {/* left side: stacked cards */}
      <div className="space-y-6">
        <div className="space-y-4 rounded-lg bg-white p-6">
          <DisabledTextField
            label="Hospital Name"
            placeholder="K.R. Hospital"
          />
          <DisabledTextField label="Legal Name" placeholder="K.R. Hospital" />
          <DisabledSelectField
            label="Hospital Type"
            placeholder="Select Type"
            options={["Hospital", "Clinic", "Other"]}
          />
        </div>

        <div className="space-y-4 rounded-lg bg-white p-6">
          <DisabledTextField
            label="Registration Number"
            placeholder="Enter Number"
          />
          <DisabledSelectField
            label="Year Founded"
            placeholder="Select Year"
            options={["2020", "2021", "2022", "2023", "2024", "2025", "2026"]}
          />
        </div>
      </div>

      <div className="space-y-4">
        {/* Card 1: times */}
        <div className="space-y-4 rounded-lg bg-white p-6">
          <DisabledSelectField
            label="Opening Time"
            placeholder="Select Time"
            options={[
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
              "20:00",
            ]}
          />
          <DisabledSelectField
            label="Closing Time"
            placeholder="Select Time"
            options={[
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
              "20:00",
            ]}
          />
        </div>

        <UploadLogoCard />

        <ValidationCard
          options={[
            "Hospital Name is Required",
            "Legal Name is Required",
            "Invalid Registration Number",
          ]}
        />
      </div>
    </div>
  );
};

const CodeInput = ({ placeholder, disabled }: { placeholder: string, disabled: boolean }) => {
  return (
    <Input
      label=""
      onChange={() => {}}
      disabled={disabled}      
      className="w-full rounded-xl bg-gray-50 px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-300"
      placeholder={placeholder}
      value="" 
      type="text"
      labelClassName="hidden"
      />
  );
};

const ContactsInfoForm = () => {
  return (
    <div className="grid gap-6 p-10 lg:grid-cols-[2fr_1fr] bg-gray-100">
      <div className="space-y-6">
        {/* Card 1: Name / Role / Email / Phone verification */}
        <div className="space-y-4 rounded-lg  bg-white p-6">
          <div className="space-y-4">
            <DisabledTextField label="Name" placeholder="Enter Name" />

            <DisabledSelectField
              label="Role"
              placeholder="Select Role"
              options={["Admin", "Doctor", "Staff"]}
            />

            <DisabledTextField label="Email" placeholder="Enter Email" />

            <div>
              <DisabledTextField
                label="Phone Number"
                placeholder="Enter Phone Number"
              />
              <div className="mt-3 grid grid-cols-[1fr_auto] gap-4">
                <CodeInput placeholder="Enter Code" disabled={false} />
                <button
                  type="button"
                  className="h-10 rounded-md bg-[#4b4b4b] px-6 text-sm font-semibold text-white"
                >
                  Verify
                </button>
              </div>
              <div className="mt-2 text-right text-sm">
                <span className="cursor-default text-[#2f87df] underline">
                  Resend
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Alternate Phone + Website */}
        <div className="space-y-4 rounded-lg bg-white p-6">
          <DisabledTextField
            label="Alternate Phone*"
            placeholder="Enter Phone Number"
          />
          <DisabledTextField label="Website" placeholder="www.your name.com" />
        </div>
      </div>

      {/* Right validation panel */}
      <div className="space-y-4">
        <ValidationCard
          options={[
            "Email is Required",
            "Phone Number is Required",
            "Invalid Code",
          ]}
        />
      </div>
    </div>
  );
};

const CommonOnboardingForm: React.FC<CommonOnboardingFormProps> = ({
  section,
  activeStep,
}) => {
  // For now, we match the SS for the first step; other steps reuse the same layout.
  // `section` is kept so we can customize labels later (Hospitals/Clinics/etc).
  void section;

  if (activeStep === 0) return <BasicDetailsForm />;
  if (activeStep === 1) return <ContactsInfoForm />;

  return (
    <div className="grid gap-6 p-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <DisabledTextField label="Hospital Name" placeholder="—" />
        <DisabledTextField label="Legal Name" placeholder="—" />
        <DisabledSelectField
          label="Hospital Type"
          placeholder="Select Type"
          options={["Hospital", "Clinic", "Other"]}
        />
      </div>
      <div className="space-y-4">
        <DisabledSelectField
          label="Opening Time"
          placeholder="Select Time"
          options={[
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
          ]}
        />
        <DisabledSelectField
          label="Closing Time"
          placeholder="Select Time"
          options={[
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
          ]}
        />
        <UploadLogoCard />
        <ValidationCard
          options={[
            "Hospital Name is Required. Legal Name is Required. Invalid Registration Number.",
          ]}
        />
      </div>
    </div>
  );
};

export default CommonOnboardingForm;
