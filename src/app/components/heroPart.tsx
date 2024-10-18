// heroPart.tsx

import { SiMinutemailer } from "react-icons/si";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

interface SectionProps {
    heading: string;
    imageSrc: string;
    text: string;
    bgImg: string;
    textSize: string;
    order1: string;
    order2: string;
}

// Accepting props for heading, image source, text, and background image
export default function Section({ heading, imageSrc, text, bgImg, textSize, order1, order2 }: SectionProps) {
    return (
        <main
            className="bg-custom px-4  md:py-2"
            style={{ backgroundImage: `url(${bgImg})` }} // Apply dynamic background image
        >
            <div className="grid grid-rows-1 md:grid-cols-2 items-center justify-center md:gap-x-20">
                {/* Text Section */}
                <div className={`text-center md:text-left mb-8 md:mb-0 ${order1} py-8`}>
                    <h1 className={`${quicksand.className} text-[#253D4E] ${textSize} py-2`}>
                        {heading} {/* Dynamic Heading */}
                    </h1>
                    <p className={`${lato.className} text-[#7E7E7E] mt-2`}>
                        {text} {/* Dynamic text */}
                    </p>

                    {/* Email Input Section */}
                    <div className="relative mt-4 flex items-center max-w-md mx-auto md:mx-0">
                        {/* Email Icon */}
                        <span className="absolute left-3 text-gray-500">
                            <SiMinutemailer />
                        </span>

                        {/* Email Input Field */}
                        <input
                            type="text"
                            placeholder="Your Email Address"
                            className={`${lato.className} pl-10 pr-4 py-2 w-full text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none`}
                        />

                        {/* Subscribe Button */}
                        <button
                            className={`${lato.className} bg-[#3BB77E] text-white py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-full hover:bg-[#34a266] transition-all duration-300 absolute right-[-10px] sm:right-0`}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className={`${order2}`}>
                    <Image
                        src={imageSrc} // Dynamic Image Source
                        alt={heading} // Dynamic Alt Text
                        width={450} // Larger width
                        height={350} // Larger height
                    />
                </div>
            </div>
        </main>
    );
}
