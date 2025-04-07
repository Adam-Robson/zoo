'use client';

import { useState, useEffect, createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export type ThemeProviderType = {
    children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderType) {
    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme') as ThemeType;
        const darkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(localStorageTheme || (darkScheme ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}
