
'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import portada from '../../../public/Portada.png'

export default function Landing() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background with parallax effect */}
            <div className="absolute inset-0">
                <Image
                    src={portada}
                    alt="FIUBA Campus"
                    quality={90}
                    fill
                    priority
                    className="object-cover object-center scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Main Title */}
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                                <span className="block text-white/90 font-extralight">Movimiento</span>
                                <span className="block text-white/90 font-extralight">Linealmente</span>
                                <span className="block text-secundary font-bold">Independiente</span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="mt-8 text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
                                Transformando FIUBA desde 2004. Estudiantes que no esperan soluciones del cielo.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">20</div>
                                    <div className="text-sm md:text-base text-white/70 uppercase tracking-wide">Años</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">15+</div>
                                    <div className="text-sm md:text-base text-white/70 uppercase tracking-wide">Logros</div>
                                </div>
                                <div className="text-center col-span-2 md:col-span-1">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">∞</div>
                                    <div className="text-sm md:text-base text-white/70 uppercase tracking-wide">Impacto</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="mt-16 flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="/elecciones-2024"
                                    className="group inline-flex items-center px-8 py-4 bg-secundary text-primary font-semibold text-lg rounded-none transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
                                >
                                    Conocé nuestras propuestas
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link 
                                    href="/elecciones-2024#logros"
                                    className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-none transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
                                >
                                    Ver nuestros logros
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
