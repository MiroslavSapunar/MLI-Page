'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

/* Reusable corner-bracket wrapper */
function Bracketed({
    children,
    className = '',
    color = '#f9423a',
    size = 14,
}: {
    children: React.ReactNode
    className?: string
    color?: string
    size?: number
}) {
    const s = `${size}px`
    const brd = `2px solid ${color}`
    return (
        <div className={`relative ${className}`}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: s, height: s, borderTop: brd, borderLeft: brd }} />
            <span style={{ position: 'absolute', top: 0, right: 0, width: s, height: s, borderTop: brd, borderRight: brd }} />
            <span style={{ position: 'absolute', bottom: 0, left: 0, width: s, height: s, borderBottom: brd, borderLeft: brd }} />
            <span style={{ position: 'absolute', bottom: 0, right: 0, width: s, height: s, borderBottom: brd, borderRight: brd }} />
            {children}
        </div>
    )
}

export default function DemoC() {
    const { isDark, toggleTheme } = useTheme()
    const [loaded, setLoaded] = useState(false)
    const [tick, setTick] = useState(0)
    useEffect(() => { setLoaded(true) }, [])
    useEffect(() => {
        const id = setInterval(() => setTick(t => t + 1), 1000)
        return () => clearInterval(id)
    }, [])

    const d = isDark
    const mono = { fontFamily: 'var(--font-roboto), monospace', fontVariantNumeric: 'tabular-nums' }

    return (
        <div className={`min-h-screen font-roboto transition-colors duration-300 ${d ? 'bg-primary' : 'bg-white'}`}>

            {/* ── Header ── */}
            <header className={`fixed top-0 w-full z-50 h-11 flex items-center justify-between px-6 border-b ${d ? 'bg-primary/95 border-white/10' : 'bg-white/95 border-gray-200'} backdrop-blur-sm`}>
                <div className="flex items-center gap-0">
                    <span className={`text-[11px] font-mono tracking-wider ${d ? 'text-white/25' : 'text-gray-300'}`}>{'// '}</span>
                    <Link href="/" className={`text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        inicio
                    </Link>
                    <span className={`mx-4 text-[11px] ${d ? 'text-white/15' : 'text-gray-200'}`}>·</span>
                    <span className={`text-[10px] tracking-[0.35em] uppercase ${d ? 'text-white/20' : 'text-gray-300'}`}>Demo C — Precision</span>
                </div>
                <div className="flex items-center gap-5">
                    <a href="/demo/a" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>← A</a>
                    <a href="/demo/b" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>← B</a>
                    <button onClick={toggleTheme} className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        {d ? '☀' : '☾'}
                    </button>
                    {/* Live tick */}
                    <span className={`text-[10px] tabular-nums ${d ? 'text-white/20' : 'text-gray-300'}`} style={mono}>
                        {String(tick % 60).padStart(2, '0')}s
                    </span>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="pt-11 min-h-screen flex flex-col justify-center px-8 lg:px-16 py-20">
                <div className="max-w-7xl mx-auto w-full">

                    {/* Coordinate label */}
                    <div className={`flex items-center gap-6 mb-10 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                        <span className={`text-[11px] tracking-[0.4em] uppercase`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.25)' : '#bbb' }}>
                            MLI.FIUBA
                        </span>
                        <div className={`w-px h-4 ${d ? 'bg-white/20' : 'bg-gray-300'}`} />
                        <span className={`text-[11px] tracking-[0.4em] uppercase`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.25)' : '#bbb' }}>
                            2005–presente
                        </span>
                        <div className={`w-px h-4 ${d ? 'bg-white/20' : 'bg-gray-300'}`} />
                        <span className="text-[11px] tracking-[0.4em] uppercase" style={{ ...mono, color: '#f9423a' }}>
                            Lista 417
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Headline — spans 7 cols */}
                        <div className="lg:col-span-7">
                            <Bracketed className="p-6 lg:p-10">
                                <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    <h1
                                        className={`font-black uppercase leading-[0.85] tracking-[-0.02em] ${d ? 'text-white' : 'text-gray-900'}`}
                                        style={{ fontSize: 'clamp(2.6rem, 6vw, 6.5rem)' }}
                                    >
                                        MOVIMIENTO<br />
                                        LINEALMENTE<br />
                                        <span className="text-secundary">INDEPENDIENTE</span>
                                    </h1>

                                    {/* Thin rule */}
                                    <div className={`mt-8 mb-6 flex items-center gap-4`}>
                                        <div className="flex-1 h-px bg-secundary" />
                                        <span className={`text-[10px] tracking-[0.4em] uppercase`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.25)' : '#ccc' }}>
                                            Agrupación estudiantil independiente de FIUBA
                                        </span>
                                        <div className="flex-1 h-px" style={{ background: d ? 'rgba(255,255,255,0.08)' : '#e5e7eb' }} />
                                    </div>

                                    <p className={`text-base leading-relaxed max-w-md ${d ? 'text-white/55' : 'text-gray-500'}`}>
                                        20 años transformando la facultad con resultados concretos. Sin partidos. Sin intereses externos.
                                    </p>

                                    {/* Buttons */}
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <Link
                                            href="/propuestas"
                                            className="group relative inline-flex items-center gap-3 px-7 py-3 bg-secundary text-white text-sm font-bold tracking-[0.12em] uppercase overflow-hidden"
                                        >
                                            {/* Animated fill */}
                                            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="relative flex items-center gap-3">
                                                <span style={{ ...mono }}>[01]</span>
                                                Propuestas
                                                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link
                                            href="/logros"
                                            className={`group inline-flex items-center gap-3 px-7 py-3 border text-sm font-bold tracking-[0.12em] uppercase transition-colors ${d ? 'border-white/30 text-white/70 hover:border-white hover:text-white' : 'border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900'}`}
                                        >
                                            <span style={mono} className="text-secundary">[02]</span>
                                            Logros
                                        </Link>
                                        <a
                                            href="#guias"
                                            className={`group inline-flex items-center gap-3 px-7 py-3 border text-sm font-medium tracking-[0.12em] uppercase transition-colors ${d ? 'border-white/15 text-white/40 hover:border-white/40 hover:text-white/70' : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600'}`}
                                        >
                                            <span style={mono} className={d ? 'text-white/20' : 'text-gray-300'}>[03]</span>
                                            Guías
                                        </a>
                                    </div>
                                </div>
                            </Bracketed>
                        </div>

                        {/* Spec sheet — spans 5 cols */}
                        <div
                            className="lg:col-span-5"
                            style={{
                                opacity: loaded ? 1 : 0,
                                transform: loaded ? 'none' : 'translateX(12px)',
                                transition: 'opacity 0.7s 0.25s, transform 0.7s 0.25s'
                            }}
                        >
                            {/* Spec header */}
                            <div className={`px-5 py-3 border-b ${d ? 'bg-white/5 border-white/15' : 'bg-gray-50 border-gray-200'}`}>
                                <span className={`text-[10px] uppercase tracking-[0.5em] font-semibold`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.3)' : '#999' }}>
                                    Especificaciones / 2024
                                </span>
                            </div>

                            {/* Spec rows */}
                            {[
                                { key: 'Fundación',       val: '2005',           accent: false },
                                { key: 'Votos obtenidos', val: '35.03 %',        accent: true  },
                                { key: 'Posición',        val: '1ra fuerza',     accent: true  },
                                { key: 'Integrantes',     val: '50+',            accent: false },
                                { key: 'Naturaleza',      val: 'Independiente',  accent: false },
                                { key: 'Lista',           val: '417',            accent: false },
                            ].map(({ key, val, accent }, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-between px-5 py-3.5 border-b ${d ? 'border-white/10 hover:bg-white/[0.03]' : 'border-gray-100 hover:bg-gray-50'} transition-colors`}
                                    style={{
                                        opacity: loaded ? 1 : 0,
                                        transition: `opacity 0.4s ${0.3 + i * 0.05}s`
                                    }}
                                >
                                    <span className={`text-xs uppercase tracking-[0.2em] ${d ? 'text-white/35' : 'text-gray-400'}`}>{key}</span>
                                    <span
                                        className={`text-sm font-bold tabular-nums ${accent ? 'text-secundary' : (d ? 'text-white' : 'text-gray-900')}`}
                                        style={mono}
                                    >
                                        {val}
                                    </span>
                                </div>
                            ))}

                            {/* Status row */}
                            <div className={`flex items-center justify-between px-5 py-3.5 ${d ? 'bg-secundary/10' : 'bg-secundary/5'}`}>
                                <span className={`text-xs uppercase tracking-[0.2em] ${d ? 'text-white/35' : 'text-gray-400'}`}>Estado</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secundary animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secundary" style={mono}>Activo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom coordinate strip */}
                    <div className={`mt-12 flex items-center gap-6 ${d ? 'text-white/15' : 'text-gray-300'}`} style={mono}>
                        <div className={`flex-1 h-px ${d ? 'bg-white/10' : 'bg-gray-100'}`} />
                        <span className="text-[10px] tracking-[0.3em] uppercase">34.6037° S</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase">58.3816° W</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase">Buenos Aires</span>
                        <div className={`flex-1 h-px ${d ? 'bg-white/10' : 'bg-gray-100'}`} />
                    </div>
                </div>
            </section>

            {/* ── Values section ── */}
            <section className={`border-t ${d ? 'border-white/10' : 'border-gray-200'} px-8 lg:px-16 py-20`}>
                <div className="max-w-7xl mx-auto">

                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-secundary font-black text-sm" style={mono}>[02]</span>
                        <div className={`h-px flex-1 ${d ? 'bg-white/10' : 'bg-gray-200'}`} />
                        <span className={`text-xs uppercase tracking-[0.5em] ${d ? 'text-white/25' : 'text-gray-400'}`} style={mono}>Pilares</span>
                        <div className={`h-px flex-1 ${d ? 'bg-white/10' : 'bg-gray-200'}`} />
                    </div>

                    <h2 className={`text-3xl md:text-4xl font-black uppercase mb-12 ${d ? 'text-white' : 'text-gray-900'}`}>
                        ¿Qué nos define?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { num: '01', title: 'Independencia',        desc: 'Sin partidos políticos, sin intereses económicos ni funcionarios. Solo los estudiantes.' },
                            { num: '02', title: 'Estudiantes como vos', desc: 'Somos fiubenses que conocemos los baches de la facu y nos organizamos para cambiarlos.' },
                            { num: '03', title: 'Resultados concretos', desc: '20 años de hechos: planes 2020, más cursos, mejoras edilicias. Comprobables.' },
                        ].map((v, i) => (
                            <Bracketed
                                key={i}
                                className={`p-8 cursor-default group transition-colors duration-300 ${d ? 'hover:bg-white/[0.03]' : 'hover:bg-gray-50'}`}
                                color={d ? 'rgba(255,255,255,0.15)' : '#e5e7eb'}
                                size={10}
                            >
                                {/* Red bracket overrides on hover */}
                                <span className={`text-xs font-bold uppercase tracking-[0.4em] text-secundary`} style={mono}>
                                    {v.num}
                                </span>
                                <div className={`my-4 h-px ${d ? 'bg-white/10' : 'bg-gray-200'}`} />
                                <h3 className={`text-lg font-black uppercase tracking-tight mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                                    {v.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${d ? 'text-white/45' : 'text-gray-500'}`}>
                                    {v.desc}
                                </p>
                                {/* Bottom annotation */}
                                <div className={`mt-6 pt-4 border-t flex items-center justify-between ${d ? 'border-white/10' : 'border-gray-100'}`}>
                                    <span className={`text-[10px] tracking-[0.35em] uppercase`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.2)' : '#bbb' }}>
                                        Valor {v.num}
                                    </span>
                                    <svg className={`w-3.5 h-3.5 ${d ? 'text-white/15' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Bracketed>
                        ))}
                    </div>

                    {/* Footer annotation */}
                    <div className={`mt-12 flex items-center justify-between`}>
                        <Link
                            href="/quienes-somos"
                            className={`inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase transition-colors ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            <span style={mono} className="text-secundary">[→]</span>
                            Quiénes somos
                        </Link>
                        <span className={`text-[10px] uppercase tracking-[0.4em]`} style={{ ...mono, color: d ? 'rgba(255,255,255,0.15)' : '#ccc' }}>
                            FIUBA / UBA / Buenos Aires
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
