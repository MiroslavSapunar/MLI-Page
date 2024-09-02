'use client'

import { useState } from "react";

interface Data {
    title: string,
    text: string,
    textLink?: string,
    link?: string
}

function Countdown() {
    const [ended, setEnded] = useState(false)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    var countDownDate = new Date("Sept 4, 2024 09:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
        var tempDays;
        var tempHours;
        var tempMinutes;
        var tempSeconds;

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        tempDays = (Math.floor(distance / (1000 * 60 * 60 * 24)));
        tempHours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        tempMinutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        tempSeconds = (Math.floor((distance % (1000 * 60)) / 1000));

        if (days !== tempDays) {
            setDays(tempDays);
        }
        if (hours !== tempHours) {
            setHours(tempHours);
        }
        if (minutes !== tempMinutes) {
            setMinutes(tempMinutes);
        }
        if (seconds !== tempSeconds) {
            setSeconds(tempSeconds);
        }

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            setEnded(true);
        }
    }, 1000);

    return (
        <>
            {
                !ended &&
                <div>
                    <div className="text-4xl text-white font-roboto font-bold text-wrap ">
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
            }
        </>
    )
}

function InfoCard({ title, text, textLink, link }: Data) {
    return (
        <>
            <div className="mt-4">
                <h1 className="text-2xl font-semibold text-secundary">{title}</h1>

                <p className="py-2 md:py-1 text-white text-xl">
                    {text}
                </p>
                {
                    textLink &&
                    <a className="text-secundary text-2xl md:text-xl font-bold" href={link} >{textLink}</a>
                }
            </div>
        </>
    )
}

function Info() {
    const infoData: Data[] = [
        { title: "¿Qué ocurre?", text: "Este Miércoles 04 de Septiembre se eligen a los representantes estudiantiles en el Consejo Directivo" },
        { title: "¿Quiénes votan?", text: "Todo estudiante regular de FIUBA que figure en el padrón de elecciones. La votación es de cáracter obligatoria", textLink: "Fijaté acá", link: "https://fi.uba.ar/noticias/renovacion-del-claustro-de-estudiantes" },
        { title: "¿Dónde y Cómo?", text: "Se votara de 9:00 hs a 20:00, UNICAMENTE en la sede de Av Paseo Colón 850. No habrá actividades academicas/administrativas en las otras sedes" }
    ]

    return (
        <div className="grid grid-cols-1 md:ml-2">
            {
                infoData.map(e => <InfoCard title={e.title} text={e.text} textLink={e.textLink} link={e.link} />)
            }
        </div>
    )
}

export default function Elections() {
    return (
        <div className="relative w-full bg-primary border-primary">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grip-4 items-center justify-center text-white mx-auto max-w-screen-xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
                <Countdown />
                <Info />
            </div>
        </div>
    )
}
