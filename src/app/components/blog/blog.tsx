
import Section from "../heroPart"
import BlogHeroSection from "./blog-hero-sec";
import BlogCard from "./blog-card";

const cards = [
    {
        image: "/images/card1.png",
        title: "Side Dish",
        description: "The Intermediate Guide to Healthy Food",
    },
    {
        image: "/images/card2.png",
        title: "Soups and Stews",
        description: "Summer Quinoa Salad Jars with Lemon Dil",
    },
    {
        image: "/images/card3.png",
        title: "Salad",
        description: "Caprese Chicken with Smashed Potatoe",
    },
    {
        image: "/images/card4.png",
        title: "Dessert",
        description: "Harissa Chickpeas with Whipped Feta",
    },
    {
        image: "/images/card5.png",
        title: "Breakfast",
        description: "Almond Butter Chocolate Chip Zucchini Bars",
    },
    {
        image: "/images/card6.png",
        title: "Vegan",
        description: "Smoky Beans & Greens Tacos with Aji Verde",
    },
    {
        image: "/images/card7.png",
        title: "Gluten Free",
        description: "Sticky Ginger Rice Bowls with Pickled Veg",
    },
    {
        image: "/images/card8.png",
        title: "Side Dish",
        description: "Creamy Garlic Sun-Dried Tomato Pasta",
    },
    {
        image: "/images/card9.png",
        title: "Dairy Free",
        description: "The Absolute Easiest Spinach and Pizza",
    },
    {
        image: "/images/card10.png",
        title: "Salad",
        description: "Sticky Ginger Rice Bowls with Pickled",
    },
    {
        image: "/images/card11.png",
        title: "Vegetarian",
        description: "The litigants on the screen are not actors",
    },
    {
        image: "/images/card12.png",
        title: "Vegetarian",
        description: "The litigants on the screen are not actors",
    },
];

export default function BlogComponent() {
    return (
        <section>
            {/* Render BlogHeroSection */}
            <BlogHeroSection />

            {/* Render BlogCard for each item in the cards array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-20">
                {cards.map((card, index) => (
                    <BlogCard
                        key={index} // Assign a unique key for each card
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div>
                <Section
                    heading="Stay home & get your daily needs from our shop"
                    imageSrc="/images/leaf.png"
                    text="Start You'r Daily Shopping with Nest Mart"
                    bgImg="/images/backgorund.png"
                    textSize="text-xl md:text-3xl"
                    order2="order-2 md:order-1"
                    order1="order-1 md:order-1"
                />
            </div>
        </section>
    );
}



