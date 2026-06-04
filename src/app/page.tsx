'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from "@/hooks/useInView"
import { SectionNumber } from './components/SectionNumber'
import NavBar from './components/navbar'
import portada from '../../public/Portada.jpg'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    const heroSection = useInView()
    const aboutSection = useInView()
    const valuesSection = useInView()
    const ctaSection = useInView()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="min-h-screen transition-colors duration-500 bg-page">
            <NavBar />

            {/* Sticky Side Navigation - Desktop */}
            <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
                {['Inicio', 'Nosotros', 'Valores', 'Guías'].map((item, i) => (
                    <a href={`#${item}`} key={i} title={item}>
                        <div className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer bg-gray-300 hover:bg-gray-900 dark:bg-white/30 dark:hover:bg-white" />
                    </a>
                ))}
            </nav>

            {/* Bottom Navigation - Mobile */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden flex gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-gray-900/10 dark:bg-white/10">
                {['Inicio', 'Nosotros', 'Valores', 'Guías'].map((item, i) => (
                    <a
                        href={`#${item}`}
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors text-gray-700 hover:bg-gray-900/20 hover:text-gray-900 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Hero Section - Split Layout */}
            <section id="Inicio" ref={heroSection.ref} className="min-h-screen grid lg:grid-cols-3 overflow-visible">
                {/* Left - Text */}
                <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0 overflow-visible z-10">
                    <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <span className="text-sm uppercase tracking-[0.3em] text-secundary">
                            Desde 2005
                        </span>
                        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-body">
                            MOVIMIENTO
                            <br />
                            LINEALMENTE
                            <br />
                            <span className="text-secundary">INDEPENDIENTE</span>
                        </h1>
                    </div>

                    <div className={`mt-12 flex flex-col gap-3 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="flex flex-wrap gap-3 overflow-visible">
                            <Link
                                href="/propuestas"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secundary text-white font-semibold rounded-full hover:bg-secundary/90 transition-colors"
                            >
                                Propuestas
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/logros"
                                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-full border-2 transition-colors border-gray-900 text-gray-900 hover:bg-gray-900/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                            >
                                Nuestro trabajo
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#Guías"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                            >
                                Guías del Estudiante
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div className={`relative hidden lg:block lg:col-span-2 transform transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={portada}
                        alt="FIUBA"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white dark:to-primary" />
                </div>
            </section>

            {/* About Section */}
            <section id="Nosotros" ref={aboutSection.ref} className="min-h-screen pt-20 pb-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <SectionNumber num="01" />
                        </div>

                        <div className={`lg:col-span-5 lg:pt-8 transform transition-all duration-700 delay-200 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-body">
                                La voz de los
                                <span className="text-secundary"> estudiantes</span>
                            </h2>
                            <p className="text-xl leading-relaxed text-muted">
                                Somos una agrupación estudiantil independiente y horizontal, nacida en los pasillos de FIUBA.
                            </p>
                            <p className="text-xl leading-relaxed text-muted">
                                Nunca hemos esperado que las cosas las cambie otro.
                            </p>
                        </div>

                        <div className={`lg:col-span-5 lg:pt-8 transform transition-all duration-700 delay-400 ${aboutSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: '20+', label: 'Años de historia' },
                                    { value: '35%', label: 'Votos 2024 — 1ra fuerza en Consejo' },
                                    { value: '50+', label: 'Somos estudiantes, graduados y docentes' },
                                    { value: 'Lista 417', label: 'Tu voz en Consejo Directivo' },
                                ].map(({ value, label }) => (
                                    <div key={value} className="p-8 rounded-2xl bg-card">
                                        <div className="text-4xl font-bold text-secundary">{value}</div>
                                        <div className="mt-2 text-subtle">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="Valores" ref={valuesSection.ref} className="min-h-screen pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <SectionNumber num="02" />
                        </div>
                        <div className={`lg:col-span-10 lg:pt-8 transform transition-all duration-700 delay-200 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="text-sm uppercase tracking-[0.3em] text-secundary">
                                Nuestros pilares
                            </span>
                            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-body">
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
                                description: '20 años transformando la facultad: más cursos en materias colapsadas, mejoras edilicias y los planes de estudio 2020. Y seguimos sumando.',
                                icon: '✓'
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className={`p-10 rounded-3xl border border-ui transition-all duration-500 hover:scale-105 hover:border-secundary transform bg-page ${
                                    valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <span className="text-4xl text-secundary">{value.icon}</span>
                                <h3 className="mt-6 text-2xl font-bold text-body">
                                    {value.title}
                                </h3>
                                <p className="mt-4 leading-relaxed text-subtle">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className={`mt-12 text-center transform transition-all duration-700 delay-500 ${valuesSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Link
                            href="/quienes-somos"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                        >
                            Que veinte años no es nada...
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guías Section */}
            <section id="Guías" ref={ctaSection.ref} className="min-h-screen lg:min-h-0 pt-20 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-secundary/10 dark:bg-secundary/20" />
                <div className="max-w-7xl mx-auto px-8 lg:px-16 relative">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <div className={`lg:col-span-2 transform transition-all duration-700 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <SectionNumber num="03" />
                        </div>
                        <div className={`lg:col-span-10 lg:pt-8 transform transition-all duration-700 delay-200 ${ctaSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="text-xl leading-relaxed text-muted">
                                Todo lo que <span className="text-secundary">necesitás saber</span>
                            </p>
                            <h2 className="mt-2 text-5xl md:text-7xl font-black text-body">
                                Guías del Estudiante
                            </h2>

                            <div className="mt-12 flex flex-col gap-6">
                                <Link href="/guia" className="inline-flex items-center gap-4 group">
                                    <span className="w-14 h-14 rounded-full bg-secundary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-lg font-medium text-body">Guía del Estudiante Fiubense</span>
                                        <span className="text-sm text-subtle">Tus derechos y trámites en FIUBA</span>
                                    </span>
                                </Link>
                                <Link href="/guia-cbc" className="inline-flex items-center gap-4 group">
                                    <span className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-gray-100 dark:bg-white/10">
                                        <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-lg font-medium text-body">Guía del Estudiante del CBC</span>
                                        <span className="text-sm text-subtle">Tu primer año en la UBA</span>
                                    </span>
                                </Link>
                                <a
                                    href="https://www.instagram.com/mli.fiuba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 group"
                                >
                                    <span className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-gray-100 dark:bg-white/10">
                                        <Image
                                            className="theme-invert w-5 h-5"
                                            src="/instagram.svg"
                                            height={20}
                                            width={20}
                                            alt="Instagram"
                                        />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-lg font-medium text-body">Escribinos</span>
                                        <span className="text-sm text-subtle">@mli.fiuba en Instagram</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
