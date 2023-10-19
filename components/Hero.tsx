"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">

      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a hotel and restaurant super easy!
        </h1>

        <p className="hero__subtitle">
          Find your travel destination and experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Places"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="relative shadow-xl sm:overflow-hidden">
        <div className="absolute inset-0">
          {/* Replace with your image source */}
          <Image
            priority
            fill
            className="h-full w-full object-cover"
            src="/Sapa1.jpg"
            alt="explore"
          />
          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide text-orange-600">
            Easy way to explore the world
          </p>
          <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
            <span className="block text-white">Life is better with</span>
            <span className="block text-orange-500">travel</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
