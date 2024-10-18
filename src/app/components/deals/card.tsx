import { IoStarSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";

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
    heading: string;
    price: string;
    rating: string;
    name: string;
}

export default function DealCard({
    heading,
    price,
    rating,
    name,
}: productsCard) {
    return (
        <div className=" sm:w-full w-[200px] h-[120px] "> {/* Add overflow-hidden to prevent content overflow */}
            {/* Set a consistent card height and flex for vertical alignment */}
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 sm:p-4 h-full flex flex-col justify-center">
                <h3 className={`${quicksand.className} text-[#253D4E] font-extrabold text-xs sm:text-sm `}> {/* Add truncate for long text */}
                    {heading}
                </h3>
                <div className="flex justify-between items-center">
                    <div>
                        <IoStarSharp className="text-[#fdc040]" />
                    </div>
                    <p className="text-[#B6B6B6]">({rating})</p>
                </div>
                <h5 className={`${lato.className} text-[#B6B6B6] font-bold text-xs sm:text-sm`}>
                    By <span className="text-[#3BB77E]">{name}</span>
                </h5>
                <div className="text-[#3BB77E] flex justify-between items-center">
                    <h3 className={`${quicksand.className} text-xs sm:text-sm`}>${price}</h3>
                    <div className={`${lato.className}`}>
                        <button className="bg-[#DEF9EC] flex justify-center items-center px-2 sm:px-3 py-1 gap-2 font-extrabold hover:bg-[#c8f1db] hover:text-black hover:shadow-lg transition-all duration-300 rounded-lg text-xs sm:text-sm">
                            <BsCart3 />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
