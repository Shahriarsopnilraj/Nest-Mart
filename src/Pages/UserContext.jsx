import { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const correctEmail = "raj@gmail.com";
  const correctPass = "1234";

  const login = (email, password) => {
    if (email === correctEmail && password === correctPass) {
      setUser({ email });
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or Password" };
    }
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
