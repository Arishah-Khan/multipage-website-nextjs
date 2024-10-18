import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import Image from "next/image";
import ContactCard from "./cards";
import ContactForm from "./contactform";
import Section from "../heroPart";

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

export default function Contact() {
  return (
    <>
      <h3 className={`${quicksand.className} text-[#3BB77E] py-3 mx-8 mt-6`}>
        How can we help you?
      </h3>

      {/* Grid Container with Responsive Breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

        {/* First div taking 2 rows */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col gap-4 px-4">
          <h1 className={`${quicksand.className} text-[#253D4E] text-xl md:text-2xl font-extrabold`}>
            Let us know how we can help you
          </h1>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Rest of the divs, adjusting column spans for responsiveness */}
        <div className="col-span-1 px-3">
          <h3 className={`${quicksand.className} text-[#253D4E] py-2`}>01. Visit Feedback</h3>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="col-span-1 px-3">
          <h3 className={`${quicksand.className} text-[#253D4E] py-2`}>02. Employer Services</h3>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="col-span-1 px-3">
          <h3 className={`${quicksand.className} text-[#3BB77E] py-2`}>03. Billing Inquiries</h3>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="col-span-1 px-3">
          <h3 className={`${quicksand.className} text-[#253D4E] py-2`}>04. General Inquiries</h3>
          <p className={`${lato.className} text-[#7E7E7E] text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="py-6">
        <Image
          src="/images/map.png"
          alt="map"
          width={500}
          height={900}

          className="w-full h-[180px] md:h-auto"
        />
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 py-3 md:py-6">
        <div className="text-center">
          <ContactCard
            title="Office"
          />
        </div>

        <div className="text-center">
          <ContactCard
            title="Studio"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1 text-center flex md:justify-center">
          <ContactCard
            title="Shop"
          />
        </div>
      </div>

      <div>
<ContactForm />
      </div>

      <div>
        <Section
          heading="Stay home & get your daily needs from our shop"
          imageSrc="/images/leaf.png"
          text="Start You'r Daily Shopping with Nest Mart"
          bgImg="/images/footer.png"
          textSize="text-xl md:text-3xl"
           order2="order-2 md:order-1"
      order1="order-1 md:order-1"
        />
      </div>
    </>
  );
}
