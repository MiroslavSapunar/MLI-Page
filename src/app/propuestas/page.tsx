'use client'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from "@/context/ThemeContext"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'

interface Proposal {
    title: string
    text: string
    icon: React.ReactNode
}

function useInView(threshold = 0.15) {
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

// SVG icons matching the PDF style
const icons = {
    comedor: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
        </svg>
    ),
    espacios: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    ia: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
    extension: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    burocracia: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    plataforma: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
    ),
}

const proposals: Proposal[] = [
    {
        title: "Un Comedor que continúe creciendo",
        text: "Vamos a seguir implementando mejoras en el servicio para ofrecer una propuesta aún más elaborada. Buscaremos también implementar un sistema de becas para los estudiantes que lo requieran.",
        icon: icons.comedor,
    },
    {
        title: "Espacios de distensión",
        text: "La facu tiene muchísimos espacios desaprovechados. Nuestra intención es reacondicionarlos con el fin de la creación de espacios de Coworking, para descansar o simplemente tomar unos mates.",
        icon: icons.espacios,
    },
    {
        title: "FIUBA x IA",
        text: "Con respecto al crecimiento exponencial de las inteligencias artificiales, no debemos afrontar solamente el presente, sino pensar el futuro del avance de dicha tecnología. Proponemos poner el debate sobre la mesa y empezar a pensar entre todos el camino que debemos tomar como futuros ingenieros e ingenieras del país.",
        icon: icons.ia,
    },
    {
        title: "Reconocimiento a Extensión",
        text: "Entendemos que los proyectos de extensión existentes en nuestra facultad aportan como actividades extracurriculares mucho valor a nuestra formación. Queremos alentar esta participación, proponiendo la implementación de un reglamento donde a sus miembros se les reconozcan créditos, becas o antecedentes académicos por las actividades realizadas.",
        icon: icons.extension,
    },
    {
        title: "Disminuir la burocracia",
        text: "Simplifiquemos los trámites administrativos y académicos con las distintas cuestiones de la facultad.",
        icon: icons.burocracia,
    },
    {
        title: "Plataforma digital",
        text: "A lo largo de estos años aprobamos muchas resoluciones en pos del bienestar estudiantil. Queremos crear un archivo digital donde las puedas encontrar todas juntas y acceder fácilmente a la que estás buscando.",
        icon: icons.plataforma,
    },
]

function ProposalCard({ proposal, index, isInView, isDark }: { proposal: Proposal; index: number; isInView: boolean; isDark: boolean }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative p-8 md:p-10 rounded-3xl transition-all duration-700 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } ${isDark
                    ? 'bg-white/5 hover:bg-white/[0.08]'
                    : 'bg-white hover:shadow-xl shadow-lg'
                }`}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* Accent line */}
            <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-500 ${isHovered ? 'bg-secundary' : isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isHovered
                ? 'bg-secundary text-white'
                : isDark
                    ? 'bg-white/10 text-white/70'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                {proposal.icon}
            </div>

            {/* Content */}
            <h3 className={`mt-6 text-xl md:text-2xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {proposal.title}
            </h3>
            <p className={`mt-4 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {proposal.text}
            </p>
        </div>
    )
}

export default function PropuestasPage() {
    const { isDark } = useTheme()
    const heroRef = useInView()
    const gridRef = useInView(0.1)

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white'}`}>
            <NavBar />

            {/* Hero */}
            <section
                ref={heroRef.ref}
                className="pt-24 pb-16 px-8 lg:px-16"
            >
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-700 ${heroRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="text-sm uppercase tracking-[0.3em] text-secundary">
                            Elecciones 2026
                        </span>
                        <h1 className={`mt-4 text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Algunas
                            <br />
                            <span className="text-secundary">Propuestas</span>
                        </h1>
                        <p className={`mt-6 text-xl max-w-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                            La voluntad de hacerlo nosotros.
                        </p>
                    </div>
                </div>
            </section>

            {/* Proposals */}
            <section
                ref={gridRef.ref}
                className="pb-20 px-8 lg:px-16"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proposals.map((proposal, index) => (
                            <ProposalCard
                                key={proposal.title}
                                proposal={proposal}
                                index={index}
                                isInView={gridRef.isInView}
                                isDark={isDark}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing motto */}
            <section className="px-8 lg:px-16 pb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <p className={`text-3xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Lista <span className="text-secundary">417</span>
                    </p>
                    <p className={`mt-4 text-xl md:text-2xl font-bold italic ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                        La voluntad de hacerlo nosotros
                    </p>
                </div>
            </section>

            <CTASection
                title="Hechos, no promesas"
                subtitle="Mirá todo lo que ya hicimos por FIUBA"
                buttons={[
                    { label: "Ver nuestros logros", href: "/logros", variant: "primary" },
                    { label: "Seguinos en", href: "https://www.instagram.com/mli.fiuba", variant: "instagram" }
                ]}
            />
        </div>
    )
}
