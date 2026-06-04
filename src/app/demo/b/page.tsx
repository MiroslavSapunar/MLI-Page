'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function DemoB() {
    const { isDark, toggleTheme } = useTheme()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => { setLoaded(true) }, [])

    const d = isDark

    return (
        <div className={`min-h-screen font-roboto transition-colors duration-300 overflow-x-hidden ${d ? 'bg-primary' : 'bg-white'}`}>

            {/* ── Header ── */}
            <header className={`fixed top-0 w-full z-50 h-12 flex items-center justify-between px-6 ${d ? 'bg-primary/90' : 'bg-white/90'} backdrop-blur-sm`}>
                <div className="flex items-center gap-5">
                    <Link href="/" className={`text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        ← Inicio
                    </Link>
                    <span className={`text-[10px] tracking-[0.4em] uppercase ${d ? 'text-white/15' : 'text-gray-200'}`}>Demo B — Oblique</span>
                </div>
                <div className="flex items-center gap-5">
                    <a href="/demo/a" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>← A</a>
                    <a href="/demo/c" className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${d ? 'text-white/30 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>C →</a>
                    <button onClick={toggleTheme} className={`text-[11px] tracking-[0.25em] uppercase ${d ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-colors`}>
                        {d ? '☀' : '☾'}
                    </button>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="relative pt-12 min-h-screen flex items-center overflow-hidden">

                {/* Diagonal red fill — right side */}
                <div
                    className="absolute inset-0 bg-secundary"
                    style={{ clipPath: 'polygon(52% 0, 100% 0, 100% 100%, 38% 100%)' }}
                />

                {/* Diagonal dark overlay — left side */}
                <div
                    className={`absolute inset-0 ${d ? 'bg-primary' : 'bg-white'}`}
                    style={{ clipPath: 'polygon(0 0, 54% 0, 40% 100%, 0 100%)' }}
                />

                {/* Thin diagonal accent line */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: d
                            ? 'linear-gradient(to bottom right, transparent 45%, rgba(255,255,255,0.08) 45.5%, transparent 46%)'
                            : 'linear-gradient(to bottom right, transparent 45%, rgba(0,0,0,0.06) 45.5%, transparent 46%)',
                    }}
                />

                {/* Content */}
                <div className="relative z-10 w-full px-8 lg:px-16 py-20">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left — headline */}
                        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex gap-1">
                                    {[0, 1, 2].map(i => (
                                        <div
                                            key={i}
                                            className="w-1 bg-secundary"
                                            style={{
                                                height: `${16 + i * 10}px`,
                                                transform: 'skewX(-12deg)',
                                                transitionDelay: `${i * 60}ms`,
                                                opacity: loaded ? 1 : 0,
                                                transition: 'opacity 0.4s'
                                            }}
                                        />
                                    ))}
                                </div>
                                <span className={`text-xs font-bold tracking-[0.5em] uppercase ${d ? 'text-white/60' : 'text-gray-500'}`}>
                                    Lista 417 · Desde 2005
                                </span>
                            </div>

                            <h1
                                className={`font-black uppercase leading-[0.82] tracking-[-0.02em] ${d ? 'text-white' : 'text-gray-900'}`}
                                style={{ fontSize: 'clamp(2.8rem, 7vw, 7.5rem)' }}
                            >
                                MOVI-<br />
                                MIENTO<br />
                                <span
                                    className="text-white inline-block"
                                    style={{
                                        textShadow: d ? 'none' : '0 2px 12px rgba(249,66,58,0.3)',
                                        WebkitTextStroke: d ? '0' : '0'
                                    }}
                                >
                                    LINEAL-
                                </span>
                                <br />
                                <span className="text-white inline-block">MENTE</span>
                                <br />
                                <span className="text-white inline-block">INDEP.</span>
                            </h1>

                            <p className={`mt-10 text-base leading-relaxed max-w-sm ${d ? 'text-white/55' : 'text-gray-500'}`}>
                                Agrupación estudiantil independiente de FIUBA. 20 años transformando la facultad con resultados concretos.
                            </p>

                            {/* Skewed buttons */}
                            <div className="mt-9 flex flex-wrap gap-4">
                                <Link
                                    href="/propuestas"
                                    className="relative inline-flex items-center bg-secundary text-white text-sm font-bold uppercase tracking-[0.14em] overflow-hidden group"
                                    style={{ transform: 'skewX(-10deg)', padding: '14px 28px' }}
                                >
                                    <span className="flex items-center gap-3" style={{ transform: 'skewX(10deg)' }}>
                                        Propuestas
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300" />
                                </Link>

                                <Link
                                    href="/logros"
                                    className={`relative inline-flex items-center text-sm font-bold uppercase tracking-[0.14em] border-2 overflow-hidden group transition-colors ${d ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                                    style={{ transform: 'skewX(-10deg)', padding: '12px 26px' }}
                                >
                                    <span style={{ transform: 'skewX(10deg)' }}>Nuestro Trabajo</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right — stats on red bg */}
                        <div
                            className="flex flex-col gap-0"
                            style={{
                                transitionDelay: '300ms',
                                opacity: loaded ? 1 : 0,
                                transform: loaded ? 'none' : 'translateX(24px)',
                                transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s'
                            }}
                        >
                            {[
                                { v: '20+', l: 'Años transformando FIUBA', sub: '2005 → hoy' },
                                { v: '35%', l: 'De los votos en 2024',    sub: '1ra fuerza en Consejo' },
                                { v: '50+', l: 'Integrantes activos',      sub: 'Estudiantes, graduados, docentes' },
                            ].map(({ v, l, sub }, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-6 py-7 border-b border-white/20"
                                    style={{
                                        opacity: loaded ? 1 : 0,
                                        transform: loaded ? 'none' : 'translateX(16px)',
                                        transition: `opacity 0.5s ${0.35 + i * 0.1}s, transform 0.5s ${0.35 + i * 0.1}s`
                                    }}
                                >
                                    <span
                                        className="font-black text-white leading-none flex-shrink-0"
                                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                                    >
                                        {v}
                                    </span>
                                    <div>
                                        <p className="text-white font-semibold text-sm leading-tight">{l}</p>
                                        <p className="text-white/60 text-xs mt-0.5 tracking-wider uppercase">{sub}</p>
                                    </div>
                                    <div className="ml-auto flex-shrink-0">
                                        <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom diagonal cut indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: loaded ? 0.5 : 0, transition: 'opacity 1s 0.8s' }}>
                    <div className="w-px h-8 bg-secundary" />
                    <div className="w-1.5 h-1.5 bg-secundary" style={{ transform: 'rotate(45deg)' }} />
                </div>
            </section>

            {/* ── Diagonal transition ── */}
            <div className="relative h-24 -mt-12 z-10 overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 ${d ? 'bg-primary' : 'bg-gray-50'}`}
                    style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}
                />
            </div>

            {/* ── Values section ── */}
            <section className={`${d ? 'bg-primary' : 'bg-gray-50'} pt-4 pb-24 px-8 lg:px-16`}>
                <div className="max-w-7xl mx-auto">
                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-12">
                        <div
                            className="w-12 h-8 bg-secundary flex items-center justify-center text-white text-xs font-black"
                            style={{ transform: 'skewX(-10deg)' }}
                        >
                            <span style={{ transform: 'skewX(10deg)' }}>02</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.4em] text-secundary">Nuestros pilares</p>
                            <h2 className={`text-3xl md:text-4xl font-black uppercase mt-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>
                                ¿Qué nos define?
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Independencia',        icon: '⚡', desc: 'Sin partidos, sin intereses externos. Solo el compromiso con los estudiantes.' },
                            { title: 'Estudiantes como vos', icon: '⬡', desc: 'Somos fiubenses. Conocemos los baches de la facu y nos organizamos para cambiarlos.' },
                            { title: 'Resultados',           icon: '→',  desc: '20 años de hechos: planes 2020, más cursos, mejoras edilicias.' },
                        ].map((v, i) => (
                            <div
                                key={i}
                                className={`relative p-8 group cursor-default overflow-hidden ${d ? 'bg-white/5' : 'bg-white'}`}
                                style={{
                                    opacity: loaded ? 1 : 0,
                                    transform: loaded ? 'none' : 'translateY(12px)',
                                    transition: `opacity 0.5s ${0.1 + i * 0.12}s, transform 0.5s ${0.1 + i * 0.12}s`
                                }}
                            >
                                {/* Diagonal accent on hover */}
                                <div
                                    className="absolute inset-0 bg-secundary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
                                />
                                {/* Left accent bar */}
                                <div className="absolute top-0 left-0 w-[3px] h-0 bg-secundary group-hover:h-full transition-all duration-300" />

                                <span className="text-3xl mb-5 block">{v.icon}</span>
                                <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>
                                    {v.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${d ? 'text-white/50' : 'text-gray-500'}`}>
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 flex items-center justify-between">
                        <Link
                            href="/quienes-somos"
                            className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors ${d ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            Quiénes somos
                        </Link>
                        <div className="flex gap-2 items-center">
                            {[1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className={i === 1 ? 'w-6 h-1 bg-secundary' : `w-1 h-1 ${d ? 'bg-white/20' : 'bg-gray-300'}`}
                                    style={{ transform: 'skewX(-20deg)' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
