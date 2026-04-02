import React, { useState } from "react";
import Input from "../../../Utilities/Input/Input";
import Select from "../../../Utilities/Select/Select";
import ValidationCard from "../Form-Cards/ValidationCard/ValidationCard";
import UploadCard from "../Form-Cards/UploadCard/UploadCard";
import LocationPreviewCard from "../Form-Cards/LocationCard/LocationCard";
  
type CommonOnboardingFormProps = {
  section?: string;
  activeStep: number;
};

const BasicDetailsForm = () => {
  return (
    <div className="grid gap-6 p-10 lg:grid-cols-[2fr_1fr] bg-gray-100">
      <div className="space-y-6">
        <div className="space-y-4 rounded-lg bg-white p-6">
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Hospital Name"
            placeholder="K.R. Hospital"
          />
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Legal Name"
            placeholder="K.R. Hospital"
          />
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
            options={["Hospital", "Clinic", "Other"]}
            label="Hospital Type"
            placeholder="Select Type"
          />
        </div>

        <div className="space-y-4 rounded-lg bg-white p-6">
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Registration Number"
            placeholder="Enter Number"
          />
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
            options={["2020", "2021", "2022", "2023", "2024", "2025", "2026"]}
            label="Year Founded"
            placeholder="Select Year"
          />
        </div>
      </div>

      <div className="space-y-4">
        {/* Card 1: times */}
        <div className="space-y-4 rounded-lg bg-white p-8">
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
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
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
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

        <UploadCard label="Upload Hospital Logo" maxSize={5} />

        <ValidationCard
          options={[
            {
              label: "Hospital Name",
              message: "is Required",
            },
            {
              label: "Legal Name",
              message: "Required",
            },
            {
              label: "",
              message: "Invalid Registration Number",
            },
          ]}
        />
      </div>
    </div>
  );
};

const inputBaseClass =
  "focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 rounded-xl border border-transparent";





const ContactsInfoForm = () => {
  return (
    <div className="grid gap-6 p-10 lg:grid-cols-[2fr_1fr] bg-gray-100">
      <div className="space-y-6">
        <div className="space-y-6 rounded-lg  bg-white p-8">
          <Input
            label="Name"
            value={""}
            onChange={() => {}}
            type="text"
            placeholder="Enter Name"
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className={`${inputBaseClass} w-full px-4 py-2.5`}
          />
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
            options={["Admin", "Doctor", "Staff"]}
            label="Role"
            placeholder="Select Role"
          />
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            variant="verify"
            codeValue={""}
            onCodeChange={() => {}}
            onVerify={() => {}}
            onResend={() => {}}
            onChange={() => {}}
            type="email"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Email"
            placeholder="Enter Email"
          />

          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            variant="verify"
            codeValue={""}
            onCodeChange={() => {}}
            onVerify={() => {}}
            onResend={() => {}}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Card 2: Alternate Phone + Website */}
        <div className="space-y-4 rounded-lg bg-white p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">
              Alternate Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className={`${inputBaseClass} w-full px-4 py-2.5`}
              value=""
              onChange={() => {}}
            />
          </div>
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Website"
            placeholder="www.your name.com"
          />
        </div>
      </div>

      {/* Right validation panel */}
      <div className="space-y-4">
        <ValidationCard
          options={[
            {
              label: "",
              message: "Email format",
            },
            {
              label: "Phone number",
              message: "length",
            },
            {
              label: "OTP verification",
              message: "mandatory",
            },
          ]}
        />
      </div>
    </div>
  );
};

const selectClass =
  "rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400";



const CheckField = ({
  children,
  defaultChecked,
}: {
  children: React.ReactNode;
  defaultChecked?: boolean;
}) => (
  <label className="flex cursor-pointer items-center gap-2.5">
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="h-4 w-4 shrink-0 rounded border-gray-300 text-[#2f87df] accent-[#324664]"
    />
    <span className="text-sm font-medium text-[#111827]">{children}</span>
  </label>
);

