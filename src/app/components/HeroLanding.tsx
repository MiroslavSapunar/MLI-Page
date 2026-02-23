'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function HeroLanding() {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Main Title */}
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                                <span className={`block font-extralight transition-colors duration-500 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>Movimiento</span>
                                <span className={`block font-extralight transition-colors duration-500 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>Linealmente</span>
                                <span className="block text-secundary font-bold">Independiente</span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className={`mt-8 text-xl md:text-2xl font-light max-w-2xl leading-relaxed transition-colors duration-500 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                                Consejeros estudiantiles y presidencia del CEI desde 2015. <span className="text-secundary font-medium">Con el respaldo de los estudiantes, seguimos transformando FIUBA.</span>
                            </p>
                        </div>

                        {/* Stats */}
                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">20+ años</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Impulsando nuestra</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>voz estudiantil</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">Somos 50+</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Estudiantes</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Graduados</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Docentes</div>
                                </div>
                                <div className="text-center col-span-2 md:col-span-1">
                                    <div className="text-3xl md:text-4xl font-bold text-secundary">HOY</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Construyendo</div>
                                    <div className={`text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>El Futuro</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="mt-16 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/elecciones-2024#propuestas"
                                    className={`group inline-flex items-center px-8 py-4 bg-secundary font-semibold text-lg rounded-none transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                        isDark
                                            ? 'text-primary hover:bg-white'
                                            : 'text-white hover:bg-primary'
                                    }`}
                                >
                                    Conocé nuestras propuestas
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/elecciones-2024#logros"
                                    className={`group inline-flex items-center px-8 py-4 border-2 font-semibold text-lg rounded-none transition-all duration-300 hover:scale-105 ${
                                        isDark
                                            ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                                            : 'border-gray-900/30 text-gray-900 hover:border-gray-900 hover:bg-gray-900/10'
                                    }`}
                                >
                                    Ver nuestros logros
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
