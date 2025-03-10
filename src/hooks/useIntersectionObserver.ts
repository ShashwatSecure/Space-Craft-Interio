import { useEffect, useRef } from "react"

export default function useIntersectionObserver() {
    const observerRef = useRef<IntersectionObserver | null>(null)
    const targetRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(!observerRef.current) {
            observerRef.current = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting)
                    entries[0].target.classList.add("animate-animate-appear")
                else
                    entries[0].target.classList.remove("animate-animate-appear")
            }, {
                threshold: 0
            })
            observerRef.current.observe(targetRef.current!)
        }
    }, [])

    return { targetRef }
}