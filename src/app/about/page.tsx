import AboutComponent from "../components/about/about"
import Section from "../components/heroPart"


export default function About() {
    return (
        <main>
<AboutComponent />
            <Section
                heading="Stay home & get your daily needs from our shop"
                imageSrc="/images/leaf.png"
                text="Start You'r Daily Shopping with Nest Mart"
                bgImg="/images/backgorund.png"
                textSize="text-xl md:text-3xl"
                order2="order-2 md:order-1"
                order1="order-1 md:order-1"
            />
        </main>
    )
}