import Image from "next/image";
import Quote from "../Quote";

const Card = ({ title, imageUrl }: { title: string, imageUrl: string }) => {
    return (
        <div className="w-[82vw] rounded p-3 sm:pr-5 lg:pr-3 flex items-center justify-between flex-col hover:bg-gray-200 cursor-pointer transition-colors group-[card] lg:w-[29vw] overflow-y-hidden">
            <Image
                src={imageUrl}
                width={1000}
                height={1000}
                alt="image"
                className="w-[100vw] h-[50vh] object-cover "
            />
            <div className="w-full flex items-center justify-between gap-2 h-[10vh]">
                <h2 className="text-md hover:group-[card]:underline text-gray-900 w-[80%] text-sm flex items-start justify-start h-full pt-4 uppercase line-clamp-1">{title.replaceAll("-", " ")}</h2>
                <button className="border-2 hover:bg-orange-400 text-orange-600 hover:text-white hover:font-bold border-orange-400 rounded-md text-sm w-[25%] p-2">Get Quote</button>
                {/* <Quote id="" /> */}
            </div>
        </div>
    )
}

export default Card;