const InfoStructureForm = () => {
  const [description, setDescription] = useState("");
  const descMax = 500;

  return (
    <div className="space-y-6 bg-gray-100 p-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6">
            <h3 className="mb-4 text-base font-semibold text-[#111827]">
              Facility
            </h3>
            <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              <CheckField defaultChecked>24/7 Emergency</CheckField>
              <CheckField defaultChecked>ICU Available</CheckField>
              <CheckField defaultChecked>Pharmacy</CheckField>
              <CheckField defaultChecked>Parking</CheckField>
              <CheckField defaultChecked>Ambulance</CheckField>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6">
            <h3 className="mb-4 text-base font-semibold text-[#111827]">
              Operation Units
            </h3>
            <Input
              labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
              value={""}
              onChange={() => {}}
              type="text"
              className="focus-visible:outline-none w-full rounded-xl bg-gray-50 px-4 py-2.5 text-sm text-gray-400 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300"
              label="Operation Theatres (Numbers)"
              placeholder="Enter Number"
            />
          </div>

          <div className="rounded-lg bg-white p-6">
            <h3 className="mb-4 text-base font-semibold text-[#111827]">
              Equipment
            </h3>
            <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              <CheckField defaultChecked>MRI</CheckField>
              <CheckField>CT Scan</CheckField>
              <CheckField>Dialysis</CheckField>
              <CheckField>Ventilators</CheckField>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6">
            <h3 className="mb-4 text-base font-semibold text-[#111827]">
              Bed Capacity
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="shrink-0 text-sm font-semibold text-[#111827]">
                  Total Beds:
                </span>
                <input
                  type="text"
                  className={`${inputBaseClass} w-full min-w-0 flex-1 px-4 py-2.5 sm:max-w-[240px]`}
                  placeholder=""
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="shrink-0 text-sm font-semibold text-[#111827]">
                  ICU Beds:
                </span>
                <input
                  type="text"
                  className={`${inputBaseClass} w-full min-w-0 flex-1 px-4 py-2.5 sm:max-w-[240px]`}
                  placeholder=""
                  value=""
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6">
            <h3 className="mb-4 text-base font-semibold text-[#111827]">
              Departments
            </h3>
            <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              <CheckField defaultChecked>Cardiology</CheckField>
              <CheckField>Neurology</CheckField>
              <CheckField>Orthopedics</CheckField>
              <CheckField>Pediatrics</CheckField>
              <CheckField>Oncology</CheckField>
              <CheckField>ENT</CheckField>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <UploadCard label="Upload Floor Plan" maxSize={5} />
            <UploadCard label="Upload Certificate" maxSize={5} />
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h3 className="mb-4 text-base font-semibold text-[#111827]">
          Description
        </h3>
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value.slice(0, descMax))
            }
            maxLength={descMax}
            rows={5}
            placeholder="Brief Description of the medical facility..."
            className={`${inputBaseClass} min-h-[140px] w-full resize-y px-4 py-3 pb-9 placeholder:italic`}
          />
          <span className="pointer-events-none absolute bottom-3 right-4 text-xs text-gray-400">
            {description.length}/{descMax}
          </span>
        </div>
      </div>
    </div>
  );
};

const AddressDetailsForm = () => {
  return (
    <div className="grid gap-6 p-10 lg:grid-cols-[2fr_1fr] bg-gray-100">
      <div className="space-y-6">
        <div className="space-y-4 rounded-lg bg-white p-6">
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className={selectClass}
            options={[
              "Select Country",
              "India",
              "United States",
              "United Kingdom",
              "Singapore",
            ]}
            label="Country"
            placeholder="Select Country"
          />
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className={selectClass}
            options={[
              "Select State",
              "California",
              "Texas",
              "Maharashtra",
              "Karnataka",
            ]}
            label="State"
            placeholder="Select State"
          />
          <Select
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            className={selectClass}
            options={[
              "Select City",
              "Mumbai",
              "Bengaluru",
              "Singapore",
              "New York",
            ]}
            label="City"
            placeholder="Select City"
          />
          <Input
            labelClassName="mb-2 block text-sm font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-sm text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Postal Code"
            placeholder="Enter Code"
          />

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[#111827]">
                Street Address
              </span>
              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xl font-medium text-[#111827] hover:bg-gray-100"
                aria-label="Add street address line"
              >
                +
              </button>
            </div>
            <textarea
              rows={3}
              placeholder="123-ABC Residency, Near street Opera road,"
              className={`${inputBaseClass} min-h-[96px] w-full resize-y px-4 py-2.5`}
              defaultValue=""
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[#111827]">
                Add Branch
              </span>
              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xl font-medium text-[#111827] hover:bg-gray-100"
                aria-label="Add branch"
              >
                +
              </button>
            </div>
            <input
              type="text"
              placeholder="Add Branch Name"
              className={`${inputBaseClass} w-full px-4 py-2.5`}
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <LocationPreviewCard />
        <ValidationCard
          options={[
            { label: "", message: "Email format" },
            { label: "Phone number", message: "length" },
            { label: "OTP verification", message: "mandatory" },
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
  void section;

  if (activeStep === 0) return <BasicDetailsForm />;
  if (activeStep === 1) return <ContactsInfoForm />;
  if (activeStep === 2) return <AddressDetailsForm />;
  if (activeStep === 3) return <InfoStructureForm />;

  return (
    <div className="bg-gray-100 p-10 text-center text-sm text-gray-500">
      Step content for this section is not available yet.
    </div>
  );
};

export default CommonOnboardingForm;
