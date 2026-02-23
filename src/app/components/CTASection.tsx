'use client'
import Image from 'next/image'
import { useTheme } from "@/context/ThemeContext"

interface CTAButton {
    label: string
    href: string
    variant: 'primary' | 'secondary' | 'instagram'
}

interface CTASectionProps {
    title: string
    subtitle: string
    buttons: CTAButton[]
}

export default function CTASection({ title, subtitle, buttons }: CTASectionProps) {
    const { isDark } = useTheme()

    return (
        <section className={`py-20 px-8 lg:px-16 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h2>
                <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    {subtitle}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {buttons.map((button, index) => {
                        if (button.variant === 'primary') {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-secundary text-white font-semibold rounded-full hover:bg-secundary/90 transition-colors"
                                >
                                    {button.label}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            )
                        }

                        if (button.variant === 'secondary') {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    className={`inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full border-2 transition-colors ${isDark
                                        ? 'border-white text-white hover:bg-white/10'
                                        : 'border-gray-900 text-gray-900 hover:bg-gray-900/10'
                                    }`}
                                >
                                    {button.label}
                                </a>
                            )
                        }

                        if (button.variant === 'instagram') {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full border-2 transition-colors ${isDark
                                        ? 'border-white text-white hover:bg-white/10'
                                        : 'border-gray-900 text-gray-900 hover:bg-gray-900/10'
                                    }`}
                                >
                                    {button.label}
                                    <Image
                                        className={isDark ? 'invert' : ''}
                                        src="/instagram.svg"
                                        height={20}
                                        width={20}
                                        alt="Instagram"
                                    />
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
