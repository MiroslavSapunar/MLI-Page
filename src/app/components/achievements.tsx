'use client'
import { useState } from "react"
import { useInView } from "@/hooks/useInView"
import CTASection from './CTASection'
import { PageHero, Corners, Arrow, frame, gutter, textLink, reveal } from './base'

interface Achievement {
    title: string
    short: string
    long: string
}

const achievements: Achievement[] = [
    {
        title: "Nuevos Planes 2020",
        short: "Tras varios años de trabajo junto a toda la comunidad educativa, docente y autoridades, como consejeros estudiantiles logramos un hito histórico: Se actualizaron los contenidos, materias y planes de estudio de todas las carreras, algunas con casi 35 años de antigüedad.",
        long: "Tras varios años de trabajo junto a toda la comunidad educativa, docente y autoridades, como consejeros estudiantiles logramos un hito histórico: Se actualizaron los contenidos, materias y planes de estudio de todas las carreras, algunas con casi 35 años de antigüedad.\nSe logró una reducción nominal de horas y duración en cuatrimestres de las carreras quitando contenidos repetidos entre asignaturas u obsoletos.\nEsto significa carreras con duración estipulados en papel y en la realidad mucho más cercanos, realistas y realizables.\nHoy contamos con carreras modernas y actualizadas para un mundo que vive el auge de la 4ta revolución industrial."
    },
    {
        title: "Incorporación de Pensamiento Computacional al CBC",
        short: "Estos nuevos contenidos básicos de programación para todas las carreras, vienen de la mano de los cambios que ha experimentado el ámbito profesional de todas las ingenierías en los últimos 25 años.",
        long: "Una de los grandes cambios que acompañaron a los planes nuevos, fue la incorporación de la nueva materia Pensamiento Computacional a la currícula del CBC.\nEstos nuevos contenidos básicos de programación para todas las carreras, vienen de la mano de los cambios que ha experimentado el ámbito profesional de todas las ingenierías en los últimos 25 años.\nLos docentes de la materia son ayudantes y docentes de cátedras del Dpto de Computación de FIUBA."
    },
    {
        title: "No más peligro de caída de mármoles en PC",
        short: "En el medio de los problemas que generaron los mármoles de PC, discutimos con las autoridades alternativas para reducir el impacto en nuestras cursadas y exigimos que se aceleraran los tiempos de asignación y adquisición de fondos para las obras necesarias.",
        long: "En el medio de los problemas que generaron los mármoles de PC, discutimos con las autoridades alternativas para reducir el impacto en nuestras cursadas, seguimos de cerca el desarrollo de la obra y exigimos que se aceleraran los tiempos de asignación y adquisición de fondos para las medidas de prevención y las obras necesarias.\nPese a la incomodidad generada por los andamios de la obra, y la limitación física en la sede, logramos que eso no afecte al desarrollo de los parciales y finales al exigir y lograr migrar las últimas semanas de clases y evaluaciones a la sede de LH de las materias iniciales, evitando demoras y postergaciones de parciales.\nHoy podemos celebrar que las obras están casi terminadas y la sede de PC casi libre de andamios y de peligros futuros."
    },
    {
        title: "Ningún condicional se quedó sin cursar",
        short: "Fuimos la voz del reclamo de los compañeros que habían quedado como condicionales en materias y que temían quedar sin cursar. La organización estudiantil fue imprescindible para encontrar soluciones.",
        long: "Fuimos la voz del reclamo de los compañeros que habían quedado como condicionales en materias y que temían quedar sin cursar. La organización estudiantil fue imprescindible para encontrar soluciones en los diferentes cursos y que todos los estudiantes fuesen asignados y nadie se quedara sin cursar.\nEntre los casos se encuentran las materias de Electrotecnia, Principios de Ing. Industrial, TDA, Redes de Comunicación, Orga del Computador, OyDE, Ing. Ambiental, Transformación de Materiales, Higiene."
    },
    {
        title: "Álgebra II promocionable",
        short: "En un trabajo conjunto con el Director del Dpto de Matemática, logramos una nueva cursada piloto de aprobación directa por promoción por parciales para Álgebra II.",
        long: "En un trabajo conjunto con el Director del Dpto de Matemática, logramos una nueva cursada piloto de aprobación directa por promoción por parciales para Álgebra II.\nLa nueva cursada se materializó en un 56% de aprobados en el último cuatrimestre, un 11% más que con la aprobación solo por finales.\nEstos datos nos alientan a seguir impulsando la cursada promocionable a más materias."
    },
    {
        title: "Simplificamos el trámite de certificado de trabajo",
        short: "Impulsamos e implementamos un proceso mucho más eficiente, en el cual solo es necesario un recibo de sueldo para quienes se encuentran en relación de dependencia.",
        long: "Desde hace varios años, para presentar un certificado de trabajo, constaba de muchos requisitos, en los cuales se encontraba presentar tres recibos de sueldo, una nota y un permiso de la AFIP.\nEs por eso que nuestro centro de estudiantes, impulsó e implementó un proceso mucho más eficiente, en el cual solo es necesario un recibo de sueldo para quienes se encuentran en relación de dependencia y un alta de AFIP junto a un pago o factura para monotributistas.\nEn este mismo proceso se incorporó los casos de pasantías. En esta actualización también entran los ayudantes ad honorem, que con la resolución de su nombramiento y un certificado emitido por cualquier autoridad del departamento correspondiente."
    },
    {
        title: "Cursada Mixta Virtual/Presencial",
        short: "Logramos implementar una cursada híbrida, que tome lo mejor de la cursada tradicional e interacción presencial, con las ventajas de la virtualidad.",
        long: "Luego de la Pandemia, quedó demostrado que la virtualidad es una herramienta más para nuestras cursadas y carreras.\nLogramos implementar una cursada híbrida, que tome lo mejor de la cursada tradicional e interacción presencial, con las ventajas de la virtualidad, para que sea más flexible a aquellos que viajan largas distancias o tienen que trabajar, para que ningún compañero se quede sin cursar.\nEste es un paso más en la modernización de nuestra Facultad y carreras."
    },
    {
        title: "Eliminamos el requisito de 72hs hábiles para finales",
        short: "El anacrónico requisito se redujo a solo 48hs previas incluyendo feriados y fines de semana. Un paso más en la modernización de FIUBA.",
        long: "El requisito, que tenía sentido cuando uno tenía que ir al dpto personalmente anotarse a un final, se convertía en una traba cuando uno no contemplaba los días no laborales para anotarse a través del SIU.\nEl anacrónico requisito se redujo a solo 48hs previas incluyendo feriados y fines de semana. Un paso más en la modernización de FIUBA."
    },
    {
        title: "Resultados públicos de las encuestas",
        short: "Logramos el acceso a la información pública y anónima de las encuestas que realizamos cuando terminamos una cursada.",
        long: "Logramos el acceso a la información pública y anónima de las encuestas que realizamos cuando terminamos una cursada.\nCreemos que más información a la hora de elegir entre cursos/materias enriquece a toda la comunidad académica.\nReconociendo la tarea de nuestros docentes y señalando los aspectos que deben ser revisados."
    },
    {
        title: "Equivalencias automáticas entre planes de Ing. Informática",
        short: "Reglamentamos las equivalencias automáticas para más de 68 materias de Ing. Informática, aceitando la transición entre planes de estudios.",
        long: "Esto se hizo para aceitar la transición entre planes de estudios. Reglamentamos las equivalencias automáticas para más de 68 materias de Ing. Informática.\nAntes de que se implementara esta medida, el trámite era tedioso, los estudiantes teníamos que solicitar la equivalencia manualmente, y podía tardar desde semanas hasta varios meses.\nCon el nuevo procedimiento las equivalencias son automáticas, y no requiere de ninguna acción por parte de los estudiantes."
    },
    {
        title: "Más clases de consultas",
        short: "Impartimos clases de consultas gratuitas de Álgebra II, AM II y Proba, dadas por compañeros que son ayudantes en esas materias.",
        long: "Impartimos clases de consultas gratuitas de Álgebra II, AM II y Proba, dadas por compañeros que son ayudantes en esas materias.\nTrabajamos con el Dpto de Matemática para que se puedan dar clases de consulta oficiales durante la cursada."
    },
    {
        title: "Más y mejores cursos de verano",
        short: "Trabajamos con la Sec. de Gestión Académica para expandir la oferta académica de los cursos de verano.",
        long: "Trabajamos con la Sec. de Gestión Académica para expandir la oferta académica de los cursos de verano, haciendo que se pueda cursar Álgebra A 62, y Análisis Matemático en el CBC, y Pensamiento Computacional en UBA XXI.\nEn FIUBA, incorporamos un formulario en donde los estudiantes podemos votar por las materias que queremos que aparezcan en la oferta. Gracias a esto último conseguimos más materias para Ingeniería Química."
    },
    {
        title: "Becas de ayuda económica",
        short: "Cuatrimestre a cuatrimestre seguimos la adjudicación de las Becas de Ayuda Económica de FIUBA, llegando a asistir a más de 150 estudiantes por cuatrimestre.",
        long: "Cuatrimestre a cuatrimestre seguimos la adjudicación de las Becas de Ayuda Económica de FIUBA. Junto a SIGVAS -la secretaría encargada de la selección y entrega de las becas-, nos ocupamos de que se maximicen la disponibilidad de recursos en cada asignación, permitiendo que estos últimos dos años llegáramos a asistir con la beca a más de 150 estudiantes por cuatrimestre. Incluso exigiendo partidas excepcionales para que no queden recursos inmovilizados sin siendo ejecutados.\nMás recursos para que todos podamos cursar y terminar nuestras carreras."
    },
    {
        title: "Nueva cátedra Palacios-Puebla para el CBC",
        short: "Primera cátedra pensada desde FIUBA para dictar contenidos de AM I y Álgebra I del CBC, con el objetivo de preparar mejor a los ingresantes.",
        long: "Primera cátedra pensada desde FIUBA para dictar contenidos de AM I y Álgebra I del CBC, con el objetivo de preparar mejor a los ingresantes a las carreras de Ingeniería.\nMuchos de los docentes son también docentes o ayudantes en FIUBA."
    }
]

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <li className={`group bg-page ${gutter} md:px-8 lg:px-10 py-10`}>
            <span className="font-mono text-xs text-faint group-hover:text-secundary transition-colors">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-body">{achievement.title}</h3>
            <div className="mt-3 leading-relaxed text-subtle space-y-2">
                {expanded
                    ? achievement.long.split("\n").map((p, idx) => <p key={idx}>{p}</p>)
                    : <p>{achievement.short}</p>}
            </div>
            <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded} className={`mt-5 ${textLink}`}>
                {expanded ? 'Ver menos' : 'Leer más'}
                <Arrow className={`w-4 h-4 transition-transform ${expanded ? '-rotate-90' : 'rotate-90'}`} />
            </button>
        </li>
    )
}

export default function Achievements() {
    const { observe, isInView } = useInView(0.05)

    return (
        <div className="min-h-screen bg-page">
            <PageHero
                label="Archivo · Gestión 2022-2024"
                title={['Nuestros', 'logros']}
                lead={<>
                    <p>15+ cambios concretos que transformaron tu experiencia en FIUBA.</p>
                    <p className="mt-3 text-lg text-subtle">Desde nuevos planes de estudio hasta becas de ayuda económica. Resultados reales, no promesas.</p>
                </>}
            />

            <section ref={observe} className="border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <ol className={`grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--theme-border)] ${reveal(isInView)}`}>
                        {achievements.map((achievement, index) => (
                            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
                        ))}
                    </ol>
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
