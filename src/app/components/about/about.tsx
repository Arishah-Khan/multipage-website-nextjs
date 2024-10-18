import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import AboutCard from "./card";
import Team from "./team";

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

export default function AboutComponent() {
    return (
        <section>
            <div className="container mx-auto py-6 md:py-10">
                {/* Main container with flex and responsive direction */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center space-y-6 md:space-y-0 ">
                    {/* Image container */}
                    <div>
                        <Image
                            src="/images/about.png"
                            alt="cooking"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                    </div>

                    {/* Text content container */}
                    <div className="pr-4 flex flex-col gap-1 px-2">
                        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#253D4E] ${quicksand.className}`}>Welcome to Nest</h2>
                        <p className={`mb-4 text-[#7E7E7E] text-sm md:text-base ${lato.className}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                        </p>
                        <p className={`mb-4 text-[#7E7E7E] text-sm md:text-base ${lato.className}`}>
                            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
                        </p>

                        {/* Images grid (responsive) */}
                        <div className="flex flex-row justify-around items-center mt-4 gap-2">
                            <Image src="/images/about-2.png" alt="recipe" width={100} height={130} />
                            <Image src="/images/about-3.png" alt="recipe" width={100} height={130} />
                            <Image src="/images/about-4.png" alt="recipe" width={100} height={130} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <h2 className={`text-center ${quicksand.className} text-xl text-extrabold text-[#253D4E] pb-8`}>
                    What We Provide?
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                    <AboutCard img="/images/icon-1.svg fill.png" heading="Best Prices & Offers" />
                    <AboutCard img="/images/icon-2.svg fill.png" heading="Wide Assortment" />
                    <AboutCard img="/images/icon-3.svg fill.png" heading="Free Delivery" />
                    <AboutCard img="/images/icon-4.svg fill.png" heading="Easy Returns" />
                    <AboutCard img="/images/icon-5.svg fill.png" heading="100% Satisfaction" />
                    <AboutCard img="/images/icon-6.svg fill.png" heading="Great Daily Deal" />
                </div>
            </div>

            <div>
                <Team />
            </div>
            <div className="py-8">
                <h2 className={`py-3 text-base sm:text-xl md:text-2xl font-medium text-center mb-4 text-[#253D4E] ${quicksand.className}`}>Our Team</h2>

                <div className="pr-4 grid-cols-1 grid lg:grid-cols-2 justify-center items-center gap-4 px-8">

                    <div className="order-2 md:order-1">
                        <h2 className={`py-3 text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#253D4E] ${quicksand.className}`}>Meet Our Expert Team</h2>
                        <p className={`mb-4 text-[#7E7E7E] text-sm md:text-base ${lato.className}`}>
                            Proin ullamcorper pretium orci. Donec necscele risque leo.
                            Nam massa dolor imperdiet neccon sequata congue idsem.
                            Maecenas malesuada faucibus finibus.
                        </p>
                        <p className={`mb-4 text-[#7E7E7E] text-sm md:text-base ${lato.className}`}>
                            Proin ullamcorper pretium orci. Donec necscele risque leo.
                            Nam massa dolor imperdiet neccon sequata congue idsem.
                            Maecenas malesuada faucibus finibus.
                        </p>

                        <button className={`${quicksand.className} text-white bg-[#3BB77E] flex gap-2 text-sm md:text-sm justify-center items-center p-2 hover:bg-[#2DAE6B] hover:text-black`}>
                            View All Members
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center order-1 md:order-2">
                        <Image src="/images/Main (1).png" alt="team" width={300} height={250} className="w-[270px] h-[290px]" />

                        <Image src="/images/Main (2).png" alt="team" width={300} height={250} className="w-[270px] h-[290px]" />
                    </div>

                </div>
            </div>
        </section >
    );
}
