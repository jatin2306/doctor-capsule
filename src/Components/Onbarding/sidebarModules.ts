/** Order matches `Sidebar.tsx` — used for NEXT/BACK across modules. */
export const SIDEBAR_MODULE_SLUGS = [
  "hospitals",
  "clinics",
  "doctors",
  "nurses",
  "medicine",
  "diagnostics",
  "physiotherapy",
  "ambulance",
] as const;

export type SidebarModuleSlug = (typeof SIDEBAR_MODULE_SLUGS)[number];

export function getSidebarModuleIndex(
  section: string | undefined,
): number {
  const slug = section ?? "hospitals";
  const i = SIDEBAR_MODULE_SLUGS.indexOf(slug as SidebarModuleSlug);
  return i >= 0 ? i : 0;
}
