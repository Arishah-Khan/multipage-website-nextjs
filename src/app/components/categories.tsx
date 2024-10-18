import CategoriesCard from "./cateogories-card";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import ThreeCards from "./threeCard";


// Importing the Quicksand and Lato fonts with proper weights and settings
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "700", // Bold for headings
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400", // Regular for body text
});

export default function Categories() {
  return (
    <>
      <div className=" px-6 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className={`${quicksand.className} font-bold text-2xl`}>
            Featured Categories
          </h2>
          <ul className={`flex flex-wrap gap-4 mt-4 md:mt-0 ${lato.className} text-gray-600 text-base`}>
            <li className="text-[#3BB77E] transition duration-300 hover:underline hover:scale-105 hover:text-[#2A945B]">
              Cake & Milk
            </li>
            <li className="text-[#3BB77E] transition duration-300 hover:underline hover:scale-105 hover:text-[#2A945B]">
              Coffees & Teas
            </li>
            <li className="text-[#3BB77E] transition duration-300 hover:underline hover:scale-105 hover:text-[#2A945B]">
              Pet Foods
            </li>
            <li className="text-[#3BB77E] transition duration-300 hover:underline hover:scale-105 hover:text-[#2A945B]">
              Vegetables
            </li>
          </ul>

        </div>

        {/* Cards Section */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3">
          <CategoriesCard
            imageSrc="/images/Link → cat-13.png"
            bgColor="bg-[#F2FCE4]"
            title="Cake & Milk"
            itemCount={26}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-12.png"
            bgColor="bg-[#FFFCEB]"
            title="Organic Kiwi"
            itemCount={28}
          />
          <CategoriesCard
            imageSrc="/images/peaches.png"
            bgColor="bg-[#ECFFEC]"
            title="Peach"
            itemCount={14}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-9.png"
            bgColor="bg-[#FEEFEA]"
            title="Red Apple"
            itemCount={54}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-3.png"
            bgColor="bg-[#FFF3EB]"
            title="Snack"
            itemCount={56}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-1.png"
            bgColor="bg-[#FFF3FF]"
            title="Cabbage"
            itemCount={72}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-2.png"
            bgColor="bg-[#F2FCE4]"
            title="Strawberry"
            itemCount={36}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-4.png"
            bgColor="bg-[#FEEFEA]"
            title="Black Plum"
            itemCount={123}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-5.png"
            bgColor="bg-[#FFFCEB]"
            title="Custard Apple"
            itemCount={34}
          />
          <CategoriesCard
            imageSrc="/images/Link → cat-14.png"
            bgColor="bg-[#FEEFEA]"
            title="Coffee & Tea"
            itemCount={89}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center m-4">
  <ThreeCards
    title="Everyday Fresh & Clean with Our Products"
    image="/images/banner-1.png"
    bgColour="bg-[#f0e8d5]" // Use predefined class
  />
  <ThreeCards
    title="Make your Breakfast Healthy and Easy"
    image="/images/banner-2 .png" // Removed extra space
    bgColour="bg-[#f3e8e8]" // Use predefined class
  />
  <ThreeCards
    title="The best Organic Products Online"
    image="/images/banner-3 .png" // Removed extra space
    bgColour="bg-[#e7eaf3]" // Use predefined class
  />
</div>

    </>
  );
}
