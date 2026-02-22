'use client'
import { useState, useEffect } from "react";

interface Data {
    source?: string,
    title: string,
    short: string,
    long: string
}

let dataArchivements: Data[] = [];

function CardFAQ({ dataCard }: { dataCard: Data }) {
    const [toggle, setToggle] = useState(false);
    return (

        <div className="p-8 rounded-lg bg-gray-dark">
            <button className="flex items-center justify-between w-full"
                onClick={(e) => setToggle(!toggle)}
            >
                <h1 className="font-bold mt-0.5 text-2xl text-secundary text-left">{dataCard.title}</h1>

                <span className="text-secundary  rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </span>
            </button>

            {toggle &&
                dataCard.long.split("\n").map(p =>
                    <p className="mt-6 text-xl font-medium text-white">{p}</p>
                )
            }
        </div>
    )
}

function MobileGrid() {

    const text = ["¿Cuánto más se pude lograr 🤔?", "Sip, parece mentira \npero aún no viste todo 😜", "🎉 Ahora si ya repasate todos nuestros logros 🎉"]

    const [data, setData] = useState(dataArchivements.slice(0, 4))
    const [label, setLabel] = useState("¿Te parecen pocos?\nTenemos más para mostrarte 😏");
    const [n, setN] = useState(4);
    const [idx, setIdx] = useState(0);

    let update = () => {
        if (data.length < 12) {
            setData([...data, ...dataArchivements.slice(n, n + 4)])
            setN(n + 4);
            setLabel(text[idx]);
            setIdx(idx + 1);
        } else if (data.length == 12) {
            setData([...data, ...dataArchivements.slice(n)])
            setLabel(text[idx]);
            setIdx(idx + 1)
        }
    }

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-8 text-justify">
                {
                    data.map(e => <CardFAQ key={e.title} dataCard={e} />)
                }
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={update}
                    className="px-6 py-2 font-bold max:w-3/4 my-4 mx-auto text-primary bg-secundary text-2xl rounded-lg ">
                    {label}
                </button>
            </div>
        </>

    )
}

function DesktopkGrid() {

    function Card(data: Data) {
        const [more, setMore] = useState(false);
        return (
            <div
                className="block rounded-xl text-secundary border border-secundary p-8 shadow-xl transition hover:border-white "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-2 sm:pt-3 lg:pt-4 bg-primary/25">
                    <div className="p-2 sm:p-2">
                        <h3 className="mt-0.5 text-2xl text-secundary text-left ">{data.title}</h3>

                        {!more && data.short.split("\n").map((p, idx) =>
                            <p key={idx} className="mt-2 block text-md/relaxed text-white/95  ">
                                {p}
                            </p>)}

                        {more && data.long.split("\n").map((p, idx) =>

                            <p key={idx} className="mt-2 block text-md/relaxed text-white/95  ">
                                {p}
                            </p>
                        )
                        }
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            className="inline-block rounded bg-secundary px-12 p-1 mt-1 mb-2 text-sm font-medium text-white transition hover:bg-primary hover:text-secundary "
                            onClick={() => setMore(!more)}
                        >
                            + Info
                        </button>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 text-justify">
                {dataArchivements.map(e =>
                    <Card key={e.title} source={e.source} title={e.title} short={e.short} long={e.long} />)}
            </div>
        </>
    )
}

export default function Achievements({ isMobile }: { isMobile: boolean }) {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            if (dataArchivements.length === 0) {
                try {
                    const data = await import('../../data/achievements.json');
                    dataArchivements = data.default;
                    setIsDataLoaded(true);
                } catch (error) {
                    console.error('Error loading achievements data:', error);
                }
            } else {
                setIsDataLoaded(true);
            }
        };
        loadData();
    }, []);

    if (!isDataLoaded) {
        return (
            <section id="logros" className="bg-primary">
                <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center text-white text-xl">Cargando logros...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="logros" className="bg-primary">
            <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-secundary sm:text-4xl">Nuestros logros 2022-2024</h2>

                <div className="mt-6 space-y-4">
                    <p className="text-xl text-white">
                        <span className="text-secundary font-semibold">15+ cambios concretos</span> que transformaron tu experiencia en FIUBA.
                    </p>
                    <p className="text-lg text-white/80">
                        Desde nuevos planes de estudio hasta becas de ayuda económica. <span className="text-secundary">Resultados reales, no promesas.</span>
                    </p>
                </div>
                {
                    !isMobile &&
                    <DesktopkGrid />

                }
                {
                    isMobile &&
                    <MobileGrid />
                }
            </div>
        </section >
    )
}
