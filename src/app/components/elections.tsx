'use client'
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Data {
    title: string,
    text: string,
    textLink?: string,
    link?: string
}

function Countdown({ isDark }: { isDark: boolean }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const countDownDate = new Date("Sept 4, 2024 09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                clearInterval(interval);
                return;
            }

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className={`text-4xl font-bold text-wrap transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ¡Elecciones del Claustro de Estudiantes!
            </div>

            <div className="flex mt-2 items-end justify-left text-secundary">
                <div className="mr-3 sm:mr-4">
                    <span className="float-right font-bold text-3xl sm:text-5xl">{days > 9 ? days : '0' + days}</span>
                    <p className="text-right">Días</p>
                </div>
                <div className="mr-3 sm:mr-4">
                    <span className="float-right font-bold text-3xl sm:text-5xl">{hours > 9 ? hours : '0' + hours}</span>
                    <p className="text-right">Horas</p>
                </div>
                <div className="mr-3 sm:mr-4">
                    <span className="float-right font-bold text-3xl sm:text-5xl">{minutes > 9 ? minutes : '0' + minutes}</span>
                    <p className="text-right">Minutos</p>
                </div>
                <div className="mr-3 sm:mr-4">
                    <span className="float-right font-bold text-3xl sm:text-5xl">{seconds > 9 ? seconds : '0' + seconds}</span>
                    <p className="text-right">Segundos</p>
                </div>
            </div>
        </div>
    )
}

function InfoCard({ title, text, textLink, link, isDark }: Data & { isDark: boolean }) {
    return (
        <div className="mt-4">
            <h1 className="text-2xl font-semibold text-secundary">{title}</h1>
            <p className={`py-2 md:py-1 text-xl transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {text}
            </p>
            {textLink && (
                <a
                    className="text-secundary text-2xl md:text-xl font-bold hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {textLink}
                </a>
            )}
        </div>
    )
}

function Info({ isDark }: { isDark: boolean }) {
    const infoData: Data[] = [
        { title: "¿Qué ocurre?", text: "Este Miércoles 04 de Septiembre se eligen a los representantes estudiantiles en el Consejo Directivo" },
        { title: "¿Quiénes votan?", text: "Todo estudiante regular de FIUBA que figure en el padrón de elecciones. La votación es de cáracter obligatoria", textLink: "Fijaté acá", link: "https://fi.uba.ar/noticias/renovacion-del-claustro-de-estudiantes" },
        { title: "¿Dónde y Cómo?", text: "Se votara de 9:00 hs a 20:00, UNICAMENTE en la sede de Av Paseo Colón 850. No habrá actividades academicas/administrativas en las otras sedes" }
    ]

    return (
        <div className="grid grid-cols-1 md:ml-2">
            {infoData.map(e =>
                <InfoCard
                    key={e.title}
                    title={e.title}
                    text={e.text}
                    textLink={e.textLink}
                    link={e.link}
                    isDark={isDark}
                />
            )}
        </div>
    )
}

export default function Elections() {
    const { isDark } = useTheme();

    return (
        <div className={`relative w-full transition-colors duration-500 ${isDark ? 'bg-primary' : 'bg-white border-t border-gray-200'}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mx-auto max-w-screen-xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
                <Countdown isDark={isDark} />
                <Info isDark={isDark} />
            </div>
        </div>
    )
}
