import React, { useState } from "react";
import Input from "../../../Utilities/Input/Input";
import Select from "../../../Utilities/Select/Select";
import ValidationCard from "../Form-Cards/ValidationCard/ValidationCard";
import UploadCard from "../Form-Cards/UploadCard/UploadCard";
import LocationPreviewCard from "../Form-Cards/LocationCard/LocationCard";
import Button from "../../../Utilities/Button/Button";

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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Hospital Name"
            placeholder="K.R. Hospital"
          />
          <Input
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Legal Name"
            placeholder="K.R. Hospital"
          />
          <Select
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
            options={["Hospital", "Clinic", "Other"]}
            label="Hospital Type"
            placeholder="Select Type"
          />
        </div>

        <div className="space-y-4 rounded-lg bg-white p-6">
          <Input
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Registration Number"
            placeholder="Enter Number"
          />
          <Select
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            className={`${inputBaseClass} w-full px-4 py-2.5`}
          />
          <Select
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            className="rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400"
            options={["Admin", "Doctor", "Staff"]}
            label="Role"
            placeholder="Select Role"
          />
          <Input
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            variant="verify"
            codeValue={""}
            onCodeChange={() => {}}
            onVerify={() => {}}
            onResend={() => {}}
            onChange={() => {}}
            type="email"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Email"
            placeholder="Enter Email"
          />

          <Input
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            variant="verify"
            codeValue={""}
            onCodeChange={() => {}}
            onVerify={() => {}}
            onResend={() => {}}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Card 2: Alternate Phone + Website */}
        <div className="space-y-4 rounded-lg bg-white p-6">
          <div>
            <label className="mb-2 block text-lg font-semibold text-[#111827]">
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
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

