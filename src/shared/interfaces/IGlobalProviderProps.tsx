import { ReactNode } from "react";

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  // ── Search ──────────────────────────────────────────────────────────────────
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}
