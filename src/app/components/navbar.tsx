'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import mli from "../../../public/MLI.svg";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    const [homeHref, setHomeHref] = useState('/');

    useEffect(() => {
        const hostname = window.location.hostname;
        const cleanHost = hostname.replace(/^www\./, '');
        const parts = cleanHost.split('.');
        if (parts.length > 2) {
            const mainDomain = parts.slice(1).join('.');
            setHomeHref(`https://${mainDomain}`);
        }
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 dark:bg-primary/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <Link href={homeHref} className="flex items-center gap-2 group">
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <Image
                        className="theme-invert"
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
                        className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                        <Image
                            className="theme-invert"
                            src="/instagram.svg"
                            height={20}
                            width={20}
                            alt="Instagram"
                        />
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
