import { fetchDesignsByCategory } from "@/actions/designs.action"
import Container from "@/components/Container"
import Quote from "@/components/Quote"
import { cookies } from "next/headers"
import Image from "next/image"

const descriptions: { [key: string]: string } = {
    "1bhk": "Explore stylish and space-efficient 1 BHK home designs perfect for modern living.",
    "2bhk": "Discover stunning 2 BHK home designs to elevate your living space with elegance and functionality.",
    "3bhk": "Get inspired by spacious 3 BHK home designs tailored for comfort and luxury.",
    "modular-kitchen":
        "Upgrade your home with sleek and functional modular kitchen designs that blend aesthetics with utility.",
    "living-room":
        "Find creative and cozy living room designs that bring warmth and elegance to your home.",
    bedroom:
        "Transform your personal space with stylish and comfortable bedroom designs that ensure relaxation.",
}

export default async function Design({
    params,
}: {
    params: Promise<{ design: string }>
}) {
    const { design } = await params
    const formattedDesign = design.toLowerCase().replaceAll("-", " ")

    const designs = (await fetchDesignsByCategory(design)).data
    const pageTitle = formattedDesign.toUpperCase()
    const description =
        descriptions[formattedDesign] ||
        "Discover beautifully curated home interior designs to match your style."

    // Updating the session for design view
    const cookieStore = await cookies()
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/session`, {
        method: "PUT",
        body: JSON.stringify({ designCategory: design }),
        credentials: "include",
        headers: {
            Cookie: cookieStore
                .getAll()
                .map((cookie) => `${cookie.name}=${cookie.value}`)
                .join("; "),
        },
    }).then(async (res) => {
        const { success, message } = await res.json()
        console.log(success, message)
    })

    return (
        <Container className="relative">
            <section className="mt-24 px-6 animate-animate-appear">
                <h2 className="text-3xl font-semibold text-center text-gray-900">
                    {pageTitle}
                </h2>
                <p className="text-center text-gray-600 mt-2">{description}</p>
                <div className="mt-6 grid md:grid-cols-2 grid-cols-1 justify-items-center content-center gap-6 md:px-32">
                    {designs?.map((dsgn, index) => (
                        <div
                            key={index}
                            className="w-full group px-6 hover:shadow-md transition-all relative cursor-pointer py-4 mb-0 bg-gray-100 rounded-sm shadow-sm flex flex-col items-center justify-start"
                        >
                            <Image
                                src={dsgn.imageUrl}
                                alt={dsgn.title}
                                width={800}
                                height={500}
                                className="rounded-lg md:h-[50vh] h-auto"
                            />
                            <h3 className="text-sm w-full text-start font-semibold text-gray-800 mt-4">
                                {dsgn.title.replaceAll("-", " ").toUpperCase()}
                            </h3>
                            <p className="text-gray-600 mt-1 w-full text-start text-sm">
                                {`A beautifully designed ${dsgn.title.replaceAll(
                                    "-",
                                    " "
                                )} to enhance your ${formattedDesign} home.`}
                            </p>
                            <div className="absolute top-0 left-0 w-full h-full bg-transparent hover:bg-gray-200 hover:bg-opacity-30 duration-300 transition-all hover:backdrop-blur-[1px] rounded-md">
                                <Quote
                                    id={dsgn.id.toString()}
                                    className=" hidden group-hover:block absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}
