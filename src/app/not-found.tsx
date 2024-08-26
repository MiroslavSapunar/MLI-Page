import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="bg-primary ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <h1 className="mt-3 text-2xl font-semibold text-secundary md:text-3xl text-left">NADA POR ACÁ</h1>
                    <p className="mt-4 text-white text-left">Debes continuar tu camino, viajero...</p>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link 
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-secundary transition-colors duration-200 bg-primary border border-secundary rounded-lg gap-x-2 sm:w-auto  hover:bg-secundary hover:text-primary "
                            href={"/"}
                            >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Volver al inicio</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
