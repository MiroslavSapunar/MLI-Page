interface Data {
    source: string,
    position: string,
    name: string,
    career: string,
}

function InfoCard(data: Data) {
    return (
        <>
            <div
                className="block rounded-lg  border-secundary border-2 p-8 transition hover:bg-white/5"
            >
                <div className="flex items-stretch gap-4">
                    <img
                        src={data.source}
                        alt=""
                        className='aspect-square w-40 rounded-lg object-cover'
                    />

                    <div>
                        <h2 className=" text-2xl/tight font-semibold ">{data.position}</h2>
                        <h3 className="mt-0.5 text-lg/tight font-medium">{data.name}</h3>
                        <h4 className="mt-1 text-secundary">{data.career}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
function InfoCardSmall(data: Data) {
    return (
        <>
            <div
                className="block rounded-md border border-white p-8 transition hover:bg-white/5"
            >
                <div className="flex items-stretch gap-4">
                    <img
                        src={data.source}
                        alt=""
                        className='aspect-square w-20 rounded-lg object-cover'
                    />

                    <div>
                        <h2 className=" text-lg/tight font-semibold">{data.position}</h2>
                        <h3 className="mt-0.5 text-md/tight font-medium">{data.name}</h3>
                        <h4 className="mt-1 text-md/tight text-secundary">{data.career}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}



export default function AboutUs() {

    const dataCEI: Data[] = [
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "Presidenta",
            name: "Florencia Noguera",
            career: "Ing. Electrónica",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "Vice-Presidente",
            name: "Inti Blanco",
            career: "Ing. Informática",
        }

    ]
    const dataConsejo: Data[] = [
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "1º Titular",
            name: "Florencia Noguera",
            career: "Ing. Electrónica",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "2º Titular",
            name: "Inti Blanco",
            career: "Ing. Informática",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "3º Titular",
            name: "Florencia Noguera",
            career: "Ing. Electrónica",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "4º Titular",
            name: "Inti Blanco",
            career: "Ing. Informática",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "1º Suplente",
            name: "Florencia Noguera",
            career: "Ing. Electrónica",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "2º Suplente",
            name: "Inti Blanco",
            career: "Ing. Informática",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "3º Suplente",
            name: "Florencia Noguera",
            career: "Ing. Electrónica",
        },
        {
            source: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            position: "4º Suplente",
            name: "Inti Blanco",
            career: "Ing. Informática",
        }

    ]

    return (
        <section className="bg-primary text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-secundary sm:text-4xl">Nuestros Candidatos</h2>

                    <h3 className="text-3xl mt-5 text-gray-300">
                        Centro de Estudiantes
                    </h3>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        dataCEI && dataCEI.map(e =>
                            <InfoCard key={e.name} source={e.source} position={e.position} name={e.name} career={e.career} />)
                    }
                </div>
                <div className="max-w-xl">
                    <h3 className="text-3xl mt-5 text-gray-300">
                        Claustro Estudiantil en el Consejo Directivo
                    </h3>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        dataConsejo && dataConsejo.map(e =>
                            <InfoCardSmall key={e.name} source={e.source} position={e.position} name={e.name} career={e.career} />)
                    }
                </div>

            </div>
        </section>
    )
}
