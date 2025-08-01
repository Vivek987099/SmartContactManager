import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("token");
    setIsLoggedIn(true)
    
   
  },[]);

  let login = (token) => {
    localStorage.setItem("token", token);
    
    setIsLoggedIn(true);
  };
  let logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  

  return <AuthContext.Provider value={{isLoggedIn,login,logout}}>{props.children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
