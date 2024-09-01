'use client'

import { useState } from "react";

export default function Elections() {
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
                <div className="relative h-screen w-full flex grid-flow-col md:grid-flow-row items-center justify-center bg-primary text-white ">
                    <div className="col-span-12 md:col-span-6">
                        {/* <div className="absolute top-0 right-0 bottom-0 left-0 "></div> */}

                        <div className="z-10 text-4xl text-white font-roboto font-bold">
                            ¡Eleciones del Claustro de Estudiantes!
                        </div>

                        <div className="flex items-end justify-left z-10 text-secundary">
                            <div className="m-2 sm:m-5">
                                <span className=" font-bold text-xl sm:text-5xl">{days}</span>
                                <p className="text-right">Días</p>
                            </div>
                            <div className="m-2 sm:m-5">
                                <span className=" font-bold text-xl sm:text-5xl">{hours}</span>
                                <p className="text-right">Horas</p>
                            </div>
                            <div className="m-2 sm:m-5">
                                <span className=" font-bold text-xl sm:text-5xl">{minutes}</span>
                                <p className="text-right">Minutos</p>
                            </div>
                            <div className="m-2 sm:m-5">
                                <span className=" font-bold text-xl sm:text-5xl">{seconds}</span>
                                <p className="text-right">Segundos</p>
                            </div>
                        </div>

                        {/* <div className="z-10 mt-5">
                        <a href="#"
                            className="w-full px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16">
                            <span>Who We Are?</span>
                        </a>
                    </div> */}
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p>anoter text</p>
                    </div>
                </div>
            }
        </>
    )
}
