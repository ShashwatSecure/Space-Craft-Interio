import Link from "next/link"
import Button from "./Button"

const HeroSection = () => {
    return (
        <>
            <section
                className="relative animate-animate-appear bg-cover bg-center h-[100vh] flex items-center justify-end text-right px-4 md:px-8"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dj59omo7m/image/upload/v1739876742/design-showcase_secphg.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {/* White Gradient Overlay from the Right */}
                <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-50"></div>

                <div className="relative z-10 p-4 md:p-8 rounded-lg max-w-4xl h-fit">
                    {/* Main Title */}
                    <div className="relative flex items-center justify-center w-full h-20 md:h-30 lg:h-30 text-black font-extrabold text-4xl md:text-6xl lg:text-7xl px-4 md:px-6 ">
                        <span className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-white text-center">
                            Space{" "}
                            <span className="text-orange-500">Craft </span>
                            Interio
                        </span>
                    </div>

                    {/* Subtitle with Bright and Contrasting Colors */}
                    <h1 className="text-white text-2xl md:text-4xl font-extrabold mb-4 mt-6 leading-tight tracking-tight drop-shadow-xl text-">
                        Transform Your Space with Tailored Designs
                    </h1>

                    {/* Description Text */}
                    <p className="text-lg md:text-xl mt-4 text-white drop-shadow-md font-bold italic">
                        Expert interior design solutions crafted just for you.
                        Bringing your vision to life.
                    </p>

                    {/* CTA Button */}
                    <Link href={"/designs/interior-design"}>
                        <Button className="hover:bg-orange-600 text-sm md:text-xl border-transparent hover:text-white mt-6">Explore Designs</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HeroSection
