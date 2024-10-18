import { FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
});

const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: "300",
});

export default function BlogHeroSection() {
    return (
        <section className={`bg-[url("/images/footer.png")] bg-cover bg-center grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center px-5 py-10 md:px-10 md:py-16 rounded-lg`}>
            <div>
                <h1 className={`${quicksand.className} text-[#253D4E] text-lg md:text-3xl mb-4 md:mb-6`}>Blog & News</h1>
                
                {/* Flex container for Home and Blog text */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                    <h4 className={`${lato.className} text-[#3BB77E] flex gap-1 md:gap-2 justify-center items-center text-sm md:text-base`}>
                        <FaHome /> Home
                    </h4>
                    <h4 className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>Blog & News</h4>
                </div>
            </div>
            
            <div>
                <ul className="flex flex-wrap gap-2 md:gap-3">
                    <li className="text-[#3BB77E] ">
                        <span className="bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-xs md:text-sm">
                            <RxCross2 /> Shopping
                        </span>
                    </li>
                    <li className="text-[#253D4E]">
                        <span className="bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-xs md:text-sm">
                            <RxCross2 /> Recipes
                        </span>
                    </li>
                    <li className="text-[#3BB77E]">
                        <span className="bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-xs md:text-sm">
                            <RxCross2 /> Kitchen
                        </span>
                    </li>
                    <li className="text-[#3BB77E]">
                        <span className="bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-xs md:text-sm">
                            <RxCross2 /> News
                        </span>
                    </li>
                    <li className="text-[#3BB77E]">
                        <span className="bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-xs md:text-sm">
                            <RxCross2 /> Food
                        </span>
                    </li>                  
                </ul>
            </div>
        </section>
    );
}
