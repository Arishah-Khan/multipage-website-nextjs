import Image from "next/image";
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
  weight: "400",
});

interface about {
  img: string;
  heading: string;
}

export default function AboutCard({ img, heading }: about) {
  return (
    <section className="bg-white shadow-lg rounded-lg p-2 md:p-6 flex flex-col justify-center items-center max-w-xs mx-auto">
      {/* Image section */}
      <div className="mb-4">
        <Image src={img} alt="about" width={100} height={100} className="rounded-full w-[60px] h-[50px] sm:w-[100px] sm:h-[100px]" />
      </div>

      {/* Heading */}
      <h2 className={`${quicksand.className} text-[#253D4E] font-extrabold text-xs  sm:text-base text-center`}>
        {heading}
      </h2>

      {/* Description */}
      <p className={`${lato.className} text-[#7E7E7E] font-medium text-xs sm:text-sm text-center mt-2`}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>

      {/* Button */}
      <button className="text-[#3BB77E] font-semibold text-xs sm:text-sm  py-2 px-4 rounded-full">
        Read more
      </button>
    </section>
  );
}
