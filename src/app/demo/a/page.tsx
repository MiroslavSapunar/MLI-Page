'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function DemoA() {
    const { isDark, toggleTheme } = useTheme()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => { setLoaded(true) }, [])

    const d = isDark

    return (
        <div className={`min-h-screen font-roboto transition-colors duration-300 ${d ? 'bg-primary' : 'bg-white'}`}>

            {/* ── Fixed header ── */}
            <header
                className={`fixed top-0 w-full z-50 h-11 flex items-center justify-between px-6 ${d ? 'bg-primary/95' : 'bg-white/95'} backdrop-blur-sm`}
                style={{ borderBottom: '2px solid #f9423a' }}
            >
                <div className="flex items-center gap-6">
                    <Link href="/" className={`text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        ← Inicio
                    </Link>
                    <span className={`text-[10px] tracking-[0.4em] uppercase ${d ? 'text-white/15' : 'text-gray-200'}`}>
                        Demo A — Swiss Grid
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="/demo/b" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>B →</a>
                    <a href="/demo/c" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>C →</a>
                    <button onClick={toggleTheme} className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        {d ? '☀' : '☾'}
                    </button>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="pt-11 min-h-screen flex flex-col">

                {/* Three-column grid */}
                <div
                    className="flex-1"
                    style={{ display: 'grid', gridTemplateColumns: '3rem 1fr 38%', minHeight: 'calc(100vh - 2.75rem - 3rem)' }}
                >
                    {/* Sidebar – vertical labels */}
                    <div className={`border-r ${d ? 'border-white/10' : 'border-gray-200'} flex flex-col justify-between items-center py-14`}>
                        <span
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.35em' }}
                            className={`text-[10px] uppercase font-medium ${d ? 'text-white/25' : 'text-gray-300'}`}
                        >
                            Desde 2005
                        </span>
                        <span
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.35em' }}
                            className={`text-[10px] uppercase font-medium ${d ? 'text-white/25' : 'text-gray-300'}`}
                        >
                            FIUBA · UBA
                        </span>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col justify-center px-10 lg:px-14 py-16">
                        <div className={`transition-all duration-700 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-8 h-[2px] bg-secundary" />
                                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-secundary">
                                    Lista 417
                                </span>
                            </div>

                            <h1
                                className={`font-black uppercase leading-[0.84] tracking-[-0.02em] ${d ? 'text-white' : 'text-gray-900'}`}
                                style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.5rem)' }}
                            >
                                MOVIMIENTO<br />
                                LINEALMENTE<br />
                                <span className="text-secundary">INDEPENDIENTE</span>
                            </h1>

                            <div className={`mt-9 pt-7 ${d ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                                <p className={`text-lg max-w-md leading-relaxed ${d ? 'text-white/55' : 'text-gray-500'}`}>
                                    Agrupación estudiantil independiente de FIUBA.<br />
                                    20 años transformando la facultad.
                                </p>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="/propuestas"
                                    className="inline-flex items-center gap-3 px-7 py-3 bg-secundary text-white text-sm font-bold tracking-[0.12em] uppercase transition-opacity hover:opacity-90"
                                >
                                    Propuestas
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/logros"
                                    className={`inline-flex items-center gap-3 px-7 py-3 border-2 text-sm font-bold tracking-[0.12em] uppercase transition-colors ${d ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                                >
                                    Nuestro Trabajo
                                </Link>
                                <a
                                    href="#guias"
                                    className={`inline-flex items-center gap-3 px-7 py-3 border text-sm font-medium tracking-[0.12em] uppercase transition-colors ${d ? 'border-white/20 text-white/50 hover:border-white/50 hover:text-white' : 'border-gray-300 text-gray-400 hover:border-gray-500 hover:text-gray-700'}`}
                                >
                                    Guías
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats panel – 2×2 grid */}
                    <div
                        className={`border-l ${d ? 'border-white/10' : 'border-gray-200'}`}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}
                    >
                        {[
                            { v: '20+',   l: 'Años de historia',    red: false },
                            { v: '35%',   l: 'Votos 2024',          red: false },
                            { v: '50+',   l: 'Miembros activos',    red: false },
                            { v: '1ra',   l: 'Fuerza en Consejo',   red: true  },
                        ].map(({ v, l, red }, i) => (
                            <div
                                key={i}
                                className={`flex flex-col justify-end p-7 transition-all duration-500 ${
                                    red
                                        ? 'bg-secundary'
                                        : d ? 'bg-transparent' : 'bg-transparent'
                                } ${
                                    i === 1 || i === 3 ? (d ? 'border-l border-white/10' : 'border-l border-gray-200') : ''
                                } ${
                                    i === 2 || i === 3 ? (d ? 'border-t border-white/10' : 'border-t border-gray-200') : ''
                                }`}
                                style={{
                                    transitionDelay: `${200 + i * 80}ms`,
                                    opacity: loaded ? 1 : 0,
                                    transform: loaded ? 'none' : 'translateY(8px)',
                                }}
                            >
                                <span className={`text-5xl lg:text-6xl font-black leading-none ${red ? 'text-white' : 'text-secundary'}`}>{v}</span>
                                <span className={`mt-2 text-[11px] font-medium uppercase tracking-[0.28em] ${red ? 'text-white/70' : d ? 'text-white/35' : 'text-gray-400'}`}>{l}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom nav strip */}
                <div className={`h-12 flex items-center justify-between px-6 border-t ${d ? 'border-white/10' : 'border-gray-200'}`}>
                    <div className="flex gap-8">
                        {['Inicio', 'Nosotros', 'Propuestas', 'Logros', 'Guías'].map(item => (
                            <a key={item} href="#" className={`text-[11px] uppercase tracking-[0.28em] transition-colors ${d ? 'text-white/25 hover:text-white' : 'text-gray-300 hover:text-gray-900'}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.3em] ${d ? 'text-white/15' : 'text-gray-200'}`}>Buenos Aires</span>
                </div>
            </section>

            {/* ── Values section ── */}
            <section className={`border-t-4 ${d ? 'border-white' : 'border-gray-900'}`}>
                {/* Section header */}
                <div className={`flex items-end gap-6 px-14 pt-10 pb-8 border-b ${d ? 'border-white/10' : 'border-gray-200'}`}>
                    <span className={`text-[8rem] font-black leading-none select-none ${d ? 'text-white/[0.06]' : 'text-gray-100'}`}>02</span>
                    <div className="pb-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-6 h-[2px] bg-secundary" />
                            <span className="text-[11px] font-bold tracking-[0.45em] uppercase text-secundary">Nuestros pilares</span>
                        </div>
                        <h2 className={`text-4xl md:text-5xl font-black uppercase leading-tight ${d ? 'text-white' : 'text-gray-900'}`}>
                            ¿Qué nos<br />define?
                        </h2>
                    </div>
                </div>

                {/* 3-column grid */}
                <div className={`grid md:grid-cols-3 border-b ${d ? 'border-white/10' : 'border-gray-200'}`}>
                    {[
                        { title: 'Independencia',        desc: 'Sin partidos políticos, sin intereses económicos. Solo el compromiso con los estudiantes de FIUBA.' },
                        { title: 'Estudiantes como vos', desc: 'Somos fiubenses. Conocemos los baches de la facu y nos organizamos para cambiarlos.' },
                        { title: 'Resultados concretos', desc: '20 años de hechos: planes 2020, más cursos, mejoras edilicias. Hechos, no promesas.' },
                    ].map((v, i) => (
                        <div key={i} className={`p-10 group cursor-default ${i < 2 ? (d ? 'border-r border-white/10' : 'border-r border-gray-200') : ''}`}>
                            <div className="w-10 h-[3px] bg-secundary mb-7 transition-all duration-300 group-hover:w-full" />
                            <h3 className={`text-xl font-black uppercase tracking-tight mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                                {v.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${d ? 'text-white/45' : 'text-gray-500'}`}>
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA strip */}
                <div className={`flex items-center justify-between px-14 py-8 ${d ? 'border-b border-white/10' : 'border-b border-gray-200'}`}>
                    <p className={`text-sm uppercase tracking-[0.3em] ${d ? 'text-white/40' : 'text-gray-400'}`}>
                        Conocé la historia completa
                    </p>
                    <Link
                        href="/quienes-somos"
                        className={`inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase transition-colors ${d ? 'text-white hover:text-secundary' : 'text-gray-900 hover:text-secundary'}`}
                    >
                        Quiénes somos
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}
