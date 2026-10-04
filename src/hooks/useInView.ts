'use client'
import { useState, useEffect } from 'react'

// Callback ref named `observe`: react-hooks/refs treats any `.ref` property as a ref and rejects reading isInView next to it
export function useInView(threshold = 0.3) {
    const [node, setNode] = useState<HTMLElement | null>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        if (!node) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [node, threshold])

    return { observe: setNode, isInView }
}
