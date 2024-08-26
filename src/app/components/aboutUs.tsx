import Image from "next/image";

interface Data {
    source: string,
    position: string,
    name: string,
    career: string,
}

function InfoCard(data: Data) {
    return (
        <>
            <div id="candidatos"
                className="block rounded-lg  border-secundary border-2 p-4 transition hover:bg-white/5"
            >
                <div className="flex items-stretch gap-4">
                    <div className="relative w-0 md:min-w-40 md:h-40 rounded-lg">

                        <Image
                            src={data.source}
                            alt={data.name}
                            fill
                            className='object-cover object-center'
                        />
                    </div>

                    <div>
                        <h2 className=" text-lg/tight sm:text-2xl/tight font-semibold ">{data.position}</h2>
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
                className="block rounded-md border border-white p2 p-4 transition hover:bg-white/5"
            >
                <div className="flex-col md:flex-row items-stretch gap-2">
                    <div className="relative w-0 md:min-w-20 md:h-20 rounded-lg ">
                        <Image
                            src={data.source}
                            alt={data.name}
                            fill
                            className=' object-cover object-center'
                        />
                    </div>

                    <div className="pt-1">
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
            source: "/Flor_CEI.png",
            position: "Presidenta",
            name: "Florencia Noguera",
            career: "Ing. Informática",
        },
        {
            source: "/Inti_CEI.png",
            position: "Vice Presidente",
            name: "Inti Blanco",
            career: "Ing. Informática",
        }

    ]
    const dataConsejo: Data[] = [
        {
            source: "/Zele.png",
            position: "1º Titular",
            name: "Selene Martinez",
            career: "Ing. Electrónica",
        },
        {
            source: "/Yoaco.png",
            position: "1º Suplente",
            name: "Joaquin Álvarez",
            career: "Ing. Civil",
        },
        {
            source: "/Inti.png",
            position: "2º Titular",
            name: "Inti Blanco",
            career: "Ing. informática",
        },
        {
            source: "/Flor.png",
            position: "2º Suplente",
            name: "Flor Noguera",
            career: "Ing. Informática",
        },
        {
            source: "/Rro.png",
            position: "3º Titular",
            name: "Romina Giménez",
            career: "Lic. en Sistemas",
        },
        {
            source: "/Miro.png",
            position: "3º Suplente",
            name: "Miroslav Sapunar",
            career: "Ing. Informática",
        },
        {
            source: "/Yaco.png",
            position: "4º Titular",
            name: "Yaco Santamarina",
            career: "Ing. Informática",
        },
        {
            source: "/Rochi.png",
            position: "4º Suplente",
            name: "Rocio Rodríguez",
            career: "Ing. en Petroléo",
        }

    ]

    return (
        <section id="candidatos" className="bg-primary text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-secundary sm:text-4xl">Nuestros Candidatos</h2>

                    <h3 className="text-2xl mt-5 text-gray-300">
                        Centro de Estudiantes
                    </h3>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        dataCEI && dataCEI.map(e =>
                            <InfoCard key={e.name} source={e.source} position={e.position} name={e.name} career={e.career} />)
                    }
                </div>
                <div className="max-w-xl">
                    <h3 className="text-2xl mt-5 text-gray-300">
                        Claustro Estudiantil en el Consejo Directivo
                    </h3>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {
                        dataConsejo && dataConsejo.map(e =>
                            <InfoCardSmall key={e.name} source={e.source} position={e.position} name={e.name} career={e.career} />)
                    }
                </div>

            </div>
        </section>
    )
}
