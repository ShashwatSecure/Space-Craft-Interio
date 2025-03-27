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
        <Carousel ref={targetRef} className="mx-0 my-0 relative">
            <h2 className="text-2xl font-semibold w-full text-center mb-3 my-0 uppercase text-gray-700">
                {title}
            </h2>
            <CarouselContent className="">
                {items.map((item) => (
                    <CarouselItem key={item.title} className="md:basis-1/3 w-full h-fit flex items-center justify-center">
                        <Card
                            {...item}
                            key={item.title}
                            id={item.id.toString()}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
        </Carousel>
    )
}

export default CustomCarousel
