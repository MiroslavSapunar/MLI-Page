'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import mli from "../../../public/MLI.svg";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const [homeHref, setHomeHref] = useState('/');

    useEffect(() => {
        const hostname = window.location.hostname;
        // Strip www. prefix, then check for subdomain
        const cleanHost = hostname.replace(/^www\./, '');
        const parts = cleanHost.split('.');
        // If on a subdomain (e.g. padron2026.mli-fiuba.ar), link to the main domain
        if (parts.length > 2) {
            const mainDomain = parts.slice(1).join('.');
            setHomeHref(`https://${mainDomain}`);
        }
    }, []);

    return (
        // <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        //     isDark
        //         ? 'bg-primary/90 backdrop-blur-md border-b border-white/10'
        //         : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
        // }`}>
        //     <div className="max-w-5xl mx-auto flex flex-wrap px-5 py-2 md:py-3 flex-col md:flex-row">
        //         <div className="flex flex-row items-center justify-between p-3 md:p-1">
        //             <Link
        //                 href="/"
        //                 className="flex text-3xl font-medium mb-4 md:mb-0"
        //             >
        //                 <Image
        //                     className={isDark ? '' : 'invert'}
        //                     priority
        //                     src={mli}
        //                     height={48}
        //                     width={48}
        //                     alt="MLI - FIUBA"
        //                 />
        //             </Link>

        //             {/* Mobile: Theme toggle and menu */}
        //             <div className="flex items-center gap-2 md:hidden">
        //                 <button
        //                     onClick={toggleTheme}
        //                     className={`p-2 rounded-full transition-colors ${
        //                         isDark
        //                             ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
        //                             : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
        //                     }`}
        //                     aria-label="Toggle theme"
        //                 >
        //                     {isDark ? (
        //                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                             <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        //                         </svg>
        //                     ) : (
        //                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        //                         </svg>
        //                     )}
        //                 </button>

        //                 <button
        //                     className={`pb-0 cursor-pointer leading-none px-3 py-1 outline-none focus:outline-none ${
        //                         isDark ? 'text-white' : 'text-gray-900'
        //                     }`}
        //                     type="button"
        //                     aria-label="Toggle menu"
        //                     onClick={() => setNavbarOpen(!navbarOpen)}
        //                 >
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <line x1="3" y1="12" x2="21" y2="12"></line>
        //                         <line x1="3" y1="6" x2="21" y2="6"></line>
        //                         <line x1="3" y1="18" x2="21" y2="18"></line>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>

        //         <div className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
        //             <div className="md:m-auto flex flex-col md:flex-row items-center md:text-base text-xl md:justify-evenly justify-items-start">
        //             </div>

        //             {/* Desktop: Theme toggle and Instagram */}
        //             <div className="hidden md:flex items-center gap-3">
        //                 <button
        //                     onClick={toggleTheme}
        //                     className={`p-2 rounded-full transition-colors ${
        //                         isDark
        //                             ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
        //                             : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
        //                     }`}
        //                     aria-label="Toggle theme"
        //                 >
        //                     {isDark ? (
        //                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                             <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        //                         </svg>
        //                     ) : (
        //                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        //                         </svg>
        //                     )}
        //                 </button>

        //                 <a
        //                     href="https://www.instagram.com/mli.fiuba"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className={`p-2 rounded-full transition-colors ${
        //                         isDark
        //                             ? 'hover:bg-white/10'
        //                             : 'hover:bg-gray-100'
        //                     }`}
        //                 >
        //                     <Image
        //                         className={isDark ? '' : 'invert'}
        //                         priority
        //                         src="/instagram.svg"
        //                         height={24}
        //                         width={24}
        //                         alt="Instagram"
        //                     />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark
            ? 'bg-primary/90 backdrop-blur-md border-b border-white/10'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <Link href={homeHref} className="flex items-center gap-2 group">
                    <svg className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isDark ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <Image
                        className={isDark ? 'invert' : ''}
                        src={mli}
                        height={32}
                        width={32}
                        alt="MLI - Volver al inicio"
                    />
                </Link>

                <div className="flex items-center gap-2">
                    <a
                        href="https://www.instagram.com/mli.fiuba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                    >
                        <Image
                            className={isDark ? 'invert' : ''}
                            src="/instagram.svg"
                            height={20}
                            width={20}
                            alt="Instagram"
                        />
                    </a>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
