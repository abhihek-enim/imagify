/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getData, postData } from "../../apiService";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);
  const loadCreditsData = async () => {
    try {
      const res = await getData("/api/v1/users/credits");
      if (res.success) {
        setCredit(res.data.credits);
        setUser(res.data.user);
      } else {
        toast.error("Error occured while fetching credits.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const generateImage = async (prompt) => {
    try {
      let res = await postData("/api/v1/image/generateImage", {
        userId: user._id,
        prompt: prompt,
      });
      if (res.success) {
        setCredit(res.data.credits);
        return res.data.resultImage;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const logout = async () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
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
    logout,
    generateImage,
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
