export const ONBOARDING_STEPS = [
  "Basic Details",
  "Contacts Info",
  "Address",
  "Info structure",
  "Doctors",
  "Services",
  "Document",
] as const;

export type OnboardingStepLabel = (typeof ONBOARDING_STEPS)[number];
