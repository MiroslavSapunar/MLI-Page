'use client'
import { useState, useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeContext"
import CTASection from './CTASection'

interface Achievement {
    title: string
    short: string
    long: string
}

function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

function AchievementCard({
    achievement,
    index,
    isInView,
    isDark
}: {
    achievement: Achievement
    index: number
    isInView: boolean
    isDark: boolean
}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={`p-8 rounded-3xl border transition-all duration-500 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } ${isDark
                ? 'bg-white/5 border-white/10 hover:border-secundary'
                : 'bg-white border-gray-200 hover:border-secundary shadow-lg'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                isDark ? 'bg-secundary/20' : 'bg-secundary/10'
            }`}>
                <svg className="w-6 h-6 text-secundary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            </div>

            {/* Title */}
            <h3 className={`mt-4 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {achievement.title}
            </h3>

            {/* Description */}
            <div className={`mt-3 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {expanded ? (
                    achievement.long.split("\n").map((p, idx) => (
                        <p key={idx} className="mb-2 last:mb-0">{p}</p>
                    ))
                ) : (
                    <p>{achievement.short.split("\n")[0]}</p>
                )}
            </div>

            {/* Expand button */}
            <button
                onClick={() => setExpanded(!expanded)}
                className={`mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark
                        ? 'text-secundary hover:text-white'
                        : 'text-secundary hover:text-gray-900'
                }`}
            >
                {expanded ? 'Ver menos' : 'Leer más'}
                <svg
                    className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    )
}

export default function Achievements() {
    const { isDark } = useTheme()
    const heroSection = useInView()
    const achievementsSection = useInView()
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await import('../../data/achievements.json')
                setAchievements(data.default)
                setIsLoaded(true)
            } catch (error) {
                console.error('Error loading achievements data:', error)
            }
        }
        loadData()
    }, [])

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white'}`}>
            {/* Hero Section */}
            <section
                ref={heroSection.ref}
                className={`pt-24 pb-16 px-8 lg:px-16 ${isDark ? 'bg-secundary/20' : 'bg-secundary/10'}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-700 ${heroSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className={`text-sm uppercase tracking-[0.3em] text-secundary`}>
                            Gestión 2022-2024
                        </span>
                        <h1 className={`mt-4 text-5xl md:text-7xl font-black leading-[0.95] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Nuestros
                            <br />
                            <span className="text-secundary">Logros</span>
                        </h1>
                        <p className={`mt-6 text-xl max-w-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                            <span className="text-secundary font-semibold">15+ cambios concretos</span> que transformaron tu experiencia en FIUBA.
                        </p>
                        <p className={`mt-4 text-lg ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                            Desde nuevos planes de estudio hasta becas de ayuda económica. Resultados reales, no promesas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section
                ref={achievementsSection.ref}
                className="py-20 px-8 lg:px-16"
            >
                <div className="max-w-7xl mx-auto">
                    {!isLoaded ? (
                        <div className={`text-center py-20 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            Cargando logros...
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <AchievementCard
                                    key={achievement.title}
                                    achievement={achievement}
                                    index={index}
                                    isInView={achievementsSection.isInView}
                                    isDark={isDark}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

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
