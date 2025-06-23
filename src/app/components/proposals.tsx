interface Data {
    title: string,
    text: string,
    large?: boolean
}

const dataProposals: Data[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Los servicios del CEI pueden ser mucho mejores. Proponemos crear una entidad jurídica formal que permita:\n• Nuevos medios de pago (como Mercado Pago)\n• Precios más bajos con proveedores formales\n• Becas sostenidas financiadas por las ganancias del CEI\nYa iniciamos este proceso con el nuevo estatuto aprobado por todas las agrupaciones.",
        large: true
    },
    {
        title: "Régimen de cursada",
        text: "Los planes nuevos necesitan reglas claras de cursada. Proponemos clasificar materias por metodología para unificar:\n• Cantidad de trabajos prácticos y parciales\n• Requisitos de asistencia\n• Posibilidad de promoción\nBasta de que cada materia tenga sus propias reglas confusas."
    },
    {
        title: "Resolver de forma definitiva superposiciones horarias",
        text: "Sabemos que la transición hacia los nuevos planes generó mayores casos de superposición, que tenemos identificados.\nEl siguiente paso es subsanar este defecto que si bien era necesario, ya que era imposible una primera etapa de cursos en simultaneo para ambos planes sin superposiciones, no podemos extender este problema ad infinitum prolongando la duración de nuestras carreras."
    },
    {
        title: "Unificar tramites de condicionales y cambios de curso",
        text: "Otra de nuestras propuestas es que las asignaciones de condicionales y los formularios de cambios de curso sean iguales en todos los Departamentos, centralizados y accesibles de forma clara y de antemano, para no perder tiempo valioso teniendo que adivinar la forma y el lugar para realizar estos trámites y poder arrancar a cursar en el momento que corresponde."
    },
    {
        title: "No más cuellos de botella en materias con curso único",
        text: "Queremos que existan cursos alternativos asincrónicos virtuales para aquellas materias que tengan poca oferta horaria y que se compartan entre carreras.\nEl formato asincrónico sería una buena opción, ya que evitaría que se superpongan con los horarios de otras materias.\nSi la facultad no puede ofrecer más cursos por restricción real de recursos, entonces debe buscar la forma de evitar que se conviertan en una traba."
    },
    {
        title: "Flexibilización Académica para el Último Tramo de la Carrera",
        text: "Las últimas materias no deberían alargarse por trabas administrativas. Proponemos excepciones automáticas de correlativas para las últimas 2-3 materias cuando no afecten la calidad formativa.\nMenos burocracia, más graduados."
    },
    {
        title: "Más espacios de distensión",
        text: "Todos sabemos lo que es cursar entre 6 y 8 horas durante 4 o 5 dias a la semana. Sin embargo la facultad ofrece pocos lugares donde poder descansar, relajarse y pasar un rato con amigos entre cursadas -incluso podemos decir que carece de álgo tan básico como luz natural-.\nNecesitamos hacer de nuestras sedes lugares más amenos y habitables para todos, por eso reacondicionaremos algunos espacios del CEI que no tan usados y trabajaremos con la facultad para que sea un tema en agenda junto a la situacion edilicia en general de nuestra sedes."
    },
]

function Card({ data }: { data: Data }) {
    const style = data.large ? "flex items-start gap-4 lg:col-span-2" : "flex items-start gap-4"

    return (
        <div className={style} >
            <span className="shrink-0 rounded-lg bg-primary p-4 text-secundary">
                <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
            </span>

            <div>
                <h2 className="text-2xl font-bold text-white ">{data.title}</h2>
                {
                    data.text.split("\n").map((p) =>
                        <p key={p} className="mt-3 text-xl ">{p}</p>
                    )
                }
            </div>
        </div>

    )
}

export default function Proposals() {
    return (
        <section id="propuestas" className="bg-secundary text-primary">
            <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8 ">
                <div>

                    <h2 className="text-3xl font-bold sm:text-4xl">Nuestras Propuestas</h2>

                    <div className="mt-6 space-y-4">
                        <p className="text-xl text-white">
                            <span className="font-bold text-primary">"La voluntad de hacerlo nosotros"</span> - nuestro compromiso para seguir transformando FIUBA.
                        </p>
                        <p className="text-lg text-white/90">
                            Argentina necesita más ingenieros. <span className="font-bold text-primary">FIUBA debe liderar esa transformación.</span>
                        </p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                    {
                        dataProposals.map((e, idx) => <Card key={idx} data={e} />)
                    }
                </div>
            </div>
        </section >
    )
}