const InfoStructureForm = () => {
  const [description, setDescription] = useState("");
  const descMax = 500;

  return (
    <div className="space-y-6 bg-gray-100 p-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg bg-white">
            <div className="border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#111827] py-4 px-6 ">
                Facility
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2 p-6">
              <Input variant="checkbox" defaultChecked>
                24/7 Emergency
              </Input>
              <Input variant="checkbox" defaultChecked>
                ICU Available
              </Input>
              <Input variant="checkbox" defaultChecked>
                Pharmacy
              </Input>
              <Input variant="checkbox" defaultChecked>
                Parking
              </Input>
              <Input variant="checkbox" defaultChecked>
                Ambulance
              </Input>
            </div>
          </div>

          <div className="rounded-lg bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              {" "}
              <h3 className=" text-lg font-semibold text-[#111827]">
                Operation Units
              </h3>
            </div>
            <div className="flex items-center justify-between py-6 px-6 ">
              <label className="mb-2 block text-base font-semibold text-[#111827]">
                Operation Theatres (Numbers)
              </label>
              <Input
                labelClassName="mb-2 block text-base font-semibold text-[#111827]"
                value={""}
                onChange={() => {}}
                type="text"
                className="focus-visible:outline-none w-[250px] rounded-xl bg-gray-50 px-4 py-2.5 text-sm text-gray-400 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="rounded-lg bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              {" "}
              <h3 className=" text-lg font-semibold text-[#111827]">
                Equipment
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 py-4 px-6">
              <Input variant="checkbox" defaultChecked>
                MRI
              </Input>
              <Input variant="checkbox" defaultChecked>
                CT Scan
              </Input>
              <Input variant="checkbox" defaultChecked>
                Dialysis
              </Input>
              <Input variant="checkbox" defaultChecked>
                Ventilators
              </Input>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            <div className="rounded-xl bg-white border border-gray-200">
              {/* Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="text-lg font-semibold text-[#111827]">
                  Bed Capacity
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-4 px-6 py-5">
                {/* Row 1 */}
                <div className="flex items-center justify-between gap-6">
                  <span className="text-base font-semibold text-[#111827] ml-4">
                    Total Beds:
                  </span>

                  <Input
                    value=""
                    onChange={() => {}}
                    type="text"
                    className="w-[300px] bg-gray-100 text-gray-500 
          px-4 py-2.5 rounded-lg text-sm 
          focus:outline-none"
                  />
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between gap-6">
                  <span className="text-base font-semibold text-[#111827] ml-6">
                    ICU Beds:
                  </span>

                  <Input
                    value=""
                    onChange={() => {}}
                    type="text"
                    className="w-[300px] bg-gray-100 text-gray-500 
          px-4 py-2.5 rounded-lg text-sm 
          focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white ">
            <div className=" border-b border-gray-200 py-4 px-6">
              <h3 className=" text-lg font-semibold text-[#111827]">
                Departments
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 py-4 px-6">
              <Input variant="checkbox" defaultChecked>
                Cardiology
              </Input>
              <Input variant="checkbox" defaultChecked>
                Neurology
              </Input>
              <Input variant="checkbox" defaultChecked>
                Orthopedics
              </Input>
              <Input variant="checkbox" defaultChecked>
                Pediatrics
              </Input>
              <Input variant="checkbox" defaultChecked>
                Oncology
              </Input>
              <Input variant="checkbox" defaultChecked>
                ENT
              </Input>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6">
            {" "}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UploadCard
                label="Upload Floor Plan"
                maxSize={5}
                className="p-2"
                labelClassName="text-sm"
                hintClassName="text-[11px]"
                iconClassName="h-8 w-8 text-sm"
                showHintLine={false}
              />
              <UploadCard
                label="Upload Certificate"
                maxSize={5}
                className="p-2"
                labelClassName="text-sm"
                hintClassName="text-[11px]"
                iconClassName="h-8 w-8 text-sm"
                showHintLine={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-[#111827]">
          Description
        </h3>
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, descMax))}
            maxLength={descMax}
            rows={2}
            placeholder="Brief Description of the medical facility..."
            className={` min-h-[10px] w-full resize-y  placeholder:italic`}
          />
          <span className="pointer-events-none absolute bottom-3 right-4 text-xs text-black font-semibold">
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
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
            labelClassName="mb-2 block text-lg font-semibold text-[#111827]"
            value={""}
            onChange={() => {}}
            type="text"
            className="focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl"
            label="Postal Code"
            placeholder="Enter Code"
          />

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-lg font-semibold text-[#111827]">
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
              <span className="text-lg font-semibold text-[#111827]">
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

const labelLg = "mb-2 block text-lg font-medium text-[#111827]";
const inputDoctor =
  "focus-visible:outline-none bg-gray-50 placeholder:text-gray-300 placeholder:font-medium placeholder:text-base text-gray-400 w-full px-4 py-2.5 rounded-xl";
const selectDoctor =
  "rounded-xl border border-gray-50 px-4 py-2.5 text-sm text-gray-400";

const DoctorsForm = () => {
  return (
    <div className="space-y-6 bg-gray-100 p-10">
      <div className="rounded-lg bg-white ">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-200 py-4 px-6">
          <h2 className="text-xl font-medium text-[#111827]">
            Add Doctor Information
          </h2>

          <Button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#264F7D] text-xl font-medium text-white hover:opacity-90"
            onClick={() => {}}
          >
            +
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4 py-4 px-6">
          <Input
            labelClassName={labelLg}
            value={""}
            onChange={() => {}}
            type="text"
            className={inputDoctor}
            label="Doctor Name"
            placeholder="Enter Name"
          />
          <Select
            labelClassName={labelLg}
            className={selectDoctor}
            options={[
              "Enter Specification",
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Pediatrics",
              "General Medicine",
            ]}
            label="Specification"
            placeholder="Enter Specification"
          />
          <Input
            labelClassName={labelLg}
            value={""}
            onChange={() => {}}
            type="text"
            className={inputDoctor}
            label="Experience"
            placeholder="Enter (Years)"
          />
          <Input
            labelClassName={labelLg}
            value={""}
            onChange={() => {}}
            type="text"
            className={inputDoctor}
            label="Qualification"
            placeholder="Enter Qualification"
          />
          <Input
            labelClassName={labelLg}
            value={""}
            onChange={() => {}}
            type="text"
            className={inputDoctor}
            label="License Number"
            placeholder="12********25"
          />
          <Input
            labelClassName={labelLg}
            value={""}
            onChange={() => {}}
            type="text"
            className={inputDoctor}
            label="Consultation Fees"
            placeholder="₹2,500/-"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="rounded-lg bg-white ">
          <div className=" border-b border-gray-200 py-4 px-6">
            {" "}
            <h3 className=" text-lg font-medium text-[#111827]">
              Availability
            </h3>
          </div>
          <div className="space-y-4 py-4 px-6">
            <Input
              labelClassName={labelLg}
              value={""}
              onChange={() => {}}
              type="text"
              className={inputDoctor}
              label="Days"
              placeholder="Mon-Sun"
            />
            <Select
              labelClassName={labelLg}
              className={selectDoctor}
              options={[
                "10:00 AM - 2:00 PM",
                "9:00 AM - 1:00 PM",
                "2:00 PM - 6:00 PM",
                "Full day",
              ]}
              label="Time Slots"
              placeholder="Select Time"
            />
          </div>
        </div>

        <UploadCard
          label="Upload Doctor Photo* "
          maxSize={5}
          showHintLine={false}
          className="flex min-h-[220px] flex-col justify-center p-6 font-medium"
          innerClassName="flex flex-col items-center justify-center gap-4 text-center"
          iconClassName="h-12 w-12 text-2xl"
          labelClassName="text-center text-sm font-medium"
        />
      </div>
    </div>
  );
};

type ServiceCardProps = {
  title: string;
  options: [string, string];
};

const ServiceCard = ({ title, options }: ServiceCardProps) => (
  <div className="rounded-lg bg-white">
    <div className="border-b border-gray-200 py-4 px-6">
      <h3 className="text-lg font-medium leading-none text-[#111827]">
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-1 gap-5 px-8 py-6 md:grid-cols-2">
      <Input variant="checkbox" defaultChecked>
        {options[0]}
      </Input>
      <Input
        labelClassName={labelLg}
        value={options[1]}
        onChange={() => {}}
        defaultChecked
        variant="checkbox"
      >
        {" "}
        {options[1]}{" "}
      </Input>
    </div>
  </div>
);

const ServicesForm = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ServiceCard
          title="OPD Services"
          options={["General Consolation Fee", "Specification Fee"]}
        />
        <ServiceCard
          title="Emergency Charges"
          options={["Emergency Fee", "Ambulance Charges"]}
        />
        <ServiceCard
          title="Packages"
          options={["Health Checkup Packages", "Surgery Packages"]}
        />
        <ServiceCard
          title="Other Services"
          options={["Home Care", "Teleconsultation"]}
        />
      </div>
    </div>
  );
};

