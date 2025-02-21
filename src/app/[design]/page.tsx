import { data } from "@/data"
import Image from "next/image"
import Link from "next/link";


export default async function Design({ params }: { params: Promise<{design: string}> }) {

    const { design } = await params
    const designs = data.find((val) => val.title.toLowerCase()+" design" === design.toLowerCase().replaceAll("-", " "))?.items

    return <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">{design.replaceAll("-", " "). toUpperCase()}</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover stunning 2 BHK home designs to elevate your living space.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {designs?.map((dsgn, index) => (
                    <div key={index} className="w-full md:w-3/4 px-20 lg:w-2/3 py-4 mb-6 bg-gray-100 rounded-sm shadow-lg flex flex-col items-center justify-start">
                        <Image
                            src={dsgn.imageUrl}
                            alt={dsgn.title}
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-sm w-full text-start font-semibold text-gray-800 mt-4">{dsgn.title.replaceAll("-", " ").toUpperCase()}</h3>
                        <p className="text-gray-600 mt-2 w-full text-start">
                            A beautifully designed {dsgn.title} to enhance your 2 BHK home.
                        </p>
                        <Link
                            href={"/get-quote"}
                            className="mt-4 bg-green-500 self-end text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                        >
                            Get Quote
                        </Link>
                    </div>
                ))}
            </div>

            {/* {visibleCount < TwoBHKDesigns.length && (
                <div className="text-center mt-4 mb-4">
                    <button
                        className="text-blue-600 font-medium hover:underline"
                        onClick={() => setVisibleCount(visibleCount + 6)}
                    >
                        View More
                    </button>
                </div>
            )} */}
        </section>
}