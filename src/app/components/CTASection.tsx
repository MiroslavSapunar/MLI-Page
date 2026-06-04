'use client'
import Image from 'next/image'

interface CTAButton {
    label: string
    href: string
    variant: 'primary' | 'secondary' | 'instagram' | 'guia'
}

interface CTASectionProps {
    title: string
    subtitle: string
    buttons: CTAButton[]
}

export default function CTASection({ title, subtitle, buttons }: CTASectionProps) {
    return (
        <section className="py-20 px-8 lg:px-16 bg-surface">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-body">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-subtle">
                    {subtitle}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {buttons.map((button, index) => {
                        if (button.variant === 'primary' || button.variant === 'guia') {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-secundary text-white font-semibold rounded-full hover:bg-secundary/90 transition-colors"
                                >
                                    {button.variant === 'guia' && (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    )}
                                    {button.label}
                                    {button.variant === 'primary' && (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    )}
                                </a>
                            )
                        }

                        if (button.variant === 'secondary' || button.variant === 'instagram') {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    target={button.variant === 'instagram' ? '_blank' : undefined}
                                    rel={button.variant === 'instagram' ? 'noopener noreferrer' : undefined}
                                    className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full border-2 transition-colors border-gray-900 text-gray-900 hover:bg-gray-900/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                                >
                                    {button.label}
                                    {button.variant === 'instagram' && (
                                        <Image
                                            className="theme-invert w-5 h-5"
                                            src="/instagram.svg"
                                            height={20}
                                            width={20}
                                            alt="Instagram"
                                        />
                                    )}
                                </a>
                            )
                        }

                        return null
                    })}
                </div>
            </div>
        </section>
    )
}
