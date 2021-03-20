import React from "react";

export interface IAppContext {
    openedMenu: boolean;
    toggleMenu: () => void;
    currentRoute: string;
    getCurrentRoute: (route: string) => void;
}
  
const AppContext = React.createContext<IAppContext>(null);

export default AppContext;
  