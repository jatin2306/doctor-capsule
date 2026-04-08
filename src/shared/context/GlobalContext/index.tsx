import {
  GlobalContextProps,
  GlobalProviderProps,
} from "@Shared/interfaces/IGlobalProviderProps";
import React, { createContext, useState } from "react";

const defaultValue: GlobalContextProps = {
  toggleSidebar: true,
  setToggleSidebar: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
};

const GlobalContext = createContext<GlobalContextProps>(defaultValue);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const contextValue = {
    toggleSidebar,
    setToggleSidebar,
    searchQuery,
    setSearchQuery,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalContext;
