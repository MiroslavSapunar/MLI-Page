import Image from 'next/image'
import { frame, gutter, btnPrimary, btnSecondary, Arrow, Corners } from './base'

interface CTAButton {
    label: string
    href: string
    variant: 'primary' | 'instagram'
}

interface CTASectionProps {
    title: string
    subtitle: string
    buttons: CTAButton[]
}

export default function CTASection({ title, subtitle, buttons }: CTASectionProps) {
    return (
        <section className="graph-paper border-t border-ui pb-20">
            <div className={frame}>
                <Corners />
                <div className={`${gutter} py-14 lg:py-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8`}>
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-body">{title}</h2>
                        <p className="mt-4 text-lg text-muted">{subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {buttons.map(button => button.variant === 'instagram' ? (
                            <a key={button.href} href={button.href} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                                {button.label}
                                <Image className="theme-invert w-4 h-4" src="/instagram.svg" height={16} width={16} alt="Instagram" />
                            </a>
                        ) : (
                            <a key={button.href} href={button.href} className={btnPrimary}>
                                {button.label} <Arrow />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
