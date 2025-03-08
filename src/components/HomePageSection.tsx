"use client"

import Image from "next/image"
import Button from "./Button"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface Cards {
    imageUrl: string
    title: string
    description?: string
}

interface HomePageSectionProps {
    title: string
    description?: string
    cards: Cards[]
    cta?: string;
    url?: string;
}

export default function HomePageSection({
    title,
    description,
    cards,
    cta,
    url
}: HomePageSectionProps) {

    const observerRef = useRef<IntersectionObserver | null>(null)
    const targetRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

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

    return (
        <section className="popular-designs mt-16">
            <h2 className="text-3xl font-semibold text-center text-gray-900">
                {title}
            </h2>
            <p className="text-center text-gray-600 mt-2">{description}</p>

            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cards.length} gap-6 mt-6`} ref={targetRef}>
                {cards.map((design) => (
                    <div
                        key={design.title}
                        className={`bg-gray-100 hover:bg-gray-200 transition-all p-4 rounded-lg shadow-sm cursor-pointer flex flex-col items-center`}
                    >
                        <Image
                            src={design.imageUrl}
                            alt={design.title}
                            width={1000}
                            height={1000}
                            className={`rounded-lg object-cover w-full h-full`}
                        />
                        <h3 className="text-lg font-semibold mt-2 text-center">
                            {design.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 text-center">
                            {design.description}
                        </p>
                    </div>
                ))}
            </div>
            {cta && (
                <div className="flex justify-center mt-6">
                    <Button onClick={() => url && router.push(url)}>{cta}</Button>
                </div>
            )}
        </section>
    )
}
