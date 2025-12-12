"use client";

import React, { useEffect, useRef } from "react";
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
    name: "model",
    src: "/products/model.png",
    link: "/products",
    headline: "Iconic Look. Anime Energy.",
    subheadline:
      "The perfect blend of street fashion and anime culture in every hoodie.",
  },
  {
    name: "Product 1",
    src: "/products/product1.png",
    headline: "Naruto Ninja Symbols Hoodie",
    subheadline:
      "Celebrate the spirit of Naruto with iconic symbols and a bold character graphic.",
    link: "/products/product1",
  },
  {
    name: "Product 2",
    src: "/products/product2.png",
    headline: "One Piece Straw Hat Pirates Hoodie",
    subheadline:
      "Join Luffy’s crew with this vibrant Straw Hat Jolly Roger design.",
    link: "/products/product2",
  },
  {
    name: "Product 3",
    src: "/products/product3.png",
    headline: "Attack on Titan Scout Regiment Hoodie",
    subheadline:
      "Represent the Survey Corps with the legendary Wings of Freedom emblem.",
    link: "/products/product3",
  },
  {
    name: "Product 4",
    src: "/products/product4.png",
    headline: "My Hero Academia Heroes Hoodie",
    subheadline:
      "Show your love for the U.A. heroes with this bold, action-packed print.",
    link: "/products/product4",
  },
  {
    name: "Product 5",
    src: "/products/product5.png",
    headline: "Classic One Piece Logo Hoodie",
    subheadline:
      "A clean and stylish look featuring the iconic Straw Hat Pirates logo.",
    link: "/products/product5",
  },
  {
    name: "Product 6",
    src: "/products/collection.png",
    headline: "Get your collection",
    subheadline: "Take professional-quality photos with ease",
    link: "/products",
  },
];

export default function Hero() {
  const carouselNextRef = useRef(null);
  const autoplayRef = useRef(null);

  // ⭐ AUTOPLAY FUNCTION
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      if (carouselNextRef.current) {
        carouselNextRef.current.click();
      }
    }, 3000); // 3 sec
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <section className="w-full">
      <div
        onMouseEnter={stopAutoplay} // 🛑 Pause autoplay on hover
        onMouseLeave={startAutoplay} // ▶ Resume autoplay
        className="relative w-full"
      >
        <Carousel>
          <CarouselContent className="m-4 gap-4">
            {heroProd.map((product, index) => (
              <CarouselItem
                key={index}
                style={{
                  backgroundImage: `url(${product.src})`,
                  backgroundSize: "covers",
                  backgroundPosition: "center",
                }}
                className="h-screen sm:h-[600px] xl:h-[700px] relative rounded-2xl overflow-hidden"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Text + Button */}
                <div className="absolute top-10 left-10 text-black max-w-lg">
                  {product.headline && (
                    <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-md">
                      {product.headline}
                    </h2>
                  )}

                  {product.subheadline && (
                    <p className="text-lg sm:text-xl opacity-90 mt-2">
                      {product.subheadline}
                    </p>
                  )}

                  {/* SHOP NOW */}
                  <div className="mt-6">
                    <Button className={""}>Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Previous button */}
          <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition">
            Prev
          </CarouselPrevious>

          {/* Next button */}
          <CarouselNext
            ref={carouselNextRef}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
          >
            Next
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
