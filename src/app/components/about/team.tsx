import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
});

export default function Team() {
    return (
        <section className={`bg-[#4B675A] bg-[url("/images/Main.png")] bg-cover bg-center bg-blend-overlay bg-no-repeat ${quicksand.className} text-white py-20 px-2 `}>
            
            {/* Container with flex layout */}
            <div className="grid grid-cols-5 justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-base md:text-3xl">0+</h1>
                    <h4 className="font-light text-xs md:text-base">Glorious years</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-base md:text-3xl">0+</h1>
                    <h4 className="font-light text-xs md:text-base">Happy clients</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-base md:text-3xl">0+</h1>
                    <h4 className="font-light text-xs md:text-base">Projects complete</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-base md:text-3xl">0+</h1>
                    <h4 className="font-light text-xs md:text-base">Team advisor</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-base md:text-3xl">0+</h1>
                    <h4 className="font-light text-xs md:text-base">Products Sale</h4>
                </div>
            </div>
        </section>
    );
}
