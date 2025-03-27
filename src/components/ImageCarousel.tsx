import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ImageCarousel = ({ images }: { images: string[] }) => {
    return (
        <Carousel className="md:w-2/3 w-full relative">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={image}
                            alt={`Project Image`}
                            width={1000}
                            height={500}
                            className="rounded-xl w-full h-full max-h-[80vh] object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />
        </Carousel>
    )
}

export default ImageCarousel
