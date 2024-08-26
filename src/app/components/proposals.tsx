interface Data {
    title: string,
    text: string,
}

const dataProposals: Data[] = [
    {
        title: "Modernización de los servicios del CEI",
        text: "Sabemos que los servicios del CEI pueden y deben ser mejores. Lamentablemente el esquema informal han demostrado ser el techo calidad al que se puede aspirar.\nTenemos como objetivo empezar el proceso para que los servicios del CEI tengan una entidad jurídica y salir de una vez de la informalidad, permitiendo por ejemplo incorporar otros medios de pago, como el tan pedido MP\nÉste proceso ya arrancó con el nuevo estatuto del CEI que redactamos, sometimos a votación entre todas las agrupaciones de la facultad y que ya aprobado; Que permite por ejemplo la conformacion de una Sociedad Civil sin fines de lucro."
    },
    {
        title: "Nuevo régimen de cursada ",
        text: "Al implementar los nuevos planes, surgió una nueva necesidad. Darles una nueva estructura a la materias, que incluyen la aprobación y la forma de llevar a cabo las cursadas.\n La gran mayoría de las materias tienen sus propias reglas. Algunas se basan en trabajos prácticos, otros en solamente parciales. Es por esto que queremos clasificar las materias según su enfoque y metodología, haciendo que, podamos crear reglas claras y concisas para la cursada de las mismas.\nEsto significa que se podrá regular, la cantidad de trabajos prácticos, los parciales, la cantidad mínima de asistencia, la necesidad de finales -poder promocionar una materia por ejemplo-, y otros aspectos de las materias según su clasificación."
    },
    {
        title: "No más cuellos de botella en materias con curso único",
        text: "Queremos que existan cursos alternativos asincrónicos virtuales para aquellas materias que tengan poca oferta horaria y que se compartan entre carreras.\nSi la facultad no puede ofrecer más cursos, entonces debe poder evitar que se conviertan en una traba."
    },
    {
        title: "Unificación de criterios y trámites para condicionales y cambios de curso",
        text: "Otra de nuestras propuestas es que las asignaciones de condicionales y los formularios de cambios de curso sean iguales en todos los Departamentos y estén centralizados y accesibles de forma clara y de antemano, para no perder tiempo valioso teniendo que adivinar la forma y el lugar para realizar estos trámites y poder arrancar en el momento que corresponde a cursar."
    },
    {
        title: "Más espacios de distensión",
        text: "Todos sabemos lo que es cursar entre 6 y 8 horas durante 4 o 5 dias a la semana. Sin embargo la facultad carece de lugares donde poder descansar, relajar y socializar entre cursadas -incluso podemos decir que carece de algo tan basico como luz natural-. Necesitamos hacer de nuestras sedes lugares más amenos y habitables para todos."
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
                <div className="max-w-3xl ">
                    <h2 className="text-3xl font-bold sm:text-4xl">Nuestras Propuestas</h2>

                    <p className="mt-4 text-xl md:text-lg text-white">
                        Creemos que la <span className="font-bold text-primary">Argentina necesita más y mejores ingenieros e ingenieras y que la FIUBA debe ser el motor de transformación del país</span>, aportando más ciencia y técnica cada día. En todos estos años nuestro objetivo siempre ha sido lograr la mejor versión de nuestra Facultad.
                    </p>
                    <p className="mt-4 text-xl md:text-lg text-white">
                        También somos concientes de que <span className="font-bold text-primary" >no siempre hemos logramos estar a la altura de las circunstacias. A veces las cosas no se pueden mejorar de un día para el otro</span> y requieren de más tiempo y dedicacion del que disponemos cuando no estamos cursando.
                    </p>
                    <p className="mt-4 text-xl md:text-lg text-white">
                        Por esto nuestro motto, <span className="font-bold text-primary">"La voluntad de hacerlo nosotros"</span>, nos recuerda a que no alcanza solo con desear/exigir/proponer. Para transformar nuestra FIUBA en la Facultad que todos queremos hay que estar dispuestos a ser parte de la transformación.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                    {
                        dataProposals.map((e, idx) => <Card key={idx} data={e} />)
                    }
                </div>
            </div>
        </section>
    )
}
