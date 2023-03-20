import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [isSidebarOpen, seIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, seIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    seIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    seIsSidebarOpen(false);
  };

  const openSubmenu = () => {
    seIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    seIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        isSidebarOpen,
        isSubmenuOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}