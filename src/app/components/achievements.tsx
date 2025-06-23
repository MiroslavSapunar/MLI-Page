'use client'
import { useState } from "react";

interface Data {
    source?: string,
    title: string,
    short: string,
    long: string
}

const dataArchivements: Data[] = [
    {
        title: "Nuevos Planes 2020",
        short: "Tras varios años de trabajo junto a toda la comunidad educativa, docente y autoridades, como consejeros estudiantiles logramos un hito histórico\:\nSe actualizaron los contenidos, materias y planes de estudio de todas las carreras, algunas con casi 35 años de antiguedad.",
        long: "Tras varios años de trabajo junto a toda la comunidad educativa, docente y autoridades, como consejeros estudiantiles logramos un hito histórico\:\nSe actualizaron los contenidos, materias y planes de estudio de todas las carreras, algunas con casi 35 años de antiguedad.\nSe logro una reducción nominal de horas y duración en cuatrimestres de las carreras quitando contenidos repetidos entre asignaturas u obsoletos.\nEsto significa carreras con duración estipulados en papel y en la realidad mucho más cercanos, realistas y realizables.\nHoy contamos con carreras modernas y actualizadas para un mundo que vive el auge de la 4ta revolucion industrial.",
    },
    {
        title: "Incorporación de Pensamiento Computacional al CBC",
        short: "Estos nuevos contenidos básicos de programación para todas las carreras, vienen de la mano de los cambios que ha experimentado el ámbito profesional de todas las ingenierias en los últimos 25 años.",
        long: "Una de los grandes cambios que acompañaron a los planes nuevos, fue la incorporación de la nueva materia Pensamiento Computacional a la currícula del CBC.\nEstos nuevos contenidos básicos de programación para todas las carreras, vienen de la mano de los cambios que ha experimentado el ámbito profesional de todas las ingenierias en los últimos 25 años.\nLos docentes de la materia son ayudantes y docentes de cátedras del Dpto de Computación de FIUBA."
    },
    {
        title: "No más peligro de caida de mármoles en PC",
        short: "En el medio de los problemas que generaron los mármoles de PC, discutimos con las autoridades alternativas para reducir el impacto en nuestras cursadas, seguimos de cerca el desarrollo de la obra y exigimos que se acelerarán los tiempos de asignación y adquisición de fondos para las medidas de prevención y las obras necesarias.",
        long: "En el medio de los problemas que generaron los mármoles de PC, discutimos con las autoridades alternativas para reducir el impacto en nuestras cursadas, seguimos de cerca el desarrollo de la obra y exigimos que se acelerarán los tiempos de asignación y adquisición de fondos para las medidas de prevención y las obras necesarias.\nPese a la incomodidad generada por los andamios de la obra, y la limitación física en la sede, logramos que eso no afecte al desarrollo de los parciales y finales al exigir y lograr migrar las ultimas semanas de clases y evaluaciones a la sede de LH de las materias iniciales, evitando demoras y postergaciones de parciales.\nHoy podemos celebrar que las obras estan casi terminadas y la sede de PC casi libre de andamios y de peligros futuros."
    },
    {
        title: "Ningún condicional se quedó sin cursar",
        short: "Fuimos la voz  del reclamo de los compañeros que habían quedado como condicionales en materias y que temían quedar sin cursar. La organizacion estudiantil fue imprecindible para encontrar soluciones en los diferentes cursos y que todos los estudiantes fuesen asignados y nadie se quedara sin cursar.",
        long: "Fuimos la voz  del reclamo de los compañeros que habían quedado como condicionales en materias y que temían quedar sin cursar. La organizacion estudiantil fue imprecindible para encontrar soluciones en los diferentes cursos y que todos los estudiantes fuesen asignados y nadie se quedara sin cursar.\nEntre los casos se encuentran las materias de Electrotecnia, Principios de Ig. industrial, TDA, Redes de comunicación, Orga del computador, OyDE, Ing. Ambiental, Transformación de materiales, Higiene."
    },
    {
        title: "Álgebra II promocionable",
        short: "En un trabajo conjunto con el Director del dpto de Matemática, logramos una nueva cursada piloto de aprobación directa por promoción por parciales para Álgebra II.",
        long: "En un trabajo conjunto con el Director del dpto de Matemática, logramos una nueva cursada piloto de aprobación directa por promoción por parciales para Álgebra II. \nLa nueva cursada se materializó en un 56% de aprobados en el último cuatrimestre, un 11% más que con la aprobación solo por finales.\nEstos datos nos alientan a seguir impulsando la cursada promocionable a más materias"
    },
    {
        title: "Simplificamos el trámite de certificado de trabajo",
        short: "Desde hace varios años, para presentar un certificado de trabajo, constaba de muchos requisitos, en los cuales se encontraba presentar tres recibos de sueldo, una nota y un permiso de la Afip.\nEs por eso que nuestro centro de estudiantes, impulsó e implementó un proceso mucho más eficiente, en el cual solo es necesario un recibo de sueldo para quienes se encuentran en relación de dependencia y un alta de afip junto a un pago o factura para monotributistas. ",
        long: "Desde hace varios años, para presentar un certificado de trabajo, constaba de muchos requisitos, en los cuales se encontraba presentar tres recibos de sueldo, una nota y un permiso de la Afip.\nEs por eso que nuestro centro de estudiantes, impulsó e implementó un proceso mucho más eficiente, en el cual solo es necesario un recibo de sueldo para quienes se encuentran en relación de dependencia y un alta de afip junto a un pago o factura para monotributistas. \nEn este mismo proceso se incorporó los casos de pasantías (que si bien es un logro que compartimos antes, no estaba correctamente reglamentado). En esta actualización también entran los ayudantes ad honorem, que con la resolución de su nombramiento y un certificado emitido por cualquier autoridad del departamento correspondiente.\n Este cambio se verá aplicado en el proximo periodo de presentación de certificados"
    },
    {
        title: "Cursada Mixta Virtual/Presencial",
        short: "Logramos implementar una cursada híbrida, que tome lo mejor de la cursada tradicional e interacción presencial, con las ventajas de la virtualidad, para que sea más flexible a aquellos que viajan largas distancias o tienen que trabajar, para que ningún compañero se quede sin cursar.",
        long: "Luego de la Pandemia, quedó demostrado que la virtualidad es una herramienta más para nuestras cursadas y carreras.\nLogramos implementar una cursada híbrida, que tome lo mejor de la cursada tradicional e interacción presencial, con las ventajas de la virtualidad, para que sea más flexible a aquellos que viajan largas distancias o tienen que trabajar, para que ningún compañero se quede sin cursar.\nEste es un paso más en la modernización de nuestra Facultad y carreras."
    },
    {
        title: "Eliminamos el requisito de 72hs hábiles para inscribirte a finales",
        short: "El anacrónico requisito se redujo a solo 48hs previas incluyendo feriados y fines de semana. Un paso más en la modernización de FIUBA.",
        long: "El requisito, que tenía sentido cuando uno tenía que ir al dpto personalmente anotarse a un final, se convertía en una traba cuando uno no contemplada los días no laborales para anotarse a través del SIU.\nEl anacrónico requisito se redujo a solo 48hs previas incluyendo feriados y fines de semana. Un paso más en la modernización de FIUBA."
    },
    {
        title: "Resultados públicos de las encuestas",
        short: "Logramos el acceso a la información pública y anónima de las encuestas que realizamos cuando terminamos una la cursada.",
        long: "Logramos el acceso a la información pública y anónima de las encuestas que realizamos cuando terminamos una la cursada.\nCreemos que más información a la hora de elegir entre cursos/materias enriquece a toda la comunidad académica.\nReconociendo la tarea de nuestros docentes y señalando los aspectos que deben ser revisados. "
    },
    {
        title: "Logramos las equivalencias automáticas entre planes de Ing. Informática",
        short: "Esto se hizo para aceitar la transición entre planes de estudios; Reglamentamos las equivalencias automaticas para más de 68 materias de Ing. Informática",
        long: "Esto se hizo para aceitar la transición entre planes de estudios; Reglamentamos las equivalencias automaticas para más de 68 materias de Ing. Informática\nAntes de que se implementará esta medida, el trámite era tedioso, los estudiante teníamos solicitar la equivalencia manualmente, y podía tardar desde semanas, hasta varios meses. \nCon el nuevo procedimiento las equivalencias son automáticas, y no requiere de ninguna acción por parte de los estudiantes."
    },
    {
        title: "Más clases de consultas",
        short: "Impartimos clases de consultas gratuitas de Álgebra II, Am II y Proba, dadas por compañeros que son ayudantes en esas materias.",
        long: "Impartimos clases de consultas gratuitas de Álgebra II, Am II y Proba, dadas por compañeros que son ayudantes en esas materias.\nTrabajamos con el Dpto de matemática para que se puedan dar clases de consulta oficiales durante la cursada."
    },
    {
        title: "Más y mejores cursos de verano",
        short: "Trabajamos con la Sec. de Gestion Académica para expandir la oferta académica de los cursos de verano",
        long: "Trabajamos con la Sec. de Gestion Académica para expandir la oferta académica de los cursos de verano, haciendo que se pueda cursar Algebra A 62, y Análisis Matemático en el cbc, y pensamiento computacional en UBA XXI.\nEn FIUBA, incorporamos un formulario en donde los estudiantes podemos votar por las materias que queremos que aparezcan en la oferta .Gracias a esto último conseguimos más materias para Ingeniería Química."
    },
    {
        title: "Becas de ayuda económica",
        short: "Cuatrimestre a Cuatrimestre seguimos la adjudicación de las Becas de Ayuda Económica de FIUBA. Junto a SIGVAS -la secretaria encargada de la selección y entrega de las becas-.",
        long: "Cuatrimestre a Cuatrimestre seguimos la adjudicación de las Becas de Ayuda Económica de FIUBA. Junto a SIGVAS -la secretaria encargada de la selección y entrega de las becas-, nos ocupamos de que se maximicen la disponibilidad de recursos en cada asignación, permitiendo que estos últimos dos años llegaramos a asistir con la beca a más de 150 estudiantes por cuatrimestre. Incluso exigiendo partidas excepcionales para que no queden recursos inmovilizados sin ser ejecutados.\nMás recursos para que todos podamos cursar y terminar nuestras carreras"
    },
    {
        title: "Nueva cátedra Palacios-Puebla para el CBC",
        short: "Primera cátedra pensada desde FIUBA para dictar contenidos de AM I y Algebra I del CBC, con el objetivo de preparar mejor a los ingresantes a las carreras de Ingeniería.",
        long: "Primera cátedra pensada desde FIUBA para dictar contenidos de AM I y Algebra I del CBC, con el objetivo de preparar mejor a los ingresantes a las carreras de Ingeniería.\nMuchos de los docentes de son tambien docentes o ayudantes en FIUBA"
    }
]

function CardFAQ({ dataCard }: { dataCard: Data }) {
    const [toggle, setToggle] = useState(false);
    return (

        <div className="p-8 rounded-lg bg-gray-800">
            <button className="flex items-center justify-between w-full"
                onClick={(e) => setToggle(!toggle)}
            >
                <h1 className="font-bold mt-0.5 text-2xl text-secundary text-left">{dataCard.title}</h1>

                <span className="text-secundary  rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </span>
            </button>

            {toggle &&
                dataCard.long.split("\n").map(p =>
                    <p className="mt-6 text-xl font-medium text-white">{p}</p>
                )
            }
        </div>
    )
}

function MobileGrid() {

    const text = ["¿Cuánto más se pude lograr 🤔?", "Sip, parece mentira \npero aún no viste todo 😜", "🎉 Ahora si ya repasate todos nuestros logros 🎉"]

    const [data, setData] = useState(dataArchivements.slice(0, 4))
    const [label, setLabel] = useState("¿Te parecen pocos?\nTenemos más para mostrarte 😏");
    const [n, setN] = useState(4);
    const [idx, setIdx] = useState(0);

    let update = () => {
        if (data.length < 12) {
            setData([...data, ...dataArchivements.slice(n, n + 4)])
            setN(n + 4);
            setLabel(text[idx]);
            setIdx(idx + 1);
        } else if (data.length == 12) {
            setData([...data, ...dataArchivements.slice(n)])
            setLabel(text[idx]);
            setIdx(idx + 1)
        }
    }

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-8 text-justify">
                {
                    data.map(e => <CardFAQ key={e.title} dataCard={e} />)
                }
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={update}
                    className="px-6 py-2 font-bold max:w-3/4 my-4 mx-auto text-primary bg-secundary text-2xl rounded-lg ">
                    {label}
                </button>
            </div>
        </>

    )
}

function DesktopkGrid() {

    function Card(data: Data) {
        const [more, setMore] = useState(false);
        return (
            <div
                className="block rounded-xl text-secundary border border-secundary p-8 shadow-xl transition hover:border-white "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-2 sm:pt-3 lg:pt-4 bg-primary/25">
                    <div className="p-2 sm:p-2">
                        <h3 className="mt-0.5 text-2xl text-secundary text-left ">{data.title}</h3>

                        {!more && data.short.split("\n").map((p, idx) =>
                            <p key={idx} className="mt-2 block text-md/relaxed text-white/95  ">
                                {p}
                            </p>)}

                        {more && data.long.split("\n").map((p, idx) =>

                            <p key={idx} className="mt-2 block text-md/relaxed text-white/95  ">
                                {p}
                            </p>
                        )
                        }
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            className="inline-block rounded bg-secundary px-12 p-1 mt-1 mb-2 text-sm font-medium text-white transition hover:bg-primary hover:text-secundary "
                            onClick={() => setMore(!more)}
                        >
                            + Info
                        </button>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 text-justify">
                {dataArchivements.map(e =>
                    <Card key={e.title} source={e.source} title={e.title} short={e.short} long={e.long} />)}
            </div>
        </>
    )
}

export default function Achievements({ isMobile }: { isMobile: boolean }) {
    return (
        <section id="logros" className="bg-primary font-roboto">
            <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-secundary sm:text-4xl">Nuestros logros 2022-2024</h2>

                <div className="mt-6 space-y-4">
                    <p className="text-xl text-white">
                        <span className="text-secundary font-semibold">15+ cambios concretos</span> que transformaron tu experiencia en FIUBA.
                    </p>
                    <p className="text-lg text-white/80">
                        Desde nuevos planes de estudio hasta becas de ayuda económica. <span className="text-secundary">Resultados reales, no promesas.</span>
                    </p>
                </div>
                {
                    !isMobile &&
                    <DesktopkGrid />

                }
                {
                    isMobile &&
                    <MobileGrid />
                }
            </div>
        </section >
    )
}
