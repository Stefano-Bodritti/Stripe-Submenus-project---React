import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [isSidebarOpen, seIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, seIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: '', links:[]});

  const openSidebar = () => {
    seIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    seIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
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
        location,
        page
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}