'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from "@/hooks/useInView"
import NavBar from "../components/navbar"
import CTASection from '../components/CTASection'
import { PageHero, Corners, ColumnVector, Arrow, frame, gutter, kicker, reveal, btnSecondary } from '../components/base'

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

export default function PropuestasPage() {
    const { observe, isInView } = useInView(0.1)

    return (
        <div className="min-h-screen bg-page">
            <NavBar />

            <PageHero
                label={`${proposals.length} propuestas · Elecciones 2026`}
                title={['Algunas', 'propuestas']}
                lead="La voluntad de hacerlo nosotros."
            />

            <section ref={observe} className="border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--theme-border)] border-b border-ui">
                        {proposals.map((proposal, index) => (
                            <li key={proposal.title} className={`group bg-page ${gutter} md:px-8 lg:px-10 py-10`}>
                                <div className={reveal(isInView)} style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="flex items-start justify-between">
                                    <span className="w-14 h-14 flex items-center justify-center border border-ui group-hover:border-secundary transition-colors">
                                        <Image src={proposal.icon} alt="" width={36} height={36} className="w-9 h-9 theme-invert" />
                                    </span>
                                    <span className="font-mono text-xs text-faint group-hover:text-secundary transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-black uppercase leading-tight tracking-tight text-body">{proposal.title}</h3>
                                <p className="mt-3 leading-relaxed text-subtle">{proposal.text}</p>
                                <div className="mt-6 h-[2px] w-8 bg-secundary transition-all duration-500 group-hover:w-full" />
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className={`${gutter} py-12 lg:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8`}>
                        <div className="flex items-center gap-6">
                            <ColumnVector digits="MLI" className="text-body text-2xl sm:text-3xl" />
                            <div>
                                <p className={`${kicker} text-secundary`}>Elecciones 2026</p>
                                <p className="mt-2 text-4xl sm:text-6xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-body">Lista 417</p>
                                <p className="mt-3 text-lg text-muted">La voluntad de hacerlo nosotros</p>
                            </div>
                        </div>
                        <Link href="/logros" className={`${btnSecondary} self-start md:self-end`}>
                            Ver nuestro trabajo <Arrow />
                        </Link>
                    </div>
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
