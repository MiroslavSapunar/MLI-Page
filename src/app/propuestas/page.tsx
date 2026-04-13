'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from "@/context/ThemeContext"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'

interface Proposal {
    title: string
    text: string
    icon: string
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

const proposals: Proposal[] = [
    {
        title: "Un Comedor que continúe creciendo",
        text: "Vamos a seguir implementando mejoras en el servicio para ofrecer una propuesta aún más elaborada. Buscaremos también implementar un sistema de becas para los estudiantes que lo requieran.",
        icon: "/comedor.svg",
    },
    {
        title: "Espacios de distensión",
        text: "La facu tiene muchísimos espacios desaprovechados. Nuestra intención es reacondicionarlos con el fin de la creación de espacios de Coworking, para descansar o simplemente tomar unos mates.",
        icon: "/distencion.svg",
    },
    {
        title: "FIUBA x IA",
        text: "Con respecto al crecimiento exponencial de las inteligencias artificiales, no debemos afrontar solamente el presente, sino pensar el futuro del avance de dicha tecnología. Proponemos poner el debate sobre la mesa y empezar a pensar entre todos el camino que debemos tomar como futuros ingenieros e ingenieras del país.",
        icon: "/FIUBA-IA.svg",
    },
    {
        title: "Reconocimiento a Extensión",
        text: "Entendemos que los proyectos de extensión existentes en nuestra facultad aportan como actividades extracurriculares mucho valor a nuestra formación. Queremos alentar esta participación, proponiendo la implementación de un reglamento donde a sus miembros se les reconozcan créditos, becas o antecedentes académicos por las actividades realizadas.",
        icon: "/extension.svg",
    },
    {
        title: "Disminuir la burocracia",
        text: "Simplifiquemos los trámites administrativos y académicos con las distintas cuestiones de la facultad.",
        icon: "/menos-burocracia.svg",
    },
    {
        title: "Plataforma digital",
        text: "A lo largo de estos años aprobamos muchas resoluciones en pos del bienestar estudiantil. Queremos crear un archivo digital donde las puedas encontrar todas juntas y acceder fácilmente a la que estás buscando.",
        icon: "/Digital.svg",
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
                ? 'bg-secundary'
                : isDark
                    ? 'bg-white/10'
                    : 'bg-gray-100'
                }`}>
                <Image
                    src={proposal.icon}
                    alt=""
                    width={32}
                    height={32}
                    // className={`transition-all duration-300 ${isDark || isHovered ? 'invert' : ''}`}
                    className={`transition-all duration-300 ${isDark || (!isDark && isHovered) ? 'invert' : ''}`}
                />
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
