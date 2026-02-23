'use client'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from "@/context/ThemeContext"
import CTASection from './CTASection'

interface Proposal {
    title: string
    text: string
    icon: string
}

const proposals: Proposal[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Los servicios del CEI pueden ser mucho mejores. Proponemos crear una entidad jurídica formal que permita nuevos medios de pago (como Mercado Pago), precios más bajos con proveedores formales, y becas sostenidas financiadas por las ganancias del CEI.",
        icon: "💳"
    },
    {
        title: "Régimen de cursada unificado",
        text: "Los planes nuevos necesitan reglas claras. Proponemos clasificar materias por metodología para unificar cantidad de TPs y parciales, requisitos de asistencia, y posibilidad de promoción. Basta de que cada materia tenga sus propias reglas.",
        icon: "📋"
    },
    {
        title: "Resolver superposiciones horarias",
        text: "La transición hacia los nuevos planes generó mayores casos de superposición que tenemos identificados. El siguiente paso es subsanar este defecto que no podemos extender ad infinitum prolongando la duración de nuestras carreras.",
        icon: "📅"
    },
    {
        title: "Trámites centralizados",
        text: "Las asignaciones de condicionales y los formularios de cambios de curso deben ser iguales en todos los Departamentos, centralizados y accesibles de forma clara, para no perder tiempo adivinando dónde realizar estos trámites.",
        icon: "📝"
    },
    {
        title: "No más cuellos de botella",
        text: "Queremos cursos alternativos asincrónicos virtuales para materias con poca oferta horaria. El formato asincrónico evitaría superposiciones. Si la facultad no puede ofrecer más cursos, debe evitar que se conviertan en una traba.",
        icon: "🚀"
    },
    {
        title: "Flexibilización para el final de carrera",
        text: "Las últimas materias no deberían alargarse por trabas administrativas. Proponemos excepciones automáticas de correlativas para las últimas 2-3 materias cuando no afecten la calidad formativa. Menos burocracia, más graduados.",
        icon: "🎓"
    },
    {
        title: "Más espacios de distensión",
        text: "La facultad ofrece pocos lugares donde descansar entre cursadas. Necesitamos sedes más amenas y habitables. Reacondicionaremos espacios del CEI y trabajaremos con la facultad para mejorar la situación edilicia.",
        icon: "☕"
    },
]

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

export default function Proposals() {
    const { isDark } = useTheme()
    const heroSection = useInView()
    const proposalsSection = useInView()

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
                            Elecciones 2026
                        </span>
                        <h1 className={`mt-4 text-5xl md:text-7xl font-black leading-[0.95] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Nuestras
                            <br />
                            <span className="text-secundary">Propuestas</span>
                        </h1>
                        <p className={`mt-6 text-xl max-w-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                            &quot;La voluntad de hacerlo nosotros&quot; — nuestro compromiso para seguir transformando FIUBA.
                        </p>
                        <p className={`mt-4 text-lg ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                            Argentina necesita más ingenieros. FIUBA debe liderar esa transformación.
                        </p>
                    </div>
                </div>
            </section>

            {/* Proposals Grid */}
            <section
                ref={proposalsSection.ref}
                className="py-20 px-8 lg:px-16"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proposals.map((proposal, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] transform ${proposalsSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    } ${isDark
                                        ? 'bg-white/5 border-white/10 hover:border-secundary'
                                        : 'bg-white border-gray-200 hover:border-secundary shadow-lg'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="text-4xl">{proposal.icon}</span>
                                <h3 className={`mt-4 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {proposal.title}
                                </h3>
                                <p className={`mt-3 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                    {proposal.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Hechos, no promesas"
                subtitle="20 años transformando FIUBA con resultados concretos"
                buttons={[
                    { label: "Mirá lo que ya hicimos", href: "/logros", variant: "primary" },
                    { label: "Seguinos en", href: "https://www.instagram.com/mli.fiuba", variant: "instagram" }
                ]}
            />
        </div>
    )
}
