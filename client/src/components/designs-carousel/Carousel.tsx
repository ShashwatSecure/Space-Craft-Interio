"use client"

import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi"
import Card from "./Card"
import { useRef } from "react"

interface CarouselProps {
    title: string
    items: Array<{
        title: string
        imageUrl: string
    }>
}

const Carousel = ({ title, items }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const carouselWidthRef = useRef<number>(1)
    return (
        <div className="w-auto">
            <h2 className="text-2xl font-semibold w-full text-center mb-3 uppercase text-gray-700">{title}</h2>
            <div className="w-[100%] flex items-center justify-between relative">
                <BiLeftArrowCircle
    className="text-6xl text-gray-400 cursor-pointer"
    onClick={() => {
        if (carouselWidthRef.current > 1) {
            carouselWidthRef.current -= 1;
        }
        const translateValue = window.innerWidth >= 1024 ? 30 : 82;
        carouselRef.current!.style.transform = `translateX(-${
            carouselWidthRef.current * translateValue - translateValue
        }vw)`;
    }}
/>

                <div className="w-[100vw] h-[500px] relative overflow-x-hidden">
                    <div
                        ref={carouselRef}
                        className="w-auto scroll-smooth transition-transform h-[60vh] absolute top-0 left-0 flex items-center justify-start gap-0"
                    >
                        {items.map((item) => (
                            <Card {...item} key={item.title} />
                        ))}
                    </div>
                </div>
                <BiRightArrowCircle
                    className="text-6xl text-gray-400 cursor-pointer"
                    onClick={() => {
                        const translateValue = window.innerWidth >= 1024 ? 29 : 82;
                        carouselRef.current!.style.transform = `translateX(-${
                            carouselWidthRef.current * translateValue
                        }vw)`;
                        if (carouselWidthRef.current < items.length - 3)
                            carouselWidthRef.current += 1;
                    }}
                />
            </div>
        </div>
    )
}

export default Carousel
