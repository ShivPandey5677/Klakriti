import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login=async (inputs)=>{
  const res=await axios.post("http://localhost:8000/api/auth/login",inputs,{
    withCredentials:true,
  });

  setCurrentUser(res.data)
  console.log(res.data)
  localStorage.setItem("user", JSON.stringify(res.data));
  };
  const logout = () => {
    // Optional: call a backend logout API if you have one
    localStorage.removeItem("user");
    setCurrentUser(null);
  };
 useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(currentUser));
 },[currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};