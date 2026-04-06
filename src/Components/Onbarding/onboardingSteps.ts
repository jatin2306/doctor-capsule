export const ONBOARDING_STEPS = [
  "Basic Details",
  "Contacts Info",
  "Address",
  "Info structure",
  "Doctors",
  "Services",
  "Document",
] as const;

/** Clinic onboarding uses only three steps (labels match clinic UI copy). */
export const CLINIC_ONBOARDING_STEPS = [
  "Basic Details",
  "Contact Info",
  "Address",
] as const;

/** Doctor onboarding — two steps (Basic Details + Address Details). */
export const DOCTOR_ONBOARDING_STEPS = [
  "Basic Details",
  "Address Details",
] as const;

/** Nurse onboarding — four steps. */
export const NURSE_ONBOARDING_STEPS = [
  "Basic Details",
  "Contacts",
  "Address & KYC",
  "References",
] as const;

/** Medicine / pharmacy onboarding — five steps. */
export const MEDICINE_ONBOARDING_STEPS = [
  "Basic Details",
  "Contacts",
  "Address",
  "Services",
  "Documents",
] as const;

export type OnboardingStepLabel = (typeof ONBOARDING_STEPS)[number];

export function getOnboardingStepsForSection(
  section: string | undefined,
): readonly string[] {
  if (section === "clinics") return CLINIC_ONBOARDING_STEPS;
  if (section === "doctors") return DOCTOR_ONBOARDING_STEPS;
  if (section === "nurses") return NURSE_ONBOARDING_STEPS;
  if (section === "medicine") return MEDICINE_ONBOARDING_STEPS;
  return ONBOARDING_STEPS;
}
