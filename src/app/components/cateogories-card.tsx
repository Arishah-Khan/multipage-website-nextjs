import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";

// Importing Quicksand and Lato fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "500", // Medium for card titles
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "300", // Light for item count
});

interface CategoriesCardProps {
  imageSrc: string;
  bgColor: string;
  title: string;
  itemCount: number;
}

export default function CategoriesCard({
  imageSrc,
  bgColor,
  title,
  itemCount,
}: CategoriesCardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-300 ${bgColor} flex flex-col items-center p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`} // Added transition and hover effects
      style={{ maxHeight: "220px" }} // Setting a max height for the card
    >
      <div className="flex justify-center w-full h-[50px]"> {/* Restricting the image size */}
        <Image
          src={imageSrc}
          alt={title}
          width={80}  // Setting width and height of the images
          height={80}
          className="object-contain"
        />
      </div>
      <h4
        className={`text-base font-medium mt-2 text-center text-[#253D4E] ${quicksand.className}`}
      >
        {title}
      </h4>
      <p className={`text-[#7E7E7E] text-center text-sm ${lato.className}`}>
        {itemCount} items
      </p>
    </div>
  );
}
