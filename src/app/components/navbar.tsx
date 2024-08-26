'use client'
import { useState } from "react";

import Image from 'next/image';
// import MLI from "../../../public/MLI.svg";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);

    return (
        <header className="fixed top-0 w-full clearNav z-50 bg-primary ">
            <div className="max-w-5xl mx-auto flex flex-wrap px-5 py-2 md:py-3 flex-col md:flex-row">
                <div className="flex flex-row items-center justify-between p-3 md:p-1">
                    <a
                        href="/#"
                        className="flex text-3xl text-white font-medium mb-4 md:mb-0"
                    > <div >
                            <Image className="dark:invert"
                                priority
                                src="/MLI.svg"
                                height={48}
                                width={48}
                                alt="MLI - FIUBA"
                            />
                        </div>
                    </a>
                    <button
                        className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
                        type="button"
                        aria-label="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <div className="md:m-auto flex flex-col md:flex-row items-center md:text-base text-xl md:justify-evenly justify-items-start">
                        <a
                            href="#logros"
                            className="mr-auto md:px-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                            Logros
                        </a>
                        <a href="#propuestas"
                            className="mx-auto py-4 md:py-1  md:px-7 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                            Propuestas
                        </a>
                        <a href="#candidatos" 
                        className="mx-auto md:px-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                            Candidatos
                        </a>
                    </div>
                    <a
                        href="https://www.instagram.com/mli.fiuba"
                        className="flex text-3xl text-white font-medium mb-4 md:mb-0 invisible md:visible"
                    > <div >
                            <Image className="dark:invert"
                                priority
                                src="/instagram.svg"
                                height={32}
                                width={32}
                                alt="MLI - FIUBA"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
