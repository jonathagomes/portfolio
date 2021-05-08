import { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextProviderProps = {
 children: ReactNode;
}

type SidebarContextProps = {
 isOpenMobileMenu: boolean;
 toggleMobileMenu: () => void;
}

export const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
 const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
 function toggleMobileMenu() {
  setIsOpenMobileMenu(!isOpenMobileMenu)
 }
 return (
  <SidebarContext.Provider 
   value={{
    isOpenMobileMenu,
    toggleMobileMenu
   }}
  >
   { children }
  </SidebarContext.Provider>
 );
}

export const useSidebarContext = () => {
 return useContext(SidebarContext);
}