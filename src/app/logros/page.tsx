'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useInView } from "@/hooks/useInView"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'
import SectionTabs from '../components/SectionTabs'
import { PageHero, SectionHead, Collapsible, Corners, frame, gutter, kicker, reveal } from '../components/base'
import logrosData from '@/data/logros2026.json'

interface LogroItem {
    title: string
    text: string
    stat?: string
    statLabel?: string
}

interface LogroImage {
    src: string
    alt: string
}

interface LogroSection {
    id: string
    title: string
    titleAccent: string
    subtitle?: string
    intro?: string
    callout?: string
    items: LogroItem[]
    images?: LogroImage[]
    stats?: { value: string; label: string }[]
}

function LogroSectionComponent({ section, index, openItems, toggleItem }: {
    section: LogroSection
    index: number
    openItems: Set<string>
    toggleItem: (id: string) => void
}) {
    const { observe, isInView } = useInView(0.1)

    return (
        <section id={section.id} ref={observe} className="scroll-mt-[110px] border-b border-ui">
            <div className={frame}>
                <Corners />
                <SectionHead n={index + 1} label={section.subtitle ?? section.titleAccent} isInView={isInView}>
                    {section.title} {section.titleAccent}
                </SectionHead>

                <div className={`grid lg:grid-cols-12 ${reveal(isInView)} delay-150`}>
                    {(section.intro || section.images?.length) && (
                        <div className={`lg:col-span-5 ${gutter} lg:pr-10 py-10 lg:border-r border-ui space-y-8`}>
                            {section.intro && <p className="text-lg leading-relaxed text-muted">{section.intro}</p>}
                            {section.images && (
                                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                    {section.images.map((img, i, all) => {
                                        const wide = all.length % 2 === 1 && i === 0
                                        return (
                                            <figure key={img.src} className={wide ? 'col-span-2 lg:col-span-1' : ''}>
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={600}
                                                    height={400}
                                                    sizes={wide ? '(min-width: 1024px) 480px, 100vw' : '(min-width: 1024px) 480px, 50vw'}
                                                    className="w-full h-40 sm:h-56 object-cover"
                                                />
                                                <figcaption className={`mt-2 ${kicker} text-faint line-clamp-2`}>Fig. {i + 1} — {img.alt}</figcaption>
                                            </figure>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    <div className={section.intro || section.images?.length ? 'lg:col-span-7' : 'lg:col-span-12'}>
                        <div className="divide-y divide-ui border-t lg:border-t-0 border-ui">
                            {section.items.map((item, i) => {
                                const itemId = `${section.id}-${item.title}`
                                return (
                                    <Collapsible
                                        key={item.title}
                                        title={item.title}
                                        index={String(i + 1).padStart(2, '0')}
                                        isOpen={openItems.has(itemId)}
                                        onToggle={() => toggleItem(itemId)}
                                    >
                                        <p className="leading-relaxed text-subtle">{item.text}</p>
                                        {item.stat && (
                                            <p className="mt-4 font-mono text-sm text-body">
                                                <span className="text-secundary">→ </span>{item.stat}
                                                {item.statLabel && <span className="text-subtle"> · {item.statLabel}</span>}
                                            </p>
                                        )}
                                    </Collapsible>
                                )
                            })}
                        </div>

                        {section.callout && (
                            <p className={`${gutter} py-8 border-t border-ui text-lg font-bold leading-relaxed text-body`}>
                                <span className="text-secundary font-mono">→ </span>{section.callout}
                            </p>
                        )}
                    </div>
                </div>

                {section.stats && (
                    <div className={`${gutter} py-10 border-t border-ui ${reveal(isInView)} delay-300`}>
                        <div className="matrix text-faint">
                            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
                                {section.stats.map(s => (
                                    <div key={s.label} className="min-w-0 flex flex-col">
                                        <dt className="order-2 mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">{s.label}</dt>
                                        <dd className="order-1 font-heading text-3xl sm:text-4xl font-black leading-none text-body tabular-nums">{s.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default function LogrosPage() {
    const sections = logrosData as LogroSection[]
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())

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

            <PageHero
                label="Gestión 2024-2026"
                title={['Lo que', 'hicimos']}
                lead="Dos años de gestión con resultados concretos. Desde el comedor hasta el Consejo Directivo, representando a todos los fiubenses."
            />

            <SectionTabs tabs={sections.map(s => ({ id: s.id, label: s.titleAccent }))} />

            {sections.map((section, index) => (
                <LogroSectionComponent
                    key={section.id}
                    section={section}
                    index={index}
                    openItems={openItems}
                    toggleItem={toggleItem}
                />
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
