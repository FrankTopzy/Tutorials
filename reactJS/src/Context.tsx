import { useContext, createContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  mode: Theme;
  setMode: React.Dispatch<React.SetStateAction<Theme>>;
}

type ThemeContextPropsType = {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextValue | null >(null);


export function ThemeContextProvider({children} : ThemeContextPropsType ) {
  const [mode, setMode] = useState<Theme>('dark')

  const value ={
    mode,
    setMode
  }
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeContextProvider");
  }

  return context;
}