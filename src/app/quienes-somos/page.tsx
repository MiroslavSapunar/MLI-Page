'use client'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from "@/context/ThemeContext"
import NavBar from '../components/navbar'
import Link from 'next/link'

/**
 * Quiénes Somos - MLI History & Story Page
 * - Vertical narrative flow
 * - Timeline with milestones
 * - Text-focused with accent visuals
 * - Scroll-triggered reveals
 * - Elegant typography
 */

function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}

export default function QuienesSomos() {
    const { isDark } = useTheme()
    const [scrollY, setScrollY] = useState(0)

    const intro = useScrollReveal()
    const timeline = useScrollReveal()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const milestones = [
        { year: '2005', title: 'Fundación', desc: 'Nace como una agrupación de y para los estudiantes de FIUBA' },
        { year: '2015', title: 'Presidencia CEI', desc: 'Asumimos la conducción del Centro de Estudiantes' },
        { year: '2022', title: 'Nuevos planes', desc: 'Impulsamos la reforma de los planes de estudio' },
        { year: '2024', title: 'Victoria electoral', desc: 'Lista más votada con el 35% de los votos' },
    ]

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-[#fafafa]'}`}>
            {/* Floating Header */}
            <NavBar />

            {/* Hero - Large Text */}
            <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
                {/* Parallax background text */}
                <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none ${isDark ? 'text-white/[0.03]' : 'text-gray-900/[0.03]'}`}
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                    <span className="text-[20vw] font-black">MLI</span>
                </div>

                <div className="relative text-center max-w-4xl">
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Una historia de
                        <br />
                        <em className="text-secundary font-normal">independencia</em>
                        <br />
                        estudiantil
                    </h1>
                    <p className={`mt-8 text-xl md:text-2xl font-light ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        20 años transformando FIUBA
                    </p>

                    <div className={`mt-16 animate-bounce ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                        <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section
                ref={intro.ref}
                className={`py-32 px-6 transform transition-all duration-1000 ${intro.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
                <div className="max-w-3xl mx-auto">
                    <p className={`text-2xl md:text-3xl font-light leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        <span className="text-secundary font-normal">MLI</span> nació en 2005 como una agrupación
                        de estudiantes que no quiso esperar que las cosas las cambie otro.
                        <span className={`block mt-6 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                            Somos independientes porque no respondemos a partidos políticos ni intereses externos.
                            Somos horizontales porque todos decidimos por igual.
                        </span>
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section
                ref={timeline.ref}
                className={`py-32 px-6 ${isDark ? 'bg-white/5' : 'bg-white'}`}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-serif font-light text-center mb-20 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Nuestra <em className="text-secundary">trayectoria</em>
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-white/20' : 'bg-gray-200'}`} />

                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center mb-16 last:mb-0 transform transition-all duration-700 ${
                                    timeline.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* Desktop: Alternate sides */}
                                <div className={`hidden md:flex w-full items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                        <span className="text-5xl font-bold text-secundary">{milestone.year}</span>
                                        <h3 className={`mt-2 text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {milestone.title}
                                        </h3>
                                        <p className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {milestone.desc}
                                        </p>
                                    </div>
                                    {/* Center dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secundary border-4 border-primary" style={{ borderColor: isDark ? '#101820' : '#fafafa' }} />
                                    <div className="w-1/2" />
                                </div>

                                {/* Mobile: All on right */}
                                <div className="md:hidden flex items-start pl-16">
                                    <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-secundary" />
                                    <div>
                                        <span className="text-3xl font-bold text-secundary">{milestone.year}</span>
                                        <h3 className={`mt-1 text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {milestone.title}
                                        </h3>
                                        <p className={`mt-1 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {milestone.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Styled to match page narrative */}
            <section className={`py-32 px-6 ${isDark ? 'bg-secundary/10' : 'bg-secundary/5'}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`text-4xl md:text-5xl font-serif font-light ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        La historia continúa
                        <br />
                        <em className="text-secundary">con vos</em>
                    </h2>
                    <p className={`mt-6 text-xl ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        Sumate a transformar FIUBA
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/guia"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secundary text-white font-medium rounded-full hover:bg-secundary/90 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Guía Estudiantil
                        </Link>
                        <a
                            href="https://www.instagram.com/mli.fiuba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-full border-2 transition-colors ${
                                isDark
                                    ? 'border-white/30 text-white hover:bg-white/10'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            @mli.fiuba
                        </a>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
