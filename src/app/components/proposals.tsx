interface Data {
    title: string,
    text: string,
}

const dataProposals: Data[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Sabemos que los servicios del CEI pueden y deben ser mejores. Lamentablemente el esquema informal actual han demostrado ser el techo de calidad al que se puede aspirar.\nPara corregir la informalidad el primer paso el conseguir que el CEI tenga personería jurídica -que supo tener hace más de 10 años, pero pérdio producto de malos manejos de la entonces presidencia del CEI y juicios laborales asociados-. Esto permitirá que los servicios del CEI funcionen como cualquier négocio en blanco, y por ejemplo, poder incorporar otros medios de pago, como el tan pedido MP\nÉste proceso ya arrancó con el nuevo estatuto del CEI que redactamos, sometimos a votación entre todas las agrupaciones de la facultad, que ya fue aprobado y debe ser refrendado por todos los estudiantes estas elecciones."
    },
    {
        title: "Nuevo régimen de cursada ",
        text: "Al implementar los nuevos planes, surgió una nueva necesidad: darle una nueva estructura a las materias, que incluyen la reglamentación de la aprobación y la forma de llevar a cabo las cursadas.\n Hoy la mayoría de las materias tienen sus propias reglas. Algunas se basan en trabajos prácticos, otros en solamente parciales. Es por esto que queremos clasificar las materias según su enfoque y metodología, con reglas claras de cursada para las mismas.\nEsto significa que se podrá regular por ejemplo, la cantidad de trabajos prácticos y la obligatoriedad de los mismos, la cantidad de parciales, la cantidad mínima de asistencia, la necesidad de finales o poder promocionar una materia, por ejemplo."
    },
    {
        title: "Unificación de criterios y trámites para condicionales y cambios de curso",
        text: "Proponemos que las asignaciones de condicionales y los formularios de cambios de curso al inicio de todos los cuatris sean iguales en todos los Departamentos y estén centralizados y accesibles de forma clara y de antemano, para no perder tiempo valioso las primeras semanas yendo y viniendo entre deptos."
    },
    {
        title: "No más cuellos de botella en materias con curso único",
        text: "Queremos que existan cursos alternativos asincrónicos virtuales para aquellas materias que tengan poca oferta horaria y que se compartan entre carreras.\nSi la facultad no puede ofrecer más cursos por restriccion real de recursos, entonces debe buscar la forma de evitar que se conviertan en una traba."
    },
    {
        title: "Más espacios de distensión",
        text: "Todos sabemos lo que es cursar entre 6 y 8 horas durante 4 o 5 dias a la semana. Sin embargo la facultad ofrece pocos lugares donde poder descansar, relajarse y pasar un rato con amigos entre cursadas -incluso podemos decir que carece de álgo tan básico como luz natural-.\nNecesitamos hacer de nuestras sedes lugares más amenos y habitables para todos, por eso reacondicionaremos algunos espacios del CEI que no tan usados y trabajaremos con la facultad para que sea un tema en agenda junto a la situacion edilicia en general de nuestra sedes."
    },
]

function Card({ data }: { data: Data }) {
    return (
        <div className="flex items-start gap-4">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2  ">
                        <div className="flex lg:pr-6" >
                            <p className="mt-4 text-xl md:text-lg text-white">
                                Creemos que la <span className="font-bold text-primary">Argentina necesita más y mejores ingenieros e ingenieras y que la FIUBA debe ser el motor de transformación del país</span>, aportando más ciencia y técnica cada día.
                            </p>

                        </div>
                        <div className="flex">
                            <p className="mt-4 text-xl md:text-lg text-white">
                                También somos concientes de que <span className="font-bold text-primary" >no siempre hemos logramos estar a la altura de las circunstacias.</span>
                            </p>
                        </div>
                    </div>
                    <p className="lg:w-2/3 mt-4 lg:mt-6 text-xl md:text-lg text-white rounded-lg border-white">
                        Elegimos como lema <span className="font-bold text-primary">"La voluntad de hacerlo nosotros"</span>, porque nos recuerda que <span className="font-bold text-primary">para mejorar nuestra FIUBA, hay que estar dispuestos a ser parte de la transformación todos los dias, especialmente aquellos días donde las cosas parecen no mejorar.</span>
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
