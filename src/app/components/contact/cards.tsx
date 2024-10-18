import { SlLocationPin } from "react-icons/sl";
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


interface contactCard {
    title: string
}

export default function ContactCard(
    { title }: contactCard
) {
    return (
        <>

    
            <div className="flex flex-col justify-center items-start gap-4 px-12">
                <h2 className={`${quicksand.className} text-[#3BB77E] text-base md:text-xl font-bold`}>{title}</h2>
                <div className={`${lato.className} text-[#7E7E7E] text-sm md:text-base text-start`}>
                    <p>205 North Michigan Avenue, Suite 810</p>
                    <p>Chicago, 60601, USA</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@Evara.com</p>
                </div>
                <button className={`${quicksand.className} text-white bg-[#3BB77E] flex gap-2 text-sm md:text-sm justify-center items-center p-2 hover:bg-[#2DAE6B] hover:text-black`}>
                    <SlLocationPin className=" font-bold" />
                    View map
                </button>
            </div>
        </>
    )
}