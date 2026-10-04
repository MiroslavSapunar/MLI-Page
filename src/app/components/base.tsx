// "Base canónica" building blocks shared by the landing and inner pages (see Design System in CLAUDE.md)

export const frame = 'relative max-w-7xl mx-auto lg:border-x border-ui'
export const gutter = 'px-4 sm:px-8 lg:px-16'
export const kicker = 'font-mono text-[11px] uppercase tracking-[0.2em]'

export const btnPrimary = 'inline-flex items-center gap-3 px-6 py-3 bg-secundary text-white font-mono text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity'
export const btnSecondary = 'inline-flex items-center gap-3 px-6 py-3 border border-body text-body font-mono text-xs font-medium uppercase tracking-[0.15em] hover:bg-body hover:text-page transition-colors'
export const textLink = 'inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-body hover:text-secundary transition-colors'

export const reveal = (isInView: boolean) =>
    `transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`

export function Arrow({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    )
}

// "+" marks where the frame's side rules meet a section's top rule
export function Corners() {
    return (
        <>
            <span className="crosshair left-0 top-0 hidden lg:block" />
            <span className="crosshair left-full top-0 hidden lg:block" />
        </>
    )
}

// 417 → [4 1 7]ᵀ
export function ColumnVector({ digits, className = '' }: { digits: string; className?: string }) {
    return (
        <span className={`matrix inline-flex flex-col items-center leading-tight font-mono font-medium py-0.5 ${className}`} aria-hidden>
            {digits.split('').map((d, i) => <span key={i}>{d}</span>)}
        </span>
    )
}

// Section numbers are basis vectors: e₁, e₂, e₃…
export function SectionHead({ n, label, children, isInView = true }: {
    n: number
    label: string
    children: React.ReactNode
    isInView?: boolean
}) {
    return (
        <div className={`${gutter} pt-12 pb-8 border-b border-ui flex items-end gap-5 ${reveal(isInView)}`}>
            <span className="text-[4.5rem] lg:text-[7rem] leading-[0.8] text-num select-none font-mono" aria-hidden>
                e<sub className="text-[0.6em]">{n}</sub>
            </span>
            <div className="pb-1 min-w-0">
                <p className={`${kicker} text-secundary`}>{label}</p>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-body">{children}</h2>
            </div>
        </div>
    )
}

// Inner-page hero: graph paper, mono kicker, black uppercase title. CSS entry animation, never gated on hydration.
export function PageHero({ label, title, lead, children }: {
    label: string
    title: string[]
    lead?: React.ReactNode
    children?: React.ReactNode
}) {
    return (
        <section className="pt-11 graph-paper border-b border-ui">
            <div className={frame}>
                <Corners />
                <div className={`${gutter} pt-12 pb-12 lg:pt-20 lg:pb-16 enter-left`}>
                    <p className={`${kicker} text-secundary`}>{label}</p>
                    <h1 className="mt-5 font-black uppercase leading-[0.88] tracking-[-0.03em] text-body text-[clamp(2.25rem,10vw,5.5rem)]">
                        {title.map(line => <span key={line} className="block">{line}</span>)}
                    </h1>
                    {lead && <div className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted">{lead}</div>}
                    {children}
                </div>
            </div>
        </section>
    )
}

// Expandable row for divide-y lists (FAQ, achievements)
export function Collapsible({ title, index, isOpen, onToggle, children }: {
    title: string
    index?: string
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
}) {
    return (
        <div className="group">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className={`w-full ${gutter} py-5 flex items-start gap-4 text-left hover:bg-surface transition-colors`}
            >
                {index && <span className="font-mono text-xs text-faint pt-1 w-6 flex-shrink-0">{index}</span>}
                <h3 className="flex-1 min-w-0 text-base sm:text-lg font-bold leading-snug text-body">{title}</h3>
                <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300 ${isOpen ? 'rotate-45 border-secundary text-secundary' : 'border-ui text-body group-hover:border-secundary'}`}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="square" aria-hidden>
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className={`${gutter} pb-6 ${index ? 'pl-14 sm:pl-[4.5rem] lg:pl-[6.5rem]' : ''}`}>{children}</div>
                </div>
            </div>
        </div>
    )
}