const documentUploadAccept =
  ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png";

const DocumentForm = () => {
  return (
    <div className="grid gap-6 bg-gray-100 p-10 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <UploadCard
          label="Upload Hospital Registration Certificate"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
          className="border-[#2f87df]"
        />
        <UploadCard
          label="Upload License Document"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
        />
        <UploadCard
          label="Upload NABH / Accreditation Certificate"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
        />
        <UploadCard
          label="Upload Insurance Document"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
        />

        <p className="pt-2 font-medium text-gray-500 text-base font-semibold text-[#111827]">
          Optional<span className="">*</span>
        </p>

        <UploadCard
          label="Upload Tax Certificate"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
        />
        <UploadCard
          label="Upload Ownership Proof"
          maxSize={5}
          accept={documentUploadAccept}
          formatsHint="PDF / JPG / PNG"
          showPreviewButton
          previewDisabled
          labelClassName="text-base font-semibold"
          className="border-solid border-2 border-[#2f87df]"
        />
      </div>

      <div className="space-y-4 lg:sticky lg:top-4 lg:self-start">
        <ValidationCard
          options={[
            { label: "", message: "PDF / JPG / PNG" },
            { label: "", message: "Max size limit" },
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
  if (activeStep === 4) return <DoctorsForm />;
  if (activeStep === 5) return <ServicesForm />;
  if (activeStep === 6) return <DocumentForm />;

  return (
    <div className="bg-gray-100 p-10 text-center text-sm text-gray-500">
      Step content for this section is not available yet.
    </div>
  );
};

export default CommonOnboardingForm;
