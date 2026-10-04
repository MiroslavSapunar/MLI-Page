'use client'
import { useState, useEffect, useRef } from 'react'
import { frame } from './base'

type Tab = { id: string; label: string; icon?: string }

const HEADER = 54   // fixed navbar height
const OFFSET = 110  // navbar + this bar, so a section lands just below both

// Sticky bar of section links: tracks the section in view and keeps its tab scrolled into sight
export default function SectionTabs({ tabs, isDisabled }: { tabs: Tab[]; isDisabled?: (id: string) => boolean }) {
    const [active, setActive] = useState('')
    const navRef = useRef<HTMLElement>(null)
    const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

    useEffect(() => {
        const onScroll = () => {
            let current = ''
            for (const { id } of tabs) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= OFFSET + 40) current = id
            }
            setActive(current)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [tabs])

    useEffect(() => {
        const nav = navRef.current
        const button = active ? buttonRefs.current.get(active) : undefined
        if (nav && button) {
            nav.scrollTo({ left: button.offsetLeft - nav.offsetWidth / 2 + button.offsetWidth / 2, behavior: 'smooth' })
        }
    }, [active])

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - OFFSET, behavior: 'smooth' })
    }

    return (
        <div className="sticky z-40 bg-page/95 backdrop-blur-md border-b border-ui" style={{ top: HEADER }}>
            <div className={frame}>
                <nav ref={navRef} className="flex overflow-x-auto scrollbar-hide divide-x divide-ui lg:border-r border-ui w-fit max-w-full">
                    {tabs.map(({ id, label, icon }) => {
                        const disabled = isDisabled?.(id) ?? false
                        return (
                            <button
                                key={id}
                                ref={el => { if (el) buttonRefs.current.set(id, el) }}
                                onClick={() => scrollTo(id)}
                                disabled={disabled}
                                aria-label={label}
                                className={`flex items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                                    active === id
                                        ? 'bg-secundary text-white'
                                        : disabled
                                            ? 'text-faint opacity-50 cursor-not-allowed'
                                            : 'text-subtle hover:text-body hover:bg-surface'
                                }`}
                            >
                                {icon && <span className="text-sm" aria-hidden>{icon}</span>}
                                <span className={icon ? 'hidden sm:inline' : ''}>{label}</span>
                            </button>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
