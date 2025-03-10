"use client"

import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import Card from "./Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselProps {
    title: string
    items: Array<{
        title: string
        imageUrl: string
        id: number
    }>
}

const CustomCarousel = ({ title, items }: CarouselProps) => {

    const { targetRef } = useIntersectionObserver()

    return (
        <Carousel ref={targetRef}>
            <h2 className="text-2xl font-semibold w-full text-center mb-3 uppercase text-gray-700">
                {title}
            </h2>
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={item.title} className="basis-1/3">
                        <Card {...item} key={item.title} id={item.id.toString()} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CustomCarousel
