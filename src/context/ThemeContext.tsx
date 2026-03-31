import { createContext, ReactNode, useContext, useState } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
    themeMode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [themeMode, setThemeMode] = useState<ThemeMode>("light");

    const toggleTheme = () => {
        setThemeMode((current) => (current === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}
