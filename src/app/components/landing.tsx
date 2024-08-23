
export default function Landing() {
    return (
        <>
            {/*
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  */}

            <section
                className='relative bg-[url(/Portada.png)] bg-cover bg-center bg-no-repeat'
            >
                <div
                    className="
                        absolute
                        inset-0 
                        bg-gray-900/85 
                        md:bg-gray-900/25
                        from-gray-900/85 to-gray-900/25
                        bg-gradient-to-r"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Movimiento

                            <strong className="block font-extrabold text-rose-500"> Linealmente. </strong>
                            <strong className="block font-extrabold text-rose-500"> Independiente. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Somos la Presidencia de Centro de Estudiantes de Ingeniería de la UBA y Consejeros por el claustro de Estudiantiles. 
                        </p>
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Desde 2004 construyendo la Ingeniería de la UBA y la Argentina.
                        </p>

                        {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
