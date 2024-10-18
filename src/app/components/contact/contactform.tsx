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

export default function ContactForm() {
    return (
        <section className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
            {/* Contact Form */}
            <div>
                <h4 className={`${quicksand.className} text-[#3BB77E] text-base md:text-lg font-semibold mb-2`}>Contact Form</h4>
                <h2 className={`${quicksand.className} text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#253D4E]`}>Drop Us a Line</h2>
                <p className={`mb-6 ${lato.className} text-[#B6B6B6] text-sm md:text-base `}>Your email address will not be published. Required fields are marked *</p>

                {/* Form */}
                <form className="space-y-4">
                    {/* First Row: First Name and Email */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${lato.className} text-[#838383]`}>
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="First Name *"
                                className={`w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] transition-colors duration-200 hover:border-[#3BB77E] ${lato.className} text-[#838383]`}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                required
                                placeholder="Your Email *"
                                className={`w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] transition-colors duration-200 hover:border-[#3BB77E] ${lato.className} text-[#838383]`}
                            />
                        </div>
                    </div>

                    {/* Second Row: Phone and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className={`w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] transition-colors duration-200 hover:border-[#3BB77E] ${lato.className} text-[#838383]`}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className={`w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] transition-colors duration-200 hover:border-[#3BB77E] ${lato.className} text-[#838383]`}
                            />
                        </div>
                    </div>

                    {/* Message Row */}
                    <div>
                        <textarea
                            required
                            placeholder="Message *"
                            className={`w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] transition-colors duration-200 hover:border-[#3BB77E] ${lato.className} text-[#838383]`}
                            rows={4} // Pass rows as a number
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-[#253D4E] text-white px-4 py-2 rounded hover:bg-[#2DAE6B] transition duration-200 ease-in-out text-sm md:text-base hover:text-black"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center">
                <Image src="/images/contact.png" alt="contact" width={300} height={300} className="object-contain" />
            </div>
        </section>
    );
}
