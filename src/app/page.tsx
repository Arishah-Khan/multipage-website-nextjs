import HeroSec from "./components/heroSec";
import Categories from "./components/categories";
import PopularProduct from "./components/popular-products/popular-product";
import DealCardsPrduct from "./components/deals/deal-cards";
import ShoppingSec from "./components/shopping";


export default function Home() {
  return (
    <>
      <HeroSec />
      <Categories />
      <PopularProduct />
      <DealCardsPrduct />
      <ShoppingSec />
    </>
  )
}
