import { useLocalStorage } from "@mantine/hooks";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage({ key: "authToken" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const verifyToken = async (currentToken) => {
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/verify`,
      {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      }
    );
    console.log("Respones: ", response.ok);
    if (response.ok) {
      const parsed = await response.json();
      setToken(currentToken);
      setIsLoggedIn(true);
      console.log("Parsed: ", parsed);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      // setIsLoggedIn(true)
      setIsLoading(false);
    } else {
      localStorage.removeItem("authToken");
      // setIsLoading(false)
    }
  }, [token]);

  const logout = () => {
    setToken();
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    console.log("Logged in: ", isLoggedIn);
    navigate("/login");
  };

  return (
    <SessionContext.Provider
      value={{
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
