'use client'
import { useState, useEffect } from 'react';
import { useTheme } from "@/context/ThemeContext";

const electionData = [
    { name: 'MLI', votes: 2786, percentage: 35.03, colorVar: 'var(--color-election-mli)' },
    { name: 'Somos Libres', votes: 1467, percentage: 18.44, colorVar: 'var(--color-election-libres)' },
    { name: 'Espacio Estudiantil', votes: 1446, percentage: 16.92, colorVar: 'var(--color-election-estudiantil)' },
    { name: 'El Gradiente', votes: 1312, percentage: 16.49, colorVar: 'var(--color-election-gradiente)' },
    { name: 'Proyecto Ingeniería', votes: 609, percentage: 7.66, colorVar: 'var(--color-election-proyecto)' }
];

function PieChart({ data, isDark }: { data: typeof electionData; isDark: boolean }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Normalize percentages to sum to 100%
    const totalPercentage = data.reduce((sum, d) => sum + d.percentage, 0);

    // Build conic-gradient stops
    let cumulative = 0;
    const gradientStops = data.flatMap((item) => {
        const normalized = (item.percentage / totalPercentage) * 100;
        const start = cumulative;
        cumulative += normalized;
        return [
            `${item.colorVar} ${start}%`,
            `${item.colorVar} ${cumulative}%`
        ];
    }).join(', ');

    return (
        <div className="relative flex items-center justify-center">
            {/* Pie chart using conic-gradient */}
            <div
                className={`w-72 h-72 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 -rotate-180'}`}
                style={{
                    background: `conic-gradient(from -360deg, ${gradientStops})`
                }}
            >
                {/* Inner circle for donut effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-44 h-44 rounded-full transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white'}`} />
                </div>
            </div>

            {/* Center text */}
            <div className={`absolute flex flex-col items-center justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div className="text-2xl font-bold">8,037</div>
                <div className={`text-sm ${isDark ? 'opacity-80' : 'opacity-60'}`}>votos totales</div>
            </div>
        </div>
    );
}

export default function ElectionResults() {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('election-results');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="election-results" className={`relative min-h-screen backdrop-blur-sm transition-colors duration-500 ${isDark ? 'bg-primary/95' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className={`text-5xl md:text-6xl font-light mb-6 transition-colors duration-500 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                        Resultados <span className="text-secundary font-bold">2024</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                        Los estudiantes hablaron: <span className="text-secundary font-semibold">MLI sigue siendo la fuerza líder</span> en la representación estudiantil de FIUBA
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Pie Chart */}
                    <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <PieChart data={electionData} isDark={isDark} />
                    </div>

                    {/* Results List */}
                    <div className="space-y-6">
                        {electionData.map((item, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${500 + index * 100}ms` }}
                            >
                                <div className={`flex items-center justify-between p-6 backdrop-blur-sm rounded-lg transition-all duration-300 ${
                                    isDark
                                        ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                                        : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                                }`}>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: item.colorVar }}
                                        />
                                        <div>
                                            <h3 className={`font-semibold text-lg ${item.name === 'MLI' ? 'text-secundary' : isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {item.name === 'MLI' ? 'MLI - Movimiento Linealmente Independiente' : item.name}
                                            </h3>
                                            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
                                                {item.votes.toLocaleString()} votos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold ${item.name === 'MLI' ? 'text-secundary' : isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {item.percentage}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Victory Message */}
                <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="bg-secundary/10 border border-secundary/30 rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-secundary mb-4">
                            ¡Gracias por confiar en MLI!
                        </h3>
                        <p className={`text-xl leading-relaxed transition-colors duration-500 ${isDark ? 'text-white/90' : 'text-gray-700'}`}>
                            Con el <span className="font-semibold text-secundary">35.03%</span> de los votos,
                            seguimos siendo la lista más votada por los estudiantes de FIUBA.
                            Continuamos trabajando por una facultad más inclusiva y representativa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
