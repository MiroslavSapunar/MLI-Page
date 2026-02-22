'use client'
import { useState, useEffect } from 'react';

const electionData = [
    { name: 'MLI', votes: 2786, percentage: 35.03, colorVar: 'var(--color-election-mli)' },
    { name: 'Somos Libres', votes: 1467, percentage: 18.44, colorVar: 'var(--color-election-libres)' },
    { name: 'Espacio Estudiantil', votes: 1446, percentage: 16.92, colorVar: 'var(--color-election-estudiantil)' },
    { name: 'El Gradiente', votes: 1312, percentage: 16.49, colorVar: 'var(--color-election-gradiente)' },
    { name: 'Proyecto Ingeniería', votes: 609, percentage: 7.66, colorVar: 'var(--color-election-proyecto)' }
];

function PieChart({ data }: { data: typeof electionData }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const size = 300;
    const strokeWidth = 40;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    let cumulativePercentage = 0;

    return (
        <div className="relative">
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={strokeWidth}
                />
                
                {/* Data segments */}
                {data.map((item, index) => {
                    const offset = circumference - (cumulativePercentage / 100) * circumference;
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                    
                    const segment = (
                        <circle
                            key={index}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke={item.colorVar}
                            strokeWidth={strokeWidth}
                            strokeDasharray={isVisible ? strokeDasharray : '0 ' + circumference}
                            strokeDashoffset={offset}
                            className="transition-all duration-1000 ease-out"
                            style={{ transitionDelay: `${index * 200}ms` }}
                            strokeLinecap="round"
                        />
                    );
                    
                    cumulativePercentage += item.percentage;
                    return segment;
                })}
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-2xl font-bold">8,037</div>
                <div className="text-sm opacity-80">votos totales</div>
            </div>
        </div>
    );
}

export default function ElectionResults() {
    const [isVisible, setIsVisible] = useState(false);

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
        <section id="election-results" className="relative min-h-screen bg-primary/95 backdrop-blur-sm">
            <div className="container mx-auto px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="text-5xl md:text-6xl font-light text-white/90 mb-6">
                        Resultados <span className="text-secundary font-bold">2024</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Los estudiantes hablaron: <span className="text-secundary font-semibold">MLI sigue siendo la fuerza líder</span> en la representación estudiantil de FIUBA
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Pie Chart */}
                    <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <PieChart data={electionData} />
                    </div>

                    {/* Results List */}
                    <div className="space-y-6">
                        {electionData.map((item, index) => (
                            <div 
                                key={index}
                                className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${500 + index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div 
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: item.colorVar }}
                                        />
                                        <div>
                                            <h3 className={`font-semibold text-lg ${item.name === 'MLI' ? 'text-secundary' : 'text-white'}`}>
                                                {item.name === 'MLI' ? 'MLI - Movimiento Linealmente Independiente' : item.name}
                                            </h3>
                                            <p className="text-white/70 text-sm">
                                                {item.votes.toLocaleString()} votos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold ${item.name === 'MLI' ? 'text-secundary' : 'text-white'}`}>
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
                        <p className="text-xl text-white/90 leading-relaxed">
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