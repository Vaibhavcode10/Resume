// context/AppContext.jsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Provider({ children }) {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}