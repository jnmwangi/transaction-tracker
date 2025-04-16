import { createContext, useState } from "react";

const defaultTheme = 'dark';
export const ThemeContext = createContext(defaultTheme);
export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(defaultTheme);
    return <ThemeContext.Provider value={[theme, setTheme]}>
        <div data-bs-theme={theme} className={`bg-${theme} overflow-hidden overflow-y-auto`} style={{ height: "100dvh" }} >
            {children}
        </div>
    </ThemeContext.Provider>
}