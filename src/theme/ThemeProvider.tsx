import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme";

interface ThemeContextProps {
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: darkTheme, toggleTheme: () => { } });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    // This is for Tailwind's dark mode strategy (`class`)
    root.classList.remove(theme.name === "dark" ? "light" : "dark");
    root.classList.add(theme.name);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
