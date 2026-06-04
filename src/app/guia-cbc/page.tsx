'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import guiaCbcData from '../../data/guia-cbc.json'
import { useTheme } from "@/context/ThemeContext"
import NavBar from '../components/navbar'

// Normalize text: remove accents and lowercase
const normalizeText = (text: string) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

type GuiaItem = {
    title: string
    content: string
    links?: { text: string; url: string }[]
    tags: string[]
}

type GuiaSection = {
    id: string
    title: string
    icon: string
    description: string
    items: GuiaItem[]
}

// Collapsible FAQ Item
function GuiaItemCard({ item, isOpen, onToggle, isDark }: {
    item: GuiaItem
    isOpen: boolean
    onToggle: () => void
    isDark: boolean
}) {
    return (
        <div className={`overflow-hidden transition-all duration-300 ${isDark
            ? 'bg-white/5 hover:bg-white/10 border border-white/10'
            : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
            }`}>
            <button
                onClick={onToggle}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
            >
                <h3 className={`font-medium text-lg pr-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                </h3>
                <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} text-secundary`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                </span>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className={`px-5 pb-5 space-y-4 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                        {item.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed whitespace-pre-line">
                                {paragraph}
                            </p>
                        ))}

                        {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-secundary text-white text-sm font-medium hover:bg-secundary/80 transition-colors"
                                    >
                                        {link.text}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Section Component
function GuiaSectionComponent({ section, isDark, searchQuery, openItems, toggleItem }: {
    section: GuiaSection
    isDark: boolean
    searchQuery: string
    openItems: Set<string>
    toggleItem: (id: string) => void
}) {
    const filteredItems = useMemo(() => {
        if (!searchQuery) return section.items
        const query = normalizeText(searchQuery)
        return section.items.filter(item =>
            normalizeText(item.title).includes(query) ||
            normalizeText(item.content).includes(query) ||
            item.tags.some(tag => normalizeText(tag).includes(query))
        )
    }, [section.items, searchQuery])

    if (filteredItems.length === 0) return null

    return (
        <section id={section.id} className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <div>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {section.title}
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                        {section.description}
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                {filteredItems.map((item, idx) => {
                    const itemId = `${section.id}-${idx}`
                    return (
                        <GuiaItemCard
                            key={idx}
                            item={item}
                            isOpen={openItems.has(itemId)}
                            onToggle={() => toggleItem(itemId)}
                            isDark={isDark}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default function GuiaCbcPage() {
    const { isDark } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')
    const [activeSection, setActiveSection] = useState('')
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())
    const [isNavSticky, setIsNavSticky] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const navScrollRef = useRef<HTMLDivElement>(null)
    const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

    const sections: GuiaSection[] = guiaCbcData.sections

    // Handle sticky nav and active section
    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const navTop = navRef.current.getBoundingClientRect().top
                setIsNavSticky(navTop <= 0)
            }

            let currentSection = ''
            sections.forEach(section => {
                const element = document.getElementById(section.id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        currentSection = section.id
                    }
                }
            })
            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    // Auto-scroll navigation to keep active section visible
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

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            return next
        })
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const visibleSections = useMemo(() => {
        if (!searchQuery) return sections
        const query = normalizeText(searchQuery)
        return sections.filter(section =>
            section.items.some(item =>
                normalizeText(item.title).includes(query) ||
                normalizeText(item.content).includes(query) ||
                item.tags.some(tag => normalizeText(tag).includes(query))
            )
        )
    }, [sections, searchQuery])

    const resultCount = useMemo(() => {
        if (!searchQuery) return 0
        const query = normalizeText(searchQuery)
        return sections.reduce((count, section) => {
            return count + section.items.filter(item =>
                normalizeText(item.title).includes(query) ||
                normalizeText(item.content).includes(query) ||
                item.tags.some(tag => normalizeText(tag).includes(query))
            ).length
        }, 0)
    }, [sections, searchQuery])

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-gray-50'}`}>
            <NavBar />

            {/* Hero */}
            <div className={`pt-20 pb-6 ${isDark ? 'bg-primary' : 'bg-white'}`}>
                <div className="max-w-4xl mx-auto px-4 pt-8">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Guía del Estudiante
                        <span className="text-secundary"> del CBC</span>
                    </h1>
                    <p className={`text-lg mb-4 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                        Todo lo que necesitás saber para tu primer año en el Ciclo Básico Común de Ingeniería
                    </p>
                    <Link
                        href="/guia"
                        className="inline-flex items-center gap-2 text-secundary hover:underline font-medium mb-6"
                    >
                        Acá está la Guía del Fiubense
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar... (ej: inscripción, parcial, beca)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full px-5 py-4 pl-12 text-lg transition-all duration-200 ${isDark
                                ? 'bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-secundary focus:bg-white/15'
                                : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-secundary focus:bg-white'
                                } outline-none`}
                        />
                        <svg
                            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/50' : 'text-gray-400'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-body transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {searchQuery && (
                        <p className={`mt-3 text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            {resultCount === 0
                                ? 'No se encontraron resultados'
                                : `${resultCount} resultado${resultCount !== 1 ? 's' : ''} encontrado${resultCount !== 1 ? 's' : ''}`
                            }
                        </p>
                    )}
                </div>
            </div>

            {/* Sticky Navigation */}
            <div
                ref={navRef}
                className={`sticky top-[55px] z-40 transition-all duration-300 ${isDark
                    ? isNavSticky ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
                    : isNavSticky ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
                    } ${isNavSticky ? 'border-b' : ''} ${isDark ? 'border-white/10' : 'border-gray-200'}`}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <nav ref={navScrollRef} className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                        {sections.map(section => {
                            const isActive = activeSection === section.id
                            const hasResults = !searchQuery || visibleSections.some(s => s.id === section.id)

                            return (
                                <button
                                    key={section.id}
                                    ref={(el) => {
                                        if (el) buttonRefs.current.set(section.id, el)
                                    }}
                                    onClick={() => scrollToSection(section.id)}
                                    disabled={!hasResults}
                                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-200 ${isActive
                                        ? 'bg-secundary text-white'
                                        : hasResults
                                            ? isDark
                                                ? 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                            : isDark
                                                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                                                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    <span>{section.icon}</span>
                                    <span className="hidden sm:inline">{section.title}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
                {visibleSections.map(section => (
                    <GuiaSectionComponent
                        key={section.id}
                        section={section}
                        isDark={isDark}
                        searchQuery={searchQuery}
                        openItems={openItems}
                        toggleItem={toggleItem}
                    />
                ))}

                {visibleSections.length === 0 && searchQuery && (
                    <div className="text-center py-16">
                        <p className={`text-xl ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            No se encontraron resultados para &quot;{searchQuery}&quot;
                        </p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 px-6 py-2 bg-secundary text-white text-sm font-bold uppercase tracking-[0.1em] hover:bg-secundary/80 transition-colors"
                        >
                            Limpiar búsqueda
                        </button>
                    </div>
                )}
            </main>

            {/* Footer CTA */}
            <footer className={`py-12 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        ¿Tenés alguna duda?
                    </h3>
                    <p className={`mb-6 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                        Acercate al CEI o contactanos por Instagram
                    </p>
                    <a
                        href="https://www.instagram.com/mli.fiuba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secundary text-white text-sm font-bold uppercase tracking-[0.12em] hover:bg-secundary/80 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @mli.fiuba
                    </a>

                    <p className={`mt-8 text-sm ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                        Guía del Estudiante del CBC — MLI 2026
                    </p>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-6 right-6 p-3 shadow-lg transition-all duration-300 ${isNavSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    } bg-secundary text-white hover:bg-secundary/80`}
                aria-label="Scroll to top"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    )
}
