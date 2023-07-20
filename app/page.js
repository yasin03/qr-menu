"use client"
import Carousel from "@/components/carousel/Carousel";
import HomeContact from "@/components/contact/HomeContact";
import Products from "@/components/products/Products";

export default function Home() {
  

  return (
    <main className="overflow-hidden ">
      <Carousel />
      <HomeContact/>
      <Products />
    </main>
  );
}
