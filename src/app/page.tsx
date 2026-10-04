'use client'
// "Base canónica": graph paper, basis vectors, matrices; red only on vectors / active state.
// One duotone photo band carries the movement side.
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from "@/hooks/useInView"
import NavBar from './components/navbar'
import { frame, gutter, kicker, reveal, btnPrimary, btnSecondary, textLink, Arrow, Corners, ColumnVector, SectionHead } from './components/base'
import clasePublica from '../../public/Clase publica calle1.jpeg'

const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'valores', label: 'Valores' },
    { id: 'guias', label: 'Guías' },
]

const stats = [
    { value: '20+', label: 'Años de historia' },
    { value: '32.12%', label: 'Votos 2026' },
    { value: '100%', label: 'Fiubenses' },
    { value: '1ra fuerza', label: 'Mayoría estudiantil' },
]

const trabajos = [
    { title: 'Nuevos planes de estudio 2020', stat: '8 carreras', desc: 'Actualizamos todas las carreras de FIUBA, algunas con 35 años de antigüedad.' },
    { title: 'Comedor del CEI', stat: 'Lu-Vi 9:00 a 21:30', desc: 'Un servicio completo, económico y de calidad, funcionando cuatrimestre a cuatrimestre.' },
    { title: 'Materias promocionables', stat: '56% aprobados', desc: 'Impulsamos la cursada piloto de Álgebra II sin final: mismos temas, misma exigencia con aprobación directa en parciales.' },
    { title: 'Modernización de trámites y plazos', stat: '72hs → 48hs', desc: 'Redujimos plazos, simplificamos certificados y automatizamos equivalencias.' },
]

const valores = [
    { title: 'Independencia', desc: 'No respondemos a partidos políticos, intereses económicos ni funcionarios. Nuestro compromiso es lograr una mejor FIUBA cada día.' },
    { title: 'Estudiantes como vos', desc: 'Somos fiubenses, conocemos los (a veces infinitos) baches de la facu, por eso nos organizamos para lograr los cambios que necesitamos.' },
    { title: 'Resultados concretos', desc: '20 años transformando la facultad: más cursos en materias colapsadas, mejoras edilicias y los planes de estudio 2020. Y seguimos sumando.' },
]

const guias = [
    { href: '/guia', label: 'Guía del Estudiante Fiubense', sub: 'Tus derechos y trámites en FIUBA' },
    { href: '/guia-cbc', label: 'Guía del Estudiante del CBC', sub: 'Tu primer año en la UBA' },
    { href: 'https://www.instagram.com/mli.fiuba', label: 'Escribinos al Instagram', sub: '@mli.fiuba', external: true },
]

// Two collinear vectors and one that leaves their span — the name, drawn
function Figure() {
    return (
        <figure className="enter-up" style={{ animationDelay: '250ms' }}>
            <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Tres vectores: v₁ y v₂ alineados, v₃ fuera de su recta">
                <defs>
                    <marker id="tip" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse" className="text-faint">
                        <path d="M0 0L10 5L0 10z" fill="currentColor" />
                    </marker>
                    <marker id="tip-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse" className="text-secundary">
                        <path d="M0 0L10 5L0 10z" fill="currentColor" />
                    </marker>
                </defs>
                <g className="text-faint" stroke="currentColor" strokeWidth="1">
                    <line x1="20" y1="192" x2="306" y2="192" />
                    <line x1="48" y1="228" x2="48" y2="14" />
                </g>
                <line x1="16" y1="200" x2="312" y2="126" className="text-faint" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
                <g className="text-muted" stroke="currentColor" strokeWidth="2.5" fill="none">
                    <path d="M48 192L232 146" pathLength={1} className="draw" style={{ animationDelay: '500ms' }} markerEnd="url(#tip)" />
                    <path d="M48 192L136 170" pathLength={1} className="draw" style={{ animationDelay: '350ms' }} markerEnd="url(#tip)" />
                </g>
                <path d="M48 192L150 42" pathLength={1} className="draw text-secundary" stroke="currentColor" strokeWidth="3.5" fill="none" style={{ animationDelay: '800ms' }} markerEnd="url(#tip-red)" />
                <g className="font-mono text-[12px]" fill="currentColor">
                    <text x="128" y="190" className="text-muted">v₁</text>
                    <text x="226" y="166" className="text-muted">v₂</text>
                    <text x="158" y="44" className="text-secundary font-medium">v₃</text>
                </g>
            </svg>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Fig. 1 — v₃ ∉ gen{'{'}v₁, v₂{'}'}
            </figcaption>
        </figure>
    )
}

export default function Home() {
    const { observe: aboutObserve, isInView: aboutInView } = useInView(0.15)
    const { observe: valuesObserve, isInView: valuesInView } = useInView(0.15)
    const { observe: guiasObserve, isInView: guiasInView } = useInView(0.15)

    return (
        <div className="min-h-screen bg-page">
            <NavBar />

            {/* ── Side index – Desktop ── */}
            <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
                {sections.map(({ id, label }) => (
                    <a href={`#${id}`} key={id} title={label} className="group flex items-center">
                        <span className="w-2 h-2 transition-colors bg-gray-300 group-hover:bg-secundary dark:bg-white/30" />
                    </a>
                ))}
            </nav>

            {/* ── Bottom index – Mobile ── */}
            <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden flex border border-ui bg-page/80 backdrop-blur-xl">
                {sections.map(({ id, label }) => (
                    <a
                        href={`#${id}`}
                        key={id}
                        className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted hover:text-body hover:bg-surface transition-colors"
                    >
                        {label}
                    </a>
                ))}
            </nav>

            {/* ══ Hero ══ */}
            <section id="inicio" className="pt-11 graph-paper border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <div className={`${gutter} pt-10 pb-12 lg:py-20 grid gap-12 lg:grid-cols-12 lg:items-center`}>
                        <div className="lg:col-span-7 enter-left">
                            <div className={`flex items-center gap-4 ${kicker} text-subtle`}>
                                <ColumnVector digits="MLI" className="text-body text-sm" />
                                <span className="flex flex-col gap-1">
                                    <span className="text-body">Lista 417</span>
                                    <span>Facultad de Ingeniería · UBA</span>
                                    <span>Desde 2005</span>
                                </span>
                            </div>

                            <h1 className="mt-8 font-black uppercase leading-[0.88] tracking-[-0.03em] text-body text-[clamp(2rem,8.6vw,4.5rem)] lg:text-[min(4.3vw,4.5rem)]">
                                <span className="block">Movimiento</span>
                                <span className="block">Linealmente</span>
                                <span className="block">Independiente</span>
                            </h1>

                            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                                Agrupación estudiantil independiente de FIUBA.
                                <span className="block mt-1 font-heading text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight text-body">
                                    20 años transformando la facultad.
                                </span>
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href="/propuestas" className={btnPrimary}>
                                    Propuestas <Arrow />
                                </Link>
                                <Link href="/logros" className={btnSecondary}>
                                    Nuestro trabajo
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <Figure />
                        </div>
                    </div>

                    {/* Stats as a matrix */}
                    <div className={`${gutter} pb-12 lg:pb-16`}>
                        <div className="matrix text-faint enter-up" style={{ animationDelay: '400ms' }}>
                            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4">
                                {stats.map(s => (
                                    <div key={s.label} className="min-w-0 flex flex-col">
                                        <dt className="order-2 mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-subtle truncate">{s.label}</dt>
                                        <dd className="order-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-none text-body tabular-nums">{s.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ Nosotros ══ */}
            <section id="nosotros" ref={aboutObserve} className="scroll-mt-11 border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <SectionHead n={1} label="Nosotros" isInView={aboutInView}>La voz de los estudiantes</SectionHead>
                    <div className={`grid lg:grid-cols-12 ${reveal(aboutInView)} delay-150`}>
                        <div className={`lg:col-span-5 ${gutter} lg:pr-10 py-10 lg:border-r border-ui flex flex-col justify-between gap-8`}>
                            <p className="text-lg leading-relaxed text-muted">
                                Somos una agrupación estudiantil independiente y horizontal, nacida en los pasillos de FIUBA.
                            </p>
                            <Link href="/logros" className={`${textLink} self-start`}>
                                Ver todo nuestro trabajo <Arrow />
                            </Link>
                        </div>
                        <ol className="lg:col-span-7 divide-y divide-ui border-t lg:border-t-0 border-ui">
                            {trabajos.map((t, i) => (
                                <li key={t.title} className={`grid grid-cols-[2rem_1fr] gap-x-3 ${gutter} lg:pl-10 py-6 hover:bg-surface transition-colors`}>
                                    <span className="font-mono text-xs text-faint pt-1">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                                            <h3 className="font-bold uppercase tracking-[0.04em] text-body">{t.title}</h3>
                                            <span className="font-mono text-xs text-body whitespace-nowrap">
                                                <span className="text-secundary">→ </span>{t.stat}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-subtle">{t.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ══ Photo band ══ */}
            <section aria-label="Clase pública" className="duotone h-[70svh] min-h-[420px] max-h-[760px] border-b border-ui">
                <Image
                    src={clasePublica}
                    alt="Estudiantes cursando una clase pública en la calle, frente a la facultad"
                    fill
                    sizes="100vw"
                    className="object-cover object-[30%_50%]"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent">
                    <div className={`h-full max-w-7xl mx-auto ${gutter} flex flex-col justify-end pb-10 lg:pb-14`}>
                        <p className="max-w-3xl font-black uppercase text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,6vw,4rem)]">
                            <span className="bg-secundary px-2 box-decoration-clone">No esperamos que las cosas las cambie otro.</span>
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/70">
                            Fig. 2 — Clase pública en la calle
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ Valores ══ */}
            <section id="valores" ref={valuesObserve} className="scroll-mt-11 border-b border-ui">
                <div className={frame}>
                    <Corners />
                    <SectionHead n={2} label="Nuestros pilares" isInView={valuesInView}>¿Qué nos define?</SectionHead>
                    <div className={`grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ui ${reveal(valuesInView)} delay-150`}>
                        {valores.map((v, i) => (
                            <div key={v.title} className={`group ${gutter} md:px-8 lg:px-10 py-10`}>
                                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Axioma {i + 1}</p>
                                <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-body">{v.title}</h3>
                                <p className="mt-3 leading-relaxed text-subtle">{v.desc}</p>
                                <div className="mt-6 h-[2px] w-8 bg-secundary transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                    <div className={`${gutter} py-6 border-t border-ui flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${reveal(valuesInView)} delay-300`}>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">Que veinte años no es nada...</p>
                        <Link href="/quienes-somos" className={textLink}>
                            Quiénes somos <Arrow />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══ Guías ══ */}
            <section id="guias" ref={guiasObserve} className="scroll-mt-11 graph-paper pb-24">
                <div className={frame}>
                    <Corners />
                    <SectionHead n={3} label="Recursos" isInView={guiasInView}>Guías del Estudiante</SectionHead>
                    <ul className={`divide-y divide-ui border-b border-ui ${reveal(guiasInView)} delay-150`}>
                        {guias.map((g, i) => (
                            <li key={g.href}>
                                <a
                                    href={g.href}
                                    target={g.external ? '_blank' : undefined}
                                    rel={g.external ? 'noopener noreferrer' : undefined}
                                    className={`group flex items-center justify-between gap-6 ${gutter} py-7 bg-page hover:bg-surface transition-colors`}
                                >
                                    <span className="min-w-0">
                                        <span className="block font-heading text-lg sm:text-xl font-black uppercase tracking-tight text-body">{g.label}</span>
                                        <span className="block mt-1 font-mono text-xs text-subtle">{g.sub}</span>
                                    </span>
                                    <span className={`flex-shrink-0 w-11 h-11 flex items-center justify-center transition-colors ${i === 0 ? 'bg-secundary text-white' : 'border border-ui text-body group-hover:border-secundary group-hover:text-secundary'}`}>
                                        <Arrow />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
