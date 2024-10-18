import PopularProductCard from "./cards";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "600", // Medium for card titles
});

export default function PopularProducts() {
  return (
    <>
      <h2 className={`${quicksand.className} font-bold text-2xl mb-6 px-6 py-2 mt-5`}>
        Popular Products
      </h2>
      <div className="flex justify-center px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* The cards are displayed in a grid with different columns based on screen size */}
          <PopularProductCard
            image="/images/product1.png"
            heading="Seeds of Change Organic Quinoa, Brown, & Red Rice"
            title="Snack"
            price="28.85"
            rating="4.0"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product2.png"
            heading="All Natural Italian-Style Chicken Meatballs"
            title="Hodo Foods"
            price="52.85"
            rating="3.5"
            name="Stouffer"
          />

          <PopularProductCard
            image="/images/product3.png"
            heading="Angie's Boomchickapop Sweet & Salty Kettle Corn"
            title="Snack"
            price="48.85"
            rating="4.0"
            name="StarKist"
          />

          <PopularProductCard
            image="/images/product4.png"
            heading="Foster Farms Takeout Crispy Classic Buffalo Wings"
            title="Vegetable"
            price="17.85"
            rating="4.0"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product5.png"
            heading="Blue Diamond Almonds Lightly Salted Vegetables"
            title="Pet Foods"
            price="23.85"
            rating="4.0"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product6.png"
            heading="Chobani Complete Vanilla Greek Yogurt"
            title="Hodo Foods"
            price="54.85"
            rating="3.8"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product7.png"
            heading="Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g"
            title="Meats"
            price="32.85"
            rating="4.0"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product8.png"
            heading="Encore Seafoods Stuffed Alaskan Salmon"
            title="Snack"
            price="35.85"
            rating="4.0"
            name="NestFood"
          />

          <PopularProductCard
            image="/images/product9.png"
            heading="Gorton's Beer Battered Fish Fillets with soft paper"
            title="Coffees"
            price="23.5"
            rating="4.2"
            name="Old El Paso"
          />

          <PopularProductCard
            image="/images/product10.png"
            heading="Haagen-Dazs Caramel Cone Ice Cream Ketchup"
            title="Cream"
            price="22.85"
            rating="2.0"
            name="Tyson"
          />
        </div>
      </div>
    </>
  );
}
