/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { getData } from "../../apiService";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);
  const loadCreditsData = async () => {
    try {
      const res = await getData("/api/v1/users/getCredits");
      if (res.success) {
        setCredit(res.data.credits);
      } else {
        toast.error("Error occured while fetching credits.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
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
    loadCreditsData,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
