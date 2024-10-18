import { IoStarSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import Image from "next/image";
// Importing Quicksand and Lato fonts
const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "700", // Medium for card titles
});

const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: "400", // Light for item count
});


interface productsCard {
    image?: string;
    heading: string;
    title?: string;
    price: string;
    rating: string;
    name: string;
}



export default function PopularProductCard({
    image,
    heading,
    title,
    price,
    rating,
    name,
}: productsCard) {
    return (
        <div className="px-1 sm:w-full w-[270px]">
            {/* Set a consistent card height and flex for vertical alignment */}
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 h-[320px] sm:h-[350px] flex flex-col justify-between transition-transform transform hover:scale-105">
                <div className="flex justify-center items-center">
                    <Image
                        src={image || "/images/default-product.png"} // Dynamically setting the image from the `image` prop
                        alt={"Product Image"}
                        width={100}
                        height={100}
                        className="rounded-lg"
                    />

                </div>
                <p className={`${lato.className} text-[#ADADAD] py-1`}>{title}</p>
                <h3 className={`${quicksand.className} text-[#253D4E] font-extrabold text-sm`}>{heading}</h3>
                <div className="flex justify-between items-center">
                    <div>
                        <IoStarSharp className="text-[#fdc040]" />
                    </div>
                    <p className="text-[#B6B6B6]">({rating})</p>
                </div>
                <h5 className={`${lato.className} text-[#B6B6B6] font-bold`}>
                    By <span className="text-[#3BB77E]">{name}</span>
                </h5>
                <div className="text-[#3BB77E] flex justify-between items-center">
                    <h3 className={`${quicksand.className}`}>${price}</h3>
                    <div className={`${lato.className}`}>
                        <button className="bg-[#DEF9EC] flex justify-center items-center px-3 py-2 gap-2 font-extrabold hover:bg-[#c8f1db] hover:text-black hover:shadow-lg transition-all duration-300 rounded-lg">
                            <BsCart3 />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

