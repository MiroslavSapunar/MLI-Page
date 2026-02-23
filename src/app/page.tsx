'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from "@/context/ThemeContext"
import portada from '../../public/Portada.png'

/**
 * Landing Page: Editorial/Magazine Style
 * - Asymmetric layouts
 * - Bold typography with mixed weights
 * - Split sections (text + visual)
 * - Scroll-reveal animations
 * - Strong visual hierarchy
 */

function useInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

export default function Home() {
    const { isDark, toggleTheme } = useTheme()
    const [isLoaded, setIsLoaded] = useState(false)

    const heroSection = useInView()
    const aboutSection = useInView()
    const valuesSection = useInView()
    const ctaSection = useInView()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white'}`}>
            {/* Sticky Side Navigation - Desktop */}
            <nav className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4`}>
                {['Inicio', 'Nosotros', 'Valores', 'Elecciones'].map((item, i) => (
                    <a
                        href={`#${item}`}
                        key={i}
                        title={item}
                    >
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${isDark ? 'bg-white/30 hover:bg-white' : 'bg-gray-300 hover:bg-gray-900'
                                }`}
                        />
                    </a>
                ))}
            </nav>

            {/* Bottom Navigation - Mobile */}
            <nav className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden flex gap-2 px-4 py-3 rounded-full backdrop-blur-xl ${
                isDark ? 'bg-white/10' : 'bg-gray-900/10'
            }`}>
                {['Inicio', 'Nosotros', 'Valores', 'Elecciones'].map((item, i) => (
                    <a
                        href={`#${item}`}
                        key={i}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                            isDark ? 'text-white/70 hover:bg-white/20 hover:text-white' : 'text-gray-700 hover:bg-gray-900/20 hover:text-gray-900'
                        }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Header Controls - Fixed */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
                <a
                    href="https://www.instagram.com/mli.fiuba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    <Image
                        className={isDark ? 'invert' : ''}
                        src="/instagram.svg"
                        height={20}
                        width={20}
                        alt="Instagram"
                    />
                </a>
                <button
                    onClick={toggleTheme}
                    className={`p-3 rounded-full transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    {isDark ? (
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Hero Section - Split Layout */}
            <section id="Inicio" ref={heroSection.ref} className="min-h-screen grid lg:grid-cols-2">
                {/* Left - Text */}
                <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
                    <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <span className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-secundary' : 'text-secundary'}`}>
                            Desde 2005
                        </span>
                        <h1 className={`mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            MOVIMIENTO
                            <br />
                            LINEALMENTE
                            <br />
                            <span className="text-secundary">INDEPENDIENTE</span>
                        </h1>
                    </div>

                    <div className={`mt-12 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <Link
                            href="/guia"
                            className="inline-flex items-center gap-4 group"
                        >
                            <span className="w-16 h-16 rounded-full bg-secundary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <span className="flex flex-col">
                                <span className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Guía del estudiante
                                </span>
                                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                                    Nueva edición digital
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right - Image */}
                <div className={`relative hidden lg:block transform transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={portada}
                        alt="FIUBA"
                        fill
                        className="object-cover"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-l from-transparent to-primary' : 'bg-gradient-to-l from-transparent to-white'}`} />
                </div>
            </section>

            {/* About Section - Offset Layout */}
            <section id="Nosotros" ref={aboutSection.ref} className={`min-h-screen pt-20 pb-32 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        {/* Number */}
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className={`text-[6rem] md:text-[8rem] lg:text-[12rem] font-black leading-none ${isDark ? 'text-white/10' : 'text-gray-300'}`}>
                                01
                            </span>
                        </div>

                        {/* Content */}
                        <div className={`lg:col-span-5 lg:pt-8 transform transition-all duration-700 delay-200 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                La voz de los
                                <span className="text-secundary"> estudiantes</span>
                            </h2>
                            <p className={`text-xl leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                Somos una agrupación estudiantil independiente y horizontal, nacida en los pasillos de FIUBA.
                            </p>
                            <p className={`text-xl leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                Nunca hemos esperamos que las cosas las cambie otro.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className={`lg:col-span-5 lg:pt-8 transform transition-all duration-700 delay-400 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="grid grid-cols-2 gap-8">
                                <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}>
                                    <div className="text-4xl font-bold text-secundary">20+</div>
                                    <div className={`mt-2 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Años de historia</div>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}>
                                    <div className="text-4xl font-bold text-secundary">35%</div>
                                    <div className={`mt-2 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Votos 2024 — 1ra fuerza en Consejo</div>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}>
                                    <div className="text-4xl font-bold text-secundary">50+</div>
                                    <div className={`mt-2 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Somos estudiantes, graduados y docentes</div>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}>
                                    <div className="text-4xl font-bold text-secundary">Lista 417</div>
                                    <div className={`mt-2 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Tu voz en Consejo Directivo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - Cards */}
            <section id="Valores" ref={valuesSection.ref} className="min-h-screen pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16`}>
                        {/* Number */}
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className={`text-[6rem] md:text-[8rem] lg:text-[12rem] font-black leading-none ${isDark ? 'text-white/10' : 'text-gray-300'}`}>
                                02
                            </span>
                        </div>
                        {/* Content */}
                        <div className={`lg:col-span-10 lg:pt-8 transform transition-all duration-700 delay-200 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-secundary' : 'text-secundary'}`}>
                                Nuestros pilares
                            </span>
                            <h2 className={`mt-4 text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                ¿Qué nos define?
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Independencia',
                                description: 'No respondemos a partidos políticos, intereses económicos ni funcionarios. Nuestro compromiso es lograr una mejor FIUBA cada día.',
                                icon: '⚡'
                            },
                            {
                                title: 'Estudiantes como vos',
                                description: 'Somos fiubenses, conocemos los (a veces infinitos) baches de la facu, por eso nos organizamos para lograr los cambios que necesitamos.',
                                icon: '⬡'
                            },
                            {
                                title: 'Resultados concretos',
                                description: '20 años transformando la facultad: más cursos en materias colapsadas, mejoras edilicias y los planes de estudio 2020. Y seguimos sumando',
                                icon: '✓'
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className={`p-10 rounded-3xl border transition-all duration-500 hover:scale-105 transform ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    } ${isDark
                                        ? 'bg-transparent border-white/10 hover:border-secundary'
                                        : 'bg-white border-gray-200 hover:border-secundary shadow-lg'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <span className="text-4xl text-secundary">{value.icon}</span>
                                <h3 className={`mt-6 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {value.title}
                                </h3>
                                <p className={`mt-4 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Link to full history */}
                    <div className={`mt-12 text-center transform transition-all duration-700 delay-500 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Link
                            href="/quienes-somos"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                                isDark
                                    ? 'bg-white/10 text-white hover:bg-white/20'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Que veinte años no es nada... 
                            {/* <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Elections 2026 Section */}
            <section id="Elecciones" ref={ctaSection.ref} className="min-h-screen lg:min-h-0 pt-20 pb-32 relative overflow-hidden">
                <div className={`absolute inset-0 ${isDark ? 'bg-secundary/20' : 'bg-secundary/10'}`} />
                <div className="max-w-7xl mx-auto px-8 lg:px-16 relative">
                    <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start`}>
                        {/* Number */}
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className={`text-[6rem] md:text-[8rem] lg:text-[12rem] font-black leading-none ${isDark ? 'text-white/10' : 'text-gray-300'}`}>
                                03
                            </span>
                        </div>
                        {/* Content */}
                        <div className={`lg:col-span-10 lg:pt-8 transform transition-all duration-700 delay-200 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className={`text-xl leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                En estas <span className="text-secundary">elecciones</span>
                            </p>
                            <h2 className={`mt-2 text-5xl md:text-7xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Infórmate, participá y votá
                            </h2>

                            <div className="mt-12 flex flex-wrap gap-4">
                                {/* Primary CTA */}
                                <Link
                                    href="/propuestas"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secundary text-white font-semibold rounded-full hover:bg-secundary/90 transition-colors"
                                >
                                    Nuestras Propuestas
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                {/* Secondary CTA */}
                                <Link
                                    href="/logros"
                                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full border-2 transition-colors ${isDark
                                        ? 'border-white text-white hover:bg-white/10'
                                        : 'border-gray-900 text-gray-900 hover:bg-gray-900/10'
                                    }`}
                                >
                                    Nuestros logros
                                </Link>
                                {/* Contact CTA */}
                                <a
                                    href="https://www.instagram.com/mli.fiuba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full transition-colors ${isDark
                                        ? 'bg-white/10 text-white hover:bg-white/20'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                                >
                                    <Image
                                        className={isDark ? 'invert' : ''}
                                        src="/instagram.svg"
                                        height={20}
                                        width={20}
                                        alt="Instagram"
                                    />
                                    Escribinos acá
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
