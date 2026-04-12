'use client'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from "@/context/ThemeContext"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'
import logrosData from '@/data/logros2026.json'

interface LogroItem {
    title: string
    text: string
    stat?: string
    statLabel?: string
}

interface LogroSection {
    id: string
    title: string
    titleAccent: string
    subtitle?: string
    intro?: string
    callout?: string
    items: LogroItem[]
    stats?: { value: string; label: string }[]
}

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

function SectionNumber({ num, isDark }: { num: string; isDark: boolean }) {
    return (
        <span className={`text-[5rem] md:text-[7rem] lg:text-[10rem] font-black leading-none select-none absolute -top-4 -left-2 md:-left-4 ${isDark ? 'text-white/[0.04]' : 'text-gray-200/60'}`}>
            {num}
        </span>
    )
}

function StatBadge({ stat, label, isDark }: { stat: string; label: string; isDark: boolean }) {
    return (
        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl ${isDark ? 'bg-secundary/20' : 'bg-secundary/10'}`}>
            <span className="text-2xl md:text-3xl font-black text-secundary">{stat}</span>
            <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{label}</span>
        </div>
    )
}

function CollapsibleItem({ item, isDark, isOpen, onToggle }: {
    item: LogroItem
    isDark: boolean
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <div className={`rounded-2xl overflow-hidden transition-colors ${isDark
            ? 'bg-white/5 hover:bg-white/[0.08]'
            : 'bg-white hover:bg-gray-50 shadow-sm'
            }`}>
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
                <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-1 h-8 rounded-full flex-shrink-0 ${isDark ? 'bg-secundary/40' : 'bg-secundary/30'}`} />
                    <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                    </h3>
                </div>
                <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} text-secundary`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                </span>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-6 pb-5 pl-[3.25rem]">
                        <p className={`leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            {item.text}
                        </p>
                        {item.stat && (
                            <div className="mt-4">
                                <StatBadge stat={item.stat} label={item.statLabel || ''} isDark={isDark} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogroSectionComponent({ section, index, openItems, toggleItem }: {
    section: LogroSection
    index: number
    openItems: Set<string>
    toggleItem: (id: string) => void
}) {
    const { isDark } = useTheme()
    const sectionRef = useInView()
    const num = String(index + 1).padStart(2, '0')
    const isAlternate = index % 2 === 1

    return (
        <section
            ref={sectionRef.ref}
            className={`py-16 md:py-24 px-8 lg:px-16 ${isAlternate
                ? (isDark ? 'bg-white/[0.02]' : 'bg-gray-50/50')
                : ''
                }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className={`relative mb-10 md:mb-14 transform transition-all duration-700 ${sectionRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <SectionNumber num={num} isDark={isDark} />

                    <div className="relative z-10 pt-8 md:pt-12">
                        {section.subtitle && (
                            <p className={`text-sm uppercase tracking-[0.3em] mb-3 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                                {section.subtitle}
                            </p>
                        )}
                        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {section.title}
                            <br />
                            <span className="text-secundary">{section.titleAccent}</span>
                        </h2>

                        {section.intro && (
                            <p className={`mt-6 text-lg md:text-xl max-w-3xl leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                {section.intro}
                            </p>
                        )}
                    </div>
                </div>

                {/* Collapsible items */}
                <div className="grid gap-3 max-w-4xl">
                    {section.items.map((item) => {
                        const itemId = `${section.id}-${item.title}`
                        return (
                            <CollapsibleItem
                                key={item.title}
                                item={item}
                                isDark={isDark}
                                isOpen={openItems.has(itemId)}
                                onToggle={() => toggleItem(itemId)}
                            />
                        )
                    })}
                </div>

                {/* Callout */}
                {section.callout && (
                    <div className={`mt-8 p-6 md:p-8 rounded-2xl border-l-4 border-secundary max-w-4xl transform transition-all duration-700 delay-300 ${sectionRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        } ${isDark ? 'bg-secundary/10' : 'bg-secundary/5'}`}>
                        <p className={`text-lg font-semibold leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {section.callout}
                        </p>
                    </div>
                )}

                {/* Stats row */}
                {section.stats && (
                    <div className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 transform transition-all duration-700 delay-300 ${sectionRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {section.stats.map((s, i) => (
                            <div
                                key={i}
                                className={`p-6 rounded-2xl text-center ${isDark ? 'bg-white/5' : 'bg-white shadow-sm'}`}
                            >
                                <p className="text-3xl md:text-4xl font-black text-secundary">{s.value}</p>
                                <p className={`mt-2 text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default function LogrosPage() {
    const { isDark } = useTheme()
    const heroRef = useInView()
    const sections = logrosData as LogroSection[]

    const [activeSection, setActiveSection] = useState('')
    const [isNavSticky, setIsNavSticky] = useState(false)
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())
    const navRef = useRef<HTMLDivElement>(null)
    const navScrollRef = useRef<HTMLDivElement>(null)
    const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

    // Sticky nav + active section tracking
    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const navTop = navRef.current.getBoundingClientRect().top
                setIsNavSticky(navTop <= 57)
            }

            let current = ''
            sections.forEach(section => {
                const el = document.getElementById(section.id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150) {
                        current = section.id
                    }
                }
            })
            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    // Auto-scroll nav to keep active button visible
    useEffect(() => {
        if (activeSection && navScrollRef.current) {
            const activeButton = buttonRefs.current.get(activeSection)
            if (activeButton) {
                const nav = navScrollRef.current
                const buttonLeft = activeButton.offsetLeft
                const buttonWidth = activeButton.offsetWidth
                const navWidth = nav.offsetWidth
                const targetScroll = buttonLeft - (navWidth / 2) + (buttonWidth / 2)
                nav.scrollTo({ left: targetScroll, behavior: 'smooth' })
            }
        }
    }, [activeSection])

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            const offset = 120 // account for navbar + sticky nav
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white'}`}>
            <NavBar />

            {/* Hero */}
            <section
                ref={heroRef.ref}
                className={`pt-24 pb-8 px-8 lg:px-16 overflow-hidden ${isDark ? 'bg-primary' : 'bg-white'}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-700 ${heroRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="text-sm uppercase tracking-[0.3em] text-secundary">
                            Gestión 2024-2026
                        </span>
                        <h1 className={`mt-4 text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Lo que
                            <br />
                            <span className="text-secundary">hicimos</span>
                        </h1>
                        <p className={`mt-6 text-xl max-w-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                            Dos años de gestión con resultados concretos. Desde el comedor hasta el Consejo Directivo, representando a todos los fiubenses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <div
                ref={navRef}
                className={`sticky top-[57px] z-40 transition-all duration-300 ${isDark
                    ? isNavSticky ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
                    : isNavSticky ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
                    } ${isNavSticky ? 'border-b' : ''} ${isDark ? 'border-white/10' : 'border-gray-200'}`}
            >
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <nav ref={navScrollRef} className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                        {sections.map(section => {
                            const isActive = activeSection === section.id
                            return (
                                <button
                                    key={section.id}
                                    ref={(el) => {
                                        if (el) buttonRefs.current.set(section.id, el)
                                    }}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${isActive
                                        ? 'bg-secundary text-white'
                                        : isDark
                                            ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                        }`}
                                >
                                    {section.titleAccent}
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
                <div key={section.id} id={section.id}>
                    <LogroSectionComponent
                        section={section}
                        index={index}
                        openItems={openItems}
                        toggleItem={toggleItem}
                    />
                </div>
            ))}

            <CTASection
                title="Y esto es solo el comienzo"
                subtitle="Conocé nuestras propuestas para seguir transformando FIUBA"
                buttons={[
                    { label: "Ver propuestas", href: "/propuestas", variant: "primary" },
                    { label: "Seguinos en", href: "https://www.instagram.com/mli.fiuba", variant: "instagram" }
                ]}
            />
        </div>
    )
}
