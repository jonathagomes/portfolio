import { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextProviderProps = {
 children: ReactNode;
}

type SidebarContextProps = {
 isVisible: boolean;
 toggleVisibilitySidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextProps)

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
 const [isVisible, setIsVisible] = useState(false);

 function toggleVisibilitySidebar() {
  setIsVisible(!isVisible);
 }
 return (
  <SidebarContext.Provider 
  value={{
   isVisible,
   toggleVisibilitySidebar
  }}
  >
   { children }
  </SidebarContext.Provider>
 )
}

export const useSidebarContext = () => {
 return useContext(SidebarContext);
}