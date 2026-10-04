import Link from 'next/link'
import NavBar from './components/navbar'
import { frame, gutter, kicker, btnPrimary, Arrow, Corners } from './components/base'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-page graph-paper">
            <NavBar />
            <section className={`${frame} min-h-screen flex items-center`}>
                <Corners />
                <div className={`${gutter} py-24 enter-left`}>
                    <p className={`${kicker} text-secundary`}>Error 404 · v ∉ gen{'{'}rutas{'}'}</p>
                    <h1 className="mt-5 font-black uppercase leading-[0.88] tracking-[-0.03em] text-body text-[clamp(2.5rem,10vw,5.5rem)]">
                        Nada por acá
                    </h1>
                    <p className="mt-6 text-lg text-muted">Debes continuar tu camino, viajero...</p>
                    <Link href="/" className={`mt-8 ${btnPrimary}`}>
                        <Arrow className="w-4 h-4 rotate-180" />
                        Volver al inicio
                    </Link>
                </div>
            </section>
        </div>
    )
}
