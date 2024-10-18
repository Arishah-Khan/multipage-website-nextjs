import Image from "next/image";
import { Lato } from "next/font/google";
import { Quicksand } from "next/font/google";

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

interface BlogCardProps {
    image: string;
    title: string;
    description: string; // Corrected the spelling of 'description'
}

export default function BlogCard({ image, title, description }: BlogCardProps) {
    return (
        <section className="bg-white rounded-lg shadow-md max-w-[300px] mx-auto"> {/* Added max-w-xs and mx-auto for centering */}
           
                <Image
                    src={image}
                    alt={title}
                    width={180}
                    height={180}
                    className="w-full h-40 object-cover rounded-t-lg " // Ensures the image covers the area with a fixed height and maintains aspect ratio
                />
        
            <div className="p-6 flex flex-col justify-center items-start "> {/* Changed items-center to items-start for left alignment */}
                <h3 className={`${quicksand.className} text-[#B6B6B6] text-sm sm:text-base font-semibold mb-1`}>{title}</h3>
                <h2 className={`${quicksand.className} text-[#253D4E] text-base sm:text-lg md:text-xl mb-3 text-left`}>{description}</h2> {/* Changed text-center to text-left for consistency */}
                <div>
                    <ul className={`${lato.className} text-[#7E7E7E] flex gap-2 justify-between text-xs sm:text-sm`}>
                        <li>25 April 2022</li>
                        <li>126k Views</li>
                        <li>4 mins read</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
