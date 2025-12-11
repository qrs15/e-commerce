"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const heroProd = [
  {
    name: "Product 1",
    src: "/products/product1.jpg",
    headline: "Premium Headphones",
    subheadline: "Experience crystal-clear sound with our latest model",
  },
  {
    name: "Product 2",
    src: "/products/product2.jpg",
    headline: "Smart Watch",
    subheadline: "Track your fitness and stay connected on the go",
  },
  {
    name: "Product 3",
    src: "/products/product3.jpg",
    headline: "Wireless Speaker",
    subheadline: "Bring your music anywhere with powerful sound",
  },
  {
    name: "Product 4",
    src: "/products/product4.jpg",
    headline: "Gaming Mouse",
    subheadline: "Precision and speed for pro-level gaming",
  },
  {
    name: "Product 5",
    src: "/products/product5.jpg",
    headline: "Laptop Backpack",
    subheadline: "Carry your devices safely and stylishly",
  },
  {
    name: "Product 6",
    src: "/products/product6.jpg",
    headline: "Smartphone Lens Kit",
    subheadline: "Take professional-quality photos with ease",
  },
];

export default function Hero() {
  const carouselNextRef = useRef(null);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselNextRef.current) {
        carouselNextRef.current.click();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 bg-background">
      {/* Main Headline */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold md:text-5xl">
          Featured <span className="text-destructive">Products</span>
        </h1>
        <p className="mt-2 text-gray-600 text-lg md:text-xl">
          Discover our top picks and bestsellers
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        <Carousel className="overflow-hidden">
          <CarouselContent className="flex gap-6">
            {heroProd.map((product, index) => (
              <CarouselItem
                key={index}
                className="shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
                  <Image
                    src={product.src}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                    loading="eager"
                  />
                  <h2 className="mt-3 text-lg font-semibold text-center">
                    {product.headline}
                  </h2>
                  <p className="text-gray-500 mt-1 text-center">
                    {product.subheadline}
                  </p>
                  <Button className="m-2">Add To cart</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Arrows */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
            Prev
          </CarouselPrevious>
          <CarouselNext
            ref={carouselNextRef} // <-- ref for autoplay
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
          >
            Next
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
