import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_65px)] relative">
      <div className="absolute top-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image alt="" src="/pizza.jpg" fill className="object-cover " />
        </div>
        <div className="w-full h-full bg-gradient-to-r from-black  absolute top-0 opacity-70"></div>
        <div
          className="absolute top-1/3  px-8 md:px-20 py-4 text-4xl sm:text-6xl md:text-8xl font-bold text-white underline underline-offset-4 decoration-rose-500 transition-all
        "
        >
          Best Pizza
        </div>
      </div>
    </div>
  );
};

export default Carousel;
