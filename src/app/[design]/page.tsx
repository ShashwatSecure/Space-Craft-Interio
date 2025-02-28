import { fetchDesignsByCategory } from "@/actions/designs.action";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const descriptions: { [key: string]: string } = {
    "1bhk": "Explore stylish and space-efficient 1 BHK home designs perfect for modern living.",
    "2bhk": "Discover stunning 2 BHK home designs to elevate your living space with elegance and functionality.",
    "3bhk": "Get inspired by spacious 3 BHK home designs tailored for comfort and luxury.",
    "modular-kitchen": "Upgrade your home with sleek and functional modular kitchen designs that blend aesthetics with utility.",
    "living-room": "Find creative and cozy living room designs that bring warmth and elegance to your home.",
    "bedroom": "Transform your personal space with stylish and comfortable bedroom designs that ensure relaxation.",
};

export default async function Design({ params }: { params: Promise<{ design: string }> }) {
    const { design } = await params;
    const formattedDesign = design.toLowerCase().replaceAll("-", " ");
    const designs = (await fetchDesignsByCategory(design)).data
    const pageTitle = formattedDesign.toUpperCase();
    const description = descriptions[formattedDesign] || "Discover beautifully curated home interior designs to match your style.";

    return (
        <Container>
            <section className="mt-20 px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-900">{pageTitle}</h2>
                <p className="text-center text-gray-600 mt-2">{description}</p>

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
                                {`A beautifully designed ${dsgn.title.replaceAll("-", " ")} to enhance your ${formattedDesign} home.`}
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
            </section>
        </Container>
    );
}
