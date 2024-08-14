import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

// We create the context
export const AuthContext = createContext();

// We create the provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      fetchUser(storedToken);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/user/token`,
        { token }
      );
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Login function is used to login the user
  // As a response from this api call, we get a token, we pass this token to the fetchUser function that will fetch the user information based on the token we get when we logged in
  const login = async (userData) => {
    try {
      const loggedInUser = await axios.post(
        `http://localhost:5001/api/login`,
        userData
      );
      localStorage.setItem("token", loggedInUser.data.token);
      fetchUser(loggedInUser.data.token);
      return loggedInUser;
    } catch (err) {
      return err;
    }
  };

  // CREATE A LOGOUT FUNCTION THAT WILL REMOVE THE TOKEN FROM THE LOCALSTORAGE

  const logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

// We create a custom hook
export const useAuth = () => useContext(AuthContext);
