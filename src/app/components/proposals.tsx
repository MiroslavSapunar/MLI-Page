interface Data {
    title: string,
    text: string,
    large?: boolean
}

const dataProposals: Data[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Sabemos que los servicios del CEI pueden y deben ser mejores. Lamentablemente el esquema informal han demostrado ser el techo calidad al que se puede aspirar.\nTenemos como objetivo empezar el proceso para que los servicios del CEI tengan una entidad jurídica y salir de una vez de la informalidad, permitiendo por ejemplo incorporar otros medios de pago, como el tan pedido MP.\nÉste proceso ya arrancó con el nuevo estatuto del CEI que redactamos, sometimos a votación entre todas las agrupaciones de la facultad y que fue aprobado, que permite por ejemplo la conformación de una Sociedad Civil sin fines de lucro.\nHabiendo hecho consultas con profesionales en el tema, la idea que más nos convenció es la conformación de una fundación.\nEl motivo es que esto implicaría que todos las ganancias tendrían que invertirse obligadamente en la misma fundación.\nPor otro lado los precios se verían reducidos al poder trabajar con proveedores formales que nos garanticen menores costos.\nY finalmente, algo que no es menor, seria la posibilidad de brindar becas de manera sostenida con las ganacias de los mismos espacios.",
        large: true
    },
    {
        title: "Régimen de cursada",
        text: "Al implementar los planes nuevos, surgió una nueva necesidad. Darles una nueva estructura a la materias, que incluyen la aprobación y la forma de llevar a cabo las cursadas.\nLa gran mayoría de las materias tienen sus propias reglas. Es por esto que queremos clasificar las materias según su enfoque y metodología, haciendo que, podamos crear reglas claras y concisas para la cursada de las mismas.\nEsto significa que se podrá regular, la cantidad de trabajos prácticos, los parciales, la cantidad mínima de asistencia, la necesidad de finales -poder promocionar una materia por ejemplo-, y otros aspectos de las materias según su clasificación."
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
        text: "Si del final de la carrera hablamos, es donde más debemos garantizar la posibilidad de reducir las trabas administrativas que pueden alargar innecesariamente su duración y generan una sobrecarga emocional y académica para los estudiantes.\nProponemos, por ejemplo, excepciones de correlativas automáticas cuando se trate de las ultimas 2 o 3 materias que nos restan por cursar, cuando no afectan la calidad de nuestra formación."
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
                        <p className="mt-3 text-xl ">{p}</p>
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

                    {/* <div className="grid grid-cols-1 lg:grid-cols-2  "> */}
                        <div className="flex lg:pr-6" >
                            <p className="mt-4 text-xl text-white">
                                Creemos que la <span className="font-bold text-primary">Argentina necesita más y mejores ingenieros e ingenieras y que la FIUBA debe ser el motor de transformación del país</span>, aportando más ciencia y técnica cada día.
                            </p>

                        </div>
                        <div className="flex">
                            <p className="mt-4 text-xl text-white">
                                También somos concientes de que <span className="font-bold text-primary" >no siempre hemos logramos estar a la altura de las circunstacias.</span>
                            </p>
                        </div>
                    {/* </div> */}
                    <p className="mt-4 lg:mt-6 text-2xl text-white">
                        Elegimos como lema <span className="font-bold text-primary">"La voluntad de hacerlo nosotros"</span>, porque nos recuerda que <span className="font-bold text-primary">para mejorar nuestra FIUBA, hay que estar dispuestos a ser parte de la transformación todos los dias</span>, especialmente aquellos días donde las cosas parecen no mejorar.
                    </p>
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
