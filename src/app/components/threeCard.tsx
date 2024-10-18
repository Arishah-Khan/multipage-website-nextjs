import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "700", // Bold for headings
});

interface ThreeCards {
  title: string;
  image: string;
  bgColour: string; // This should match the predefined classes
}

export default function ThreeCard({
  title,
  image,
  bgColour,
}: ThreeCards) {
  return (
    <div
      className={`${quicksand.className} grid grid-cols-2 items-center px-4 h-52 md:h-60 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ${bgColour} mx-auto max-w-[340px] md:max-w-[390px] w-full my-4`} // Added transition classes for hover effect
    >
      <div className="flex flex-col items-start justify-center h-full px-3">
        <h2 className="text-[#253D4E] font-extrabold text-lg sm:text-xl md:text-2xl mb-4 text-left">
          {title}
        </h2>
        <div>
          <button className="text-white bg-[#3BB77E] hover:bg-[#2a955b] rounded px-2 md:px-4 py-1 sm:py-2 transition-colors duration-300 ease-in-out">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex justify-center items-center h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300} // Reduced width for smaller images
          height={200} // Adjusted height to maintain aspect ratio
          className="object-cover" // Ensures the image fits the container
        />
      </div>
    </div>
  );
}
