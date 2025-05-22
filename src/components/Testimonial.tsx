"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";

const countryMap: Record<string, string> = {
  ke: "Kenya",
  ng: "Nigeria",
  za: "South Africa",
  ma: "Morocco",
  gh: "Ghana",
};

export default function Testimonials() {
  const t = useTranslations("HomePage.testimonials");
  const items = t.raw("items") as {
    quote: string;
    name: string;
    position: string;
    country: keyof typeof countryMap;
  }[];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > active ? "right" : "left");
    setActive(index);
  };

  const testimonial = items[active];
  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#7FC242] mx-auto mt-4"></div>
        </div>
        <div className="relative overflow-hidden">
          <div
            key={active}
            className={cn(
              "bg-gray-50 p-8 rounded-2xl shadow-md transition-transform duration-500 ease-in-out",
              direction === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            )}
          >
            <Quote className="w-10 h-10 text-gray-300 mb-4 mx-auto" />
            <p className="text-xl italic text-gray-700 mb-6">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center justify-center space-x-4">
              <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg uppercase">
                {initials}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Image
                    width={24}
                    height={24}
                    src={`/assets/images/${testimonial.country}.png`}
                    alt={countryMap[testimonial.country]}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <span className="text-sm text-green-600 font-medium">
                    {countryMap[testimonial.country]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  active === index ? "bg-[#7FC242]" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
