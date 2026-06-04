'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useInView } from "@/hooks/useInView"
import NavBar from './components/navbar'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    const aboutSection = useInView()
    const valuesSection = useInView()
    const ctaSection = useInView()

    useEffect(() => { setIsLoaded(true) }, [])

    return (
        <div className="min-h-screen transition-colors duration-500 bg-page">
            <NavBar />

            {/* ── Side dots – Desktop ── */}
            <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
                {['Inicio', 'Nosotros', 'Valores', 'Guías'].map((item, i) => (
                    <a href={`#${item}`} key={i} title={item}>
                        <div className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer bg-gray-300 hover:bg-gray-900 dark:bg-white/30 dark:hover:bg-white" />
                    </a>
                ))}
            </nav>

            {/* ── Bottom nav – Mobile ── */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden flex gap-1 px-4 py-2 backdrop-blur-xl bg-gray-900/10 dark:bg-white/10">
                {['Inicio', 'Nosotros', 'Valores', 'Guías'].map((item, i) => (
                    <a
                        href={`#${item}`}
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors text-gray-700 hover:bg-gray-900/20 hover:text-gray-900 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* ══ Hero — Swiss Grid 3-col ══ */}
            <section id="Inicio" className="pt-11 min-h-screen flex flex-col">

                {/* Three-column grid */}
                <div
                    className="flex-1"
                    style={{ display: 'grid', gridTemplateColumns: '3rem 1fr 38%', minHeight: 'calc(100vh - 2.75rem - 3rem)' }}
                >
                    {/* Sidebar – vertical labels */}
                    <div className="border-r border-ui hidden lg:flex flex-col justify-between items-center py-14">
                        <span
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.35em' }}
                            className="text-[10px] uppercase font-medium text-faint"
                        >
                            Desde 2005
                        </span>
                        <span
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.35em' }}
                            className="text-[10px] uppercase font-medium text-faint"
                        >
                            FIUBA · UBA
                        </span>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col justify-center px-8 lg:px-14 py-20 min-w-0 overflow-hidden">
                        <div className={`transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-8 h-[2px] bg-secundary" />
                                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-secundary">Lista 417</span>
                            </div>

                            <h1
                                className="font-black uppercase leading-[0.84] tracking-[-0.02em] text-body"
                                style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.5rem)' }}
                            >
                                MOVIMIENTO<br />
                                LINEALMENTE<br />
                                <span className="text-secundary">INDEPENDIENTE</span>
                            </h1>

                            <div className="mt-9 pt-7 border-t border-ui">
                                <p className="text-lg max-w-md leading-relaxed text-muted">
                                    Agrupación estudiantil independiente de FIUBA.<br />
                                    20 años transformando la facultad.
                                </p>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="/propuestas"
                                    className="inline-flex items-center gap-3 px-7 py-3 bg-secundary text-white text-sm font-bold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
                                >
                                    Propuestas
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/logros"
                                    className="inline-flex items-center gap-3 px-7 py-3 border-2 border-body text-body text-sm font-bold uppercase tracking-[0.12em] hover:bg-body hover:text-page transition-colors"
                                >
                                    Nuestro Trabajo
                                </Link>
                                <a
                                    href="#Guías"
                                    className="inline-flex items-center gap-3 px-7 py-3 border border-ui text-muted text-sm font-medium uppercase tracking-[0.1em] hover:border-body hover:text-body transition-colors"
                                >
                                    Guías
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats panel — 2×2 hard grid */}
                    <div
                        className="border-l overflow-hidden min-w-0 border-ui hidden lg:grid"
                        style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}
                    >
                        {[
                            { v: '20+',    l: 'Años de historia',   red: false },
                            { v: '32.12%',    l: 'Votos 2026',         red: false },
                            { v: '100%',    l: 'FIUBENSES',   red: false },
                            { v: '1ra',    l: '1ra fuerza',         red: true  },
                        ].map(({ v, l, red }, i) => (
                            <div
                                key={i}
                                className={`flex flex-col justify-end p-7 min-w-0 overflow-hidden transition-all duration-500 ${red ? 'bg-secundary' : ''
                                    } ${i === 1 || i === 3 ? 'border-l border-ui' : ''
                                    } ${i === 2 || i === 3 ? 'border-t border-ui' : ''}`}
                                style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'none' : 'translateY(8px)', transitionDelay: `${200 + i * 80}ms` }}
                            >
                                <span className={`text-5xl font-black leading-none ${red ? 'text-white' : 'text-secundary'}`}>{v}</span>
                                <span className={`mt-2 text-[11px] font-medium uppercase tracking-[0.25em] truncate ${red ? 'text-white/70' : 'text-faint'}`}>{l}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom nav strip */}
                <div className="h-12 flex items-center justify-between px-6 border-t border-ui">
                    <div className="flex gap-8">
                        {['Inicio', 'Nosotros', 'Valores', 'Logros', 'Guías'].map(item => (
                            <a key={item} href={`#${item}`} className="text-[11px] uppercase tracking-[0.28em] transition-colors text-faint hover:text-body hidden sm:block">
                                {item}
                            </a>
                        ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-faint hidden sm:block">Buenos Aires</span>
                </div>
            </section>

            {/* ══ About Section ══ */}
            <section id="Nosotros" ref={aboutSection.ref} className="border-t-4 border-body">
                <div className={`flex items-end gap-6 px-8 lg:px-14 pt-10 pb-8 border-b border-ui transition-all duration-700 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <span className="text-[8rem] font-black leading-none select-none text-num">01</span>
                    <div className="pb-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-6 h-[2px] bg-secundary" />
                            <span className="text-[11px] font-bold tracking-[0.45em] uppercase text-secundary">Nosotros</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-body">
                            La voz de los<br /><span className="text-secundary">estudiantes</span>
                        </h2>
                    </div>
                </div>

                <div className={`grid lg:grid-cols-12 border-b border-ui transition-all duration-700 delay-200 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* Left — identity text */}
                    <div className="lg:col-span-5 px-8 lg:px-14 py-10 border-b lg:border-b-0 lg:border-r border-ui flex flex-col justify-between">
                        <div>
                            <p className="text-xl leading-relaxed text-muted">
                                Somos una agrupación estudiantil independiente y horizontal, nacida en los pasillos de FIUBA.
                            </p>
                            <p className="mt-4 text-xl leading-relaxed text-muted">
                                Con la mente siempre en lo que necesitamos los estudiantes de FIUBA, nunca hemos esperado que las cosas las cambie otro.
                            </p>
                        </div>
                        <Link
                            href="/logros"
                            className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-body hover:text-secundary transition-colors self-start"
                        >
                            Ver todo nuestro trabajo
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right — work showcase */}
                    <div className="lg:col-span-7 divide-y divide-ui">
                        {[
                            { title: 'Nuevos planes de estudio 2020',       stat: '8 carreras',  desc: 'Actualizamos todas las carreras de FIUBA, algunas con 35 años de antigüedad.' },
                            { title: 'Comedor del CEI',                     stat: 'Diario',      desc: 'Un servicio de almuerzo económico y de calidad, funcionando cuatrimestre a cuatrimestre.' },
                            { title: 'Materias promocionables',             stat: '56% aprobados', desc: 'Impulsamos la cursada piloto de Álgebra II sin final: aprobación directa por parciales.' },
                            { title: 'Modernización de trámites y plazos',  stat: '72hs → 48hs', desc: 'Redujimos plazos, simplificamos certificados y automatizamos equivalencias.' },
                        ].map(({ title, stat, desc }, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-5 px-8 py-6 group cursor-default hover:bg-secundary/5 dark:hover:bg-secundary/10 transition-colors"
                                style={{ opacity: aboutSection.isInView ? 1 : 0, transform: aboutSection.isInView ? 'none' : 'translateX(8px)', transition: `opacity 0.5s ${0.3 + i * 0.08}s, transform 0.5s ${0.3 + i * 0.08}s` }}
                            >
                                <div className="w-[3px] self-stretch bg-ui group-hover:bg-secundary transition-colors flex-shrink-0 mt-1" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-body">{title}</h3>
                                        <span className="text-xs font-bold text-secundary whitespace-nowrap flex-shrink-0" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat}</span>
                                    </div>
                                    <p className="mt-1 text-sm leading-relaxed text-subtle">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ Values Section ══ */}
            <section id="Valores" ref={valuesSection.ref} className="border-t-4 border-body">
                <div className={`flex items-end gap-6 px-8 lg:px-14 pt-10 pb-8 border-b border-ui transition-all duration-700 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <span className="text-[8rem] font-black leading-none select-none text-num">02</span>
                    <div className="pb-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-6 h-[2px] bg-secundary" />
                            <span className="text-[11px] font-bold tracking-[0.45em] uppercase text-secundary">Nuestros pilares</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-body">
                            ¿Qué nos define?
                        </h2>
                    </div>
                </div>

                <div className={`grid md:grid-cols-3 border-b border-ui transition-all duration-700 delay-200 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {[
                        { title: 'Independencia',        desc: 'No respondemos a partidos políticos, intereses económicos ni funcionarios. Nuestro compromiso es lograr una mejor FIUBA cada día.' },
                        { title: 'Estudiantes como vos', desc: 'Somos fiubenses, conocemos los (a veces infinitos) baches de la facu, por eso nos organizamos para lograr los cambios que necesitamos.' },
                        { title: 'Resultados concretos', desc: '20 años transformando la facultad: más cursos en materias colapsadas, mejoras edilicias y los planes de estudio 2020. Y seguimos sumando.' },
                    ].map((value, index) => (
                        <div
                            key={index}
                            className={`p-10 cursor-default group ${index < 2 ? 'border-r border-ui' : ''}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="w-10 h-[3px] bg-secundary mb-7 transition-all duration-300 group-hover:w-full" />
                            <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-body">
                                {value.title}
                            </h3>
                            <p className="leading-relaxed text-subtle">{value.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={`flex items-center justify-between px-8 lg:px-14 py-8 border-b border-ui transition-all duration-700 delay-500 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-sm uppercase tracking-[0.3em] text-faint">Conocé la historia completa</p>
                    <Link href="/quienes-somos" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase transition-colors text-body hover:text-secundary">
                        Quiénes somos
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ══ Guías Section ══ */}
            <section id="Guías" ref={ctaSection.ref} className="border-t-4 border-body relative overflow-hidden">
                <div className="absolute inset-0 bg-secundary/5 dark:bg-secundary/10 pointer-events-none" />
                <div className="relative">
                    <div className={`flex items-end gap-6 px-8 lg:px-14 pt-10 pb-8 border-b border-ui transition-all duration-700 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="text-[8rem] font-black leading-none select-none text-num">03</span>
                        <div className="pb-2">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-6 h-[2px] bg-secundary" />
                                <span className="text-[11px] font-bold tracking-[0.45em] uppercase text-secundary">Recursos</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-body">
                                Guías del Estudiante
                            </h2>
                        </div>
                    </div>

                    <div className={`grid md:grid-cols-3 border-b border-ui transition-all duration-700 delay-200 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {[
                            { href: '/guia',     label: 'Guía del Estudiante Fiubense', sub: 'Tus derechos y trámites en FIUBA',  primary: true },
                            { href: '/guia-cbc', label: 'Guía del Estudiante del CBC',  sub: 'Tu primer año en la UBA',           primary: false },
                            { href: 'https://www.instagram.com/mli.fiuba', label: 'Escribinos al Instagram', sub: '@mli.fiuba', primary: false, external: true },
                        ].map(({ href, label, sub, primary, external }, i) => (
                            <a
                                key={i}
                                href={href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className={`group flex items-center gap-6 px-10 py-10 transition-colors ${i < 2 ? 'border-b md:border-b-0 md:border-r border-ui' : ''} hover:bg-secundary/5 dark:hover:bg-secundary/10`}
                            >
                                <span className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors ${primary ? 'bg-secundary text-white' : 'border-2 border-ui text-body group-hover:border-secundary group-hover:text-secundary'}`}>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <span className="flex flex-col">
                                    <span className="text-sm font-bold uppercase tracking-[0.1em] text-body">{label}</span>
                                    <span className="text-xs mt-0.5 text-subtle">{sub}</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
