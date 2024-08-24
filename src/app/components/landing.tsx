
import Image from "next/image";

export default function Landing() {
    return (
        <>
            <section
                className='relative bg-[url(/Portada.png)] bg-cover bg-center bg-no-repeat'
            >
                <div
                    className="
                        absolute
                        inset-0 
                        bg-primary/55 
                        md:bg-primary/25
                        from-primary/75 to-primary/25
                        bg-gradient-to-r"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left">
                        <h1 className="text-3xl font-extrabold  sm:text-5xl">
                            <strong className="block font-extrabold text-white"> Movimiento </strong>
                            <strong className="block font-extrabold text-white"> Linealmente </strong>
                            <strong className="block font-extrabold text-secundary"> Independiente </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-roboto ">
                            En 2004, un grupo de fiubenses, hartos de los problemas recurrentes en sus cursadas decidieron no esperar más a que las soluciones cayerán del cielo.
                        </p>
                        {/* <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-roboto ">
                            Siempre con un vision centrada en FIUBA, cada paso que dimos nos permitio <span className="font-bold text-secundary">
                            construir una mejor FIUBA y la Ingeniería del futuro
                            </span>en la Argentina.
                        </p> */}
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-roboto">
                            Hoy como <span className="font-bold text-secundary"> estudiantes, docentes y graduados</span>, seguimos tranformando nuestra Facultad y carreras, para que cada día se egresen más ingenieros en la Argentina.

                        </p>
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-roboto">
                            Llevamos con orgullo la responsabilidad de ser la voz estudiantil como<span className="font-bold text-secundary"> Presidencia del CEI</span> y <span className="font-bold text-secundary">Consejeros Estudiantiles
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
