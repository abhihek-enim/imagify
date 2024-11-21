/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    BACKEND_URL,
    token,
    setToken,
    credit,
    setCredit,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
