'use client'
// Searchable FAQ guide, shared by /guia and /guia-cbc
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import NavBar from './navbar'
import CTASection from './CTASection'
import SectionTabs from './SectionTabs'
import { PageHero, Collapsible, Corners, Arrow, frame, gutter, btnPrimary } from './base'

export type GuideItem = {
    title: string
    content: string
    links?: { text: string; url: string }[]
    tags: string[]
}

export type GuideSection = {
    id: string
    title: string
    icon: string
    description: string
    items: GuideItem[]
}

// Accent-insensitive: "ingenieria" matches "Ingeniería"
const normalizeText = (text: string) =>
    text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const matches = (item: GuideItem, query: string) =>
    normalizeText(item.title).includes(query) ||
    normalizeText(item.content).includes(query) ||
    item.tags.some(tag => normalizeText(tag).includes(query))

export default function Guide({ sections, label, title, lead, altLink, placeholder }: {
    sections: GuideSection[]
    label: string
    title: string[]
    lead: string
    altLink: { href: string; label: string }
    placeholder: string
}) {
    const [searchQuery, setSearchQuery] = useState('')
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 600)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const query = normalizeText(searchQuery)
    const filtered = useMemo(
        () => sections
            .map((section, index) => ({ section, index, items: query ? section.items.filter(item => matches(item, query)) : section.items }))
            .filter(s => s.items.length > 0),
        [sections, query]
    )
    const resultCount = filtered.reduce((n, s) => n + s.items.length, 0)
    const tabs = useMemo(() => sections.map(s => ({ id: s.id, label: s.title, icon: s.icon })), [sections])

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <div className="min-h-screen bg-page">
            <NavBar />

            <PageHero label={label} title={title} lead={lead}>
                <Link href={altLink.href} className={`mt-6 ${btnPrimary}`}>
                    {altLink.label} <Arrow />
                </Link>

                <div className="relative mt-8 max-w-2xl">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="square" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="search"
                        placeholder={placeholder}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        aria-label="Buscar en la guía"
                        className="w-full pl-12 pr-12 py-4 text-lg bg-page text-body placeholder:text-faint border border-body focus:border-secundary outline-none transition-colors"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            aria-label="Limpiar búsqueda"
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-body transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                {searchQuery && (
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-subtle" aria-live="polite">
                        {resultCount === 0 ? 'Sin resultados' : `${resultCount} resultado${resultCount !== 1 ? 's' : ''}`}
                    </p>
                )}
            </PageHero>

            <SectionTabs tabs={tabs} isDisabled={id => !filtered.some(s => s.section.id === id)} />

            <main>
                {filtered.map(({ section, index, items }) => (
                    <section key={section.id} id={section.id} className="scroll-mt-[110px] border-b border-ui">
                        <div className={frame}>
                            <Corners />
                            <div className={`${gutter} pt-10 pb-6 bg-surface border-b border-ui flex items-end gap-4`}>
                                <span className="text-5xl lg:text-6xl leading-[0.8] text-num select-none font-mono" aria-hidden>
                                    e<sub className="text-[0.6em]">{index + 1}</sub>
                                </span>
                                <div className="min-w-0">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tight text-secundary">{section.title}</h2>
                                    <p className="mt-1 text-sm text-subtle">{section.description}</p>
                                </div>
                            </div>
                            <div className="divide-y divide-ui">
                                {items.map(item => {
                                    const itemId = `${section.id}-${item.title}`
                                    return (
                                        <Collapsible
                                            key={item.title}
                                            title={item.title}
                                            index={`${index + 1}.${section.items.indexOf(item) + 1}`}
                                            isOpen={openItems.has(itemId)}
                                            onToggle={() => toggleItem(itemId)}
                                        >
                                            <div className="max-w-3xl space-y-4 text-muted">
                                                {item.content.split('\n\n').map((paragraph, i) => (
                                                    <p key={i} className="leading-relaxed whitespace-pre-line">{paragraph}</p>
                                                ))}
                                                {item.links && item.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {item.links.map(link => (
                                                            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                                                                {link.text}
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                                                    <path strokeLinecap="square" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </Collapsible>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                ))}

                {filtered.length === 0 && (
                    <div className={`${frame} ${gutter} py-20`}>
                        <p className="text-xl text-subtle">No se encontraron resultados para &quot;{searchQuery}&quot;</p>
                        <button onClick={() => setSearchQuery('')} className={`mt-6 ${btnPrimary}`}>
                            Limpiar búsqueda
                        </button>
                    </div>
                )}
            </main>

            <CTASection
                title="¿Tenés alguna duda?"
                subtitle="Acercate al CEI o contactanos por Instagram"
                buttons={[{ label: '@mli.fiuba', href: 'https://www.instagram.com/mli.fiuba', variant: 'instagram' }]}
            />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Volver arriba"
                className={`fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center bg-secundary text-white hover:opacity-90 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <Arrow className="w-4 h-4 -rotate-90" />
            </button>
        </div>
    )
}
