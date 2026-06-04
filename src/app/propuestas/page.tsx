'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from "@/context/ThemeContext"
import { useInView } from "@/hooks/useInView"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'

interface Proposal {
    title: string
    text: string
    icon: string
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

function ProposalCard({ proposal, index, isInView }: { proposal: Proposal; index: number; isInView: boolean }) {
    const { isDark } = useTheme()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative p-8 md:p-10 transition-all duration-700 transform bg-card ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* Accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-500 ${
                isHovered ? 'bg-secundary' : 'bg-gray-200 dark:bg-white/10'
            }`} />

            {/* Number + Icon row */}
            <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 flex items-center justify-center border-2 transition-colors duration-300 ${
                    isHovered ? 'border-secundary' : 'border-ui'
                }`}>
                    <Image
                        src={proposal.icon}
                        alt=""
                        width={36}
                        height={36}
                        className={`w-9 h-9 transition-all duration-300 ${isDark ? 'invert' : ''}`}
                    />
                </div>
                <span className={`text-[11px] font-bold tracking-[0.4em] tabular-nums transition-colors duration-300 ${
                    isHovered ? 'text-secundary' : 'text-faint'
                }`}>
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold leading-tight text-body">
                {proposal.title}
            </h3>
            <p className="mt-4 leading-relaxed text-subtle">
                {proposal.text}
            </p>
        </div>
    )
}

export default function PropuestasPage() {
    const heroRef = useInView()
    const gridRef = useInView(0.1)

    return (
        <div className="min-h-screen transition-colors duration-500 bg-page">
            <NavBar />

            <section ref={heroRef.ref} className="pt-24 pb-16 px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-700 ${heroRef.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[2px] bg-secundary" />
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-secundary">
                                {proposals.length} propuestas · Elecciones 2026
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] text-body">
                            Algunas
                            <br />
                            <span className="text-secundary">Propuestas</span>
                        </h1>
                        <p className="mt-6 text-xl max-w-2xl text-muted">
                            La voluntad de hacerlo nosotros.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={gridRef.ref} className="pb-20 px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proposals.map((proposal, index) => (
                            <ProposalCard
                                key={proposal.title}
                                proposal={proposal}
                                index={index}
                                isInView={gridRef.isInView}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t-4 border-body">
                <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-[2px] bg-secundary" />
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-secundary">Elecciones 2026</span>
                        </div>
                        <p className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-body">
                            Lista <span className="text-secundary">417</span>
                        </p>
                        <p className="mt-4 text-lg text-muted max-w-sm">
                            La voluntad de hacerlo nosotros
                        </p>
                    </div>
                    <Link
                        href="/logros"
                        className="inline-flex items-center gap-3 px-7 py-3 border-2 border-body text-body text-sm font-bold uppercase tracking-[0.12em] hover:bg-body hover:text-page transition-colors self-start md:self-end"
                    >
                        Ver nuestro trabajo
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            <CTASection
                title="Hechos, no promesas"
                subtitle="Mirá todo lo que ya hicimos por FIUBA"
                buttons={[
                    { label: "Nuestro trabajo", href: "/logros", variant: "primary" },
                    { label: "Seguinos en", href: "https://www.instagram.com/mli.fiuba", variant: "instagram" }
                ]}
            />
        </div>
    )
}
