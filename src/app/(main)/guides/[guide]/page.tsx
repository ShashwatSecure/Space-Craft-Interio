import { prismaClient } from "@/utils/prismaClient"
import Link from "next/link"

export default async function Guide({
    params,
}: {
    params: Promise<{ guide: string }>
}) {
    const { guide } = await params
    const guideData = await prismaClient.guide.findFirst({
        where: {
            title: {
                equals: guide.replaceAll("-", " "),
                mode: "insensitive",
            },
        },
        include: {
            GuideContent: true,
        },
    })

    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-start gap-0 animate-animate-appear">
            <div className="w-[25%] h-full hidden md:flex p-4 bg-gray-100 text-gray-600 text-sm flex-col gap-4 py-32">
                {guideData?.GuideContent.map((guideContent, index) => (
                    <Link className="w-full px-4 hover:underline" href={`/guides/${guide}#${guideContent.heading}`} key={guideContent.id}>{index+1}.{" "}{guideContent.heading}</Link>
                ))}
            </div>
            <div className="md:w-[75%] w-full h-[100vh] overflow-y-scroll flex flex-col items-center justify-start gap-0 md:py-32 py-20 prose prose-lg max-w-none">
                <h2 className="mb-1">{guideData?.title}</h2>
                <p className="mt-1 px-10">{guideData?.description}</p>
                <div className="space-y-10 px-10">
                    {guideData?.GuideContent.map((guideContent, index) => (
                        <div className="" key={guideContent.id} id={guideContent.heading}>
                            <h3 className="text-2xl font-medium">{index+1}.{" "}{guideContent.heading}</h3>
                            <p>{guideContent.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
