'use client'
import { useState } from "react"

interface Data {
    source: string,
    title: string,
    short: string,
    long: string

}

export function Card(data: Data) {

    const [more, setMore] = useState(false);

    return (
        <div
            className="block rounded-xl border border-primary  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        >
            <article className="relative overflow-hidden rounded-xl">
                <img
                    alt=""
                    src={data.source}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 bg-primary/25">
                    <div className="p-2 sm:p-3">
                        <h3 className="mt-0.5 text-lg text-white">{data.title}</h3>

                        {!more &&
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95  ">
                                {data.short}
                            </p>}

                        {more &&
                            <p className="mt-2 block text-sm/relaxed text-white/95  ">
                                {data.long}
                            </p>}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            className="inline-block rounded bg-pink-600 px-12 p-1 mt-1 mb-2 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            onClick={() => setMore(!more)}
                        >
                            + Info
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default function Achievements() {

    const dataArchivements: Data[] = [
        {
            source: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            title: "Lorem ipsum dolor sit amet",
            short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt",
            long: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        },
        {
            source: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            title: "Lorem ipsum dolor sit amet",
            short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt",
            long: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        },
        {
            source: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            title: "Lorem ipsum dolor sit amet",
            short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt",
            long: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        },
        {
            source: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            title: "Lorem ipsum dolor sit amet",
            short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt",
            long: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        }
    ]

    return (
        <section className="bg-gray-600 ">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-2xl font-roboto">
                    <h2 className="text-3xl font-bold text-secundary sm:text-4xl">Nuestros logros como Consejeros durante 2022-2024</h2>


                    <p className="mt-4 text-gray-300">
                        Desde hace 18 años impulsamos cambios transformadores en nuestra facultad, siempre guiados por la experiencia de cursar y transitar día a día nuestra FIUBA.
                    </p>
                    <p className="mt-4 text-gray-300">
                        Estamos orgullosos de todas las conquistas estudiantiles que logramos como Consejeros durante el periodo 2022-2024, solo posibles por el apoyo que nos dan los estudiantes como portavoces de su voz.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">

                    {
                        dataArchivements.map(e =>
                            <Card key={e.title} source={e.source} title={e.title} short={e.short} long={e.long} />)
                    }

                </div>

                <div className="mt-12 mx-auto w-2/3 sm:w-1/3 text-center border border-secundary rounded-lg">
                    <a
                        href="https://www.instagram.com/mli.fiuba"
                        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-secundary transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        No te pierdas ninguna novedad sobre nuestras cursadas
                    </a>
                </div>
            </div>
        </section>
    )
}
