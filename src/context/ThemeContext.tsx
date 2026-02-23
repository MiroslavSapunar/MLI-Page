'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
    isDark: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(true) // Default to dark
    const [mounted, setMounted] = useState(false)

    // Load theme from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('mli-theme')
        if (saved) {
            setIsDark(saved === 'dark')
        }
        setMounted(true)
    }, [])

    // Save theme to localStorage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('mli-theme', isDark ? 'dark' : 'light')
        }
    }, [isDark, mounted])

    const toggleTheme = () => setIsDark(prev => !prev)

    // Prevent flash of wrong theme
    if (!mounted) {
        return <div className="bg-primary min-h-screen" />
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
