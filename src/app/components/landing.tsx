'use client'
import Image from "next/image";
import dynamic from 'next/dynamic';
import portada from '../../../public/Portada.png'
import HeroLanding from './HeroLanding';
import { useTheme } from "@/context/ThemeContext";

const ElectionResults = dynamic(() => import('./ElectionResults'), {
    ssr: false,
    loading: () => {
        return (
            <div className="min-h-screen bg-primary/95 flex items-center justify-center">
                <div className="text-white text-xl">Cargando resultados...</div>
            </div>
        );
    }
});

export default function Landing() {
    const { isDark } = useTheme();

    return (
        <>
            <div className="relative min-h-screen overflow-hidden p-8 md:p-8">
                {/* Background - fixed position */}
                <div className="fixed inset-0">
                    <Image
                        src={portada}
                        alt="FIUBA Campus"
                        quality={90}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    {/* Overlay - darker for dark mode, lighter for light mode */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                        isDark
                            ? 'bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30'
                            : 'bg-gradient-to-r from-white/80 via-white/50 to-white/20'
                    }`} />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                        isDark
                            ? 'bg-gradient-to-t from-primary/50 to-transparent'
                            : 'bg-gradient-to-t from-white/40 to-transparent'
                    }`} />
                </div>
                <HeroLanding />
            </div>
            <ElectionResults />
        </>
    )
}
