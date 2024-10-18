import Section from "./heroPart";

export default function HeroSec() {
  return (
    <Section 
      heading={`Don't miss amazing grocery deals`} // Use backticks for template literals
      imageSrc="/images/fruitbasket.jpg"
      text="Sign up for the daily newsletter"
      bgImg="/images/Section.png"
      textSize="text-3xl md:text-4xl"
      order1="order-2 md:order-1"
      order2="order-1 md:order-2"
    />
  );
}
