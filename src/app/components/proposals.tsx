'use client'
import { useInView } from "@/hooks/useInView"
import CTASection from './CTASection'
import { PageHero, Corners, frame, gutter, reveal } from './base'

interface Proposal {
    title: string
    text: string
}

const proposals: Proposal[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Los servicios del CEI pueden ser mucho mejores. Proponemos crear una entidad jurídica formal que permita nuevos medios de pago (como Mercado Pago), precios más bajos con proveedores formales, y becas sostenidas financiadas por las ganancias del CEI."
    },
    {
        title: "Régimen de cursada unificado",
        text: "Los planes nuevos necesitan reglas claras. Proponemos clasificar materias por metodología para unificar cantidad de TPs y parciales, requisitos de asistencia, y posibilidad de promoción. Basta de que cada materia tenga sus propias reglas."
    },
    {
        title: "Resolver superposiciones horarias",
        text: "La transición hacia los nuevos planes generó mayores casos de superposición que tenemos identificados. El siguiente paso es subsanar este defecto que no podemos extender ad infinitum prolongando la duración de nuestras carreras."
    },
    {
        title: "Trámites centralizados",
        text: "Las asignaciones de condicionales y los formularios de cambios de curso deben ser iguales en todos los Departamentos, centralizados y accesibles de forma clara, para no perder tiempo adivinando dónde realizar estos trámites."
    },
    {
        title: "No más cuellos de botella",
        text: "Queremos cursos alternativos asincrónicos virtuales para materias con poca oferta horaria. El formato asincrónico evitaría superposiciones. Si la facultad no puede ofrecer más cursos, debe evitar que se conviertan en una traba."
    },
    {
        title: "Flexibilización para el final de carrera",
        text: "Las últimas materias no deberían alargarse por trabas administrativas. Proponemos excepciones automáticas de correlativas para las últimas 2-3 materias cuando no afecten la calidad formativa. Menos burocracia, más graduados."
    },
    {
        title: "Más espacios de distensión",
        text: "La facultad ofrece pocos lugares donde descansar entre cursadas. Necesitamos sedes más amenas y habitables. Reacondicionaremos espacios del CEI y trabajaremos con la facultad para mejorar la situación edilicia."
    },
]

export default function Proposals() {
    const { observe, isInView } = useInView(0.05)

    return (
        <div className="min-h-screen bg-page">
            <PageHero
                label="Archivo · Campaña 2022-2024"
                title={['Nuestras', 'propuestas']}
                lead={<>
                    <p>&quot;La voluntad de hacerlo nosotros&quot; — nuestro compromiso para seguir transformando FIUBA.</p>
                    <p className="mt-3 text-lg text-subtle">Argentina necesita más ingenieros. FIUBA debe liderar esa transformación.</p>
                </>}
            />

            <section ref={observe} className="border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <ol className={`grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--theme-border)] ${reveal(isInView)}`}>
                        {proposals.map((proposal, index) => (
                            <li key={proposal.title} className={`group bg-page ${gutter} md:px-8 lg:px-10 py-10`}>
                                <span className="font-mono text-xs text-faint group-hover:text-secundary transition-colors">{String(index + 1).padStart(2, '0')}</span>
                                <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-body">{proposal.title}</h3>
                                <p className="mt-3 leading-relaxed text-subtle">{proposal.text}</p>
                                <div className="mt-6 h-[2px] w-8 bg-secundary transition-all duration-500 group-hover:w-full" />
                            </li>
                        ))}
                    </ol>
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
