import Image from "next/image"
import { SlLocationPin } from "react-icons/sl";
import { ImHeadphones } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { CiClock2 } from "react-icons/ci";
import { Lato } from "next/font/google";
import { Quicksand } from "next/font/google";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";



const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});
const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
});

export default function Footer() {
    return (
        <>
            <div className="text-[#253D4E] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 px-5 py-8 my-8  border-b border-[#3BB77E]">
                <div className={`${lato.className} text-xs sm:text-sm md:text-base flex flex-col gap-2 col-span-2 lg:col-span-2`}>
                    <Image src="/images/logo.png" width={180} height={180} alt="logo" />
                    <h5>Awesome grocery store website template</h5>
                    <p className="flex gap-3 items-center">
                        <SlLocationPin className="text-[#3BB77E] text-2xl font-bold" />
                        <span className="font-bold">Address: </span>
                        5171 W Campbell Ave undefined Kent, Utah 53127 United States
                    </p>

                    <p className="flex gap-3 items-center">
                        <ImHeadphones className="text-[#3BB77E] text-base" />
                        <span className="font-bold">Call Us: </span>
                        (+91) - 540-025-124553
                    </p>

                    <p className="flex gap-3 items-center">
                        <SiMinutemailer className="text-[#3BB77E] text-xl" />
                        <span className="font-bold">
                            Email: </span>
                        sale@Nest.com
                    </p>

                    <p className="flex gap-3 items-center">
                        <CiClock2 className="text-[#3BB77E] text-xl" />
                        <span className="font-bold">
                            Hours: </span>
                        10:00 - 18:00, Mon - Sat
                    </p>
                </div>

                <div>
                    <h2 className={`${quicksand.className} text-base sm:text-lg font-bold py-4`}>
                        Company
                    </h2>
                    <ul className="flex flex-col text-xs sm:text-sm  md:text-base gap-2">
                        <li>About Us</li>
                        <li>Delievery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                        <li>Careers</li>
                    </ul>

                </div>

                <div>
                    <h2 className={`${quicksand.className}  text-base sm:text-lg font-bold py-4`}>
                        Account
                    </h2>
                    <ul className="flex flex-col text-xs sm:text-sm  md:text-base gap-2">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Track My Order</li>
                        <li>Help Ticket</li>
                        <li>Shipping Details</li>
                        <li>Compare products</li>
                    </ul>

                </div>

                <div>
                    <h2 className={`${quicksand.className} text-base sm:text-lg font-bold py-4`}>
                        Corporate
                    </h2>
                    <ul className="flex flex-col text-xs sm:text-sm  md:text-base gap-2">
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Farm Business</li>
                        <li>Farm Careers</li>
                        <li>Our Suppliers</li>
                        <li>Accessibility</li>
                        <li>Promotions</li>
                    </ul>
                </div>


                <div>
                    <h2 className={`${quicksand.className} text-base sm:text-lg font-bold py-4`}>
                        Popular
                    </h2>
                    <ul className="flex flex-col text-xs sm:text-sm  md:text-base gap-2">
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Eggs Substitutes</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Tea & Kombucha</li>
                        <li>Cheese</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className={`${quicksand.className} text-lg font-bold pt-4 pb-6`}>
                        Install App
                    </h2>
                    <div className="flex gap-4">
                        <Image src="/images/google-play.png" width={120} height={40} alt="google-play" />
                        <Image src="/images/apple-app-store.png" width={120} height={40} alt="apple-app-store" />
                    </div>
                    <p className="text-base">Secured Payment Gateways</p>

                </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-between">
                {/* Footer Text */}
                <div className={`text-[#7E7E7E] ${lato.className} text-center`}>
                    <p>© 2022, <span className="text-[#3BB77E]">Nest</span> - HTML Ecommerce Template All rights reserved</p>
                </div>

                {/* Support Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/phone.png"
                                alt="headphone"
                                width={36}
                                height={38}
                            />
                        </div>
                        <div>
                            <h3 className="text-[#3BB77E] text-xl font-bold">
                                1900 - 6666
                            </h3>
                            <p className={`${lato.className} text-sm`}>Working 8:00 - 22:00</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/phone.png"
                                alt="headphone"
                                width={36}
                                height={38}
                            />
                        </div>
                        <div>
                            <h3 className="text-[#3BB77E] text-xl font-bold">
                                1900 - 8888
                            </h3>
                            <p className={`${lato.className} text-sm`}>24/7 Support Center</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="text-center lg:text-left">
                    <div className="flex gap-2 items-center justify-center lg:justify-start">
                        <h4 className={`${quicksand.className} text-black font-extrabold`}>Follow Us</h4>
                        <div className="flex gap-2">
                            <div className="text-white bg-[#3BB77E] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                <FaFacebookF />
                            </div>
                            <div className="text-white bg-[#3BB77E] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                <FaTwitter />
                            </div>
                            <div className="text-white bg-[#3BB77E] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                <CiInstagram />
                            </div>
                            <div className="text-white bg-[#3BB77E] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                <IoLogoYoutube />
                            </div>
                        </div>
                    </div>
                    <p className="text-[#7E7E7E]">Up to 15% discount on your first subscribe</p>
                </div>
            </div>

        </>
    )
}