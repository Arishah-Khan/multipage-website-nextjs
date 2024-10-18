import { SiMinutemailer } from "react-icons/si";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function ShoppingSec() {
  return (
    <main className="bg-[url('/images/footer.png')] bg-cover bg-center px-4 md:pt-16">
      <div className="grid grid-rows-1 md:grid-cols-2  items-center justify-center  md:gap-x-20">
        {/* Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-8 py-10 px-4">
          <h1 className={`${quicksand.className} text-[#253D4E] text-2xl md:text-3xl `}>
          Stay home & get your daily needs from our shop
          </h1>
          <p className={`${lato.className} text-[#7E7E7E] mt-2`}>
          Start {`You'r`} Daily Shopping with <span className="text-[#3BB77E]"> Nest Mart </span>
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
        <div>
          <Image
            src="/images/banner-9.png"
            alt="delievery-banner"
            width={450} // Larger width
            height={400} // Larger height

          />
        </div>
      </div>
    </main>
  );
}
