import Image from "next/image";
import Quote from "../Quote";

const Card = ({ title, imageUrl, id }: { title: string, imageUrl: string, id: string }) => {
    return (
        <div className="md:w-[80vw] w-[95%] rounded p-3 sm:pr-5 lg:pr-3 flex items-center justify-between flex-col hover:bg-gray-200 cursor-pointer transition-colors group-[card] lg:w-[29vw] overflow-y-hidden h-[65vh]">
            <Image
                src={imageUrl}
                width={1000}
                height={1000}
                alt="image"
                className="md:w-[100vw] md:h-[50vh] w-full h-full object-cover "
            />
            <div className="w-full flex items-center justify-between gap-2 h-fit md:h-[10vh]">
                <h2 className="text-md hover:group-[card]:underline text-gray-900 w-[70%] text-xs flex items-start justify-start h-full md:pt-4 pt-2 uppercase md:line-clamp-1">{title.replaceAll("-", " ")}</h2>
                <Quote id={id} className="" />
            </div>
        </div>
    )
}

export default Card;
