'use client'
import { createContext, useContext, useSyncExternalStore, ReactNode } from 'react'
import { THEME_STORAGE_KEY } from './themeScript'

type ThemeContextType = {
    isDark: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// The source of truth is data-theme on <html>; React only mirrors it
const listeners = new Set<() => void>()
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb) } }
const getSnapshot = () => document.documentElement.dataset.theme === 'dark'
const getServerSnapshot = () => false

export function ThemeProvider({ children }: { children: ReactNode }) {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

    const toggleTheme = () => {
        const next = isDark ? 'light' : 'dark'
        document.documentElement.dataset.theme = next
        try { localStorage.setItem(THEME_STORAGE_KEY, next) } catch {}
        listeners.forEach(cb => cb())
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
