"use client";
import Link from "next/link";
import { useState } from "react";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

export default function EcommerceProject() {
  const images = ["/meteo1.png","/meteo2.png"];
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  return (
    <div className="min-h-screen w-full font-sans font-bold px-24 py-20 bg-[#EBEBEB]">
      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-5xl mb-4 text-[#E83F6F]">Weather App</h1>

        <p className="text-lg opacity-80 max-w-2xl">
          This is my first project — a simple weather app. I put it here to
          always remember my beginnings and see how far I’ve come.
        </p>

        <div className="flex gap-4 mt-6 text-sm">
          <span className="px-3 py-1 bg-orange-200 rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-orange-200 rounded-full">
            JavaScript
          </span>
        </div>

        <div className="flex gap-6 mt-8 text-base">
          <Link href="https://github.com/MateiStefan611/WeatherApp" target="_blank" className="underline">
            GitHub Repository
          </Link>
        </div>
      </section>

      {/* PREVIEW */}
      <section className="mb-24">
        <div className="relative w-full h-[850px]  rounded-3xl overflow-hidden flex items-center justify-center">
          <img
            src={images[index]}
            alt="Project preview"
            className="object-fill"
          />

          {/* Stânga */}
          <button
            onClick={prev}
            className="absolute left-4 hover: cursor-pointer p-4 rounded-full text-5xl"
          >
            <LuArrowBigLeft className="text-[#E83F6F]" />
          </button>

          {/* Dreapta */}
          <button
            onClick={next}
            className="absolute right-4 p-4 hover: cursor-pointer rounded-full text-5xl"
          >
            <LuArrowBigRight className="text-[#E83F6F]" />
          </button>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="grid grid-cols-2 gap-20 mb-24">
        <div>
          <h2 className="text-2xl mb-4">Problem</h2>
          <p className="opacity-80 leading-relaxed">
            I dont know the temperature outside and I want to check it quickly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl mb-4">Solution</h2>
          <p className="opacity-80 leading-relaxed">
            I built a simple weather app using Next.js that allows users to
            enter a city name and get the current temperature and weather
            conditions.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mb-24">
        <h2 className="text-2xl mb-6">Key Features</h2>
        <ul className="grid grid-cols-2 gap-y-3 opacity-80 list-disc list-inside">
          <li>Accurate forecast</li>
          <li>Forecast for more days</li>
          <li>Details about the weather</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="mb-24">
        <h2 className="text-2xl mb-6">Tech Stack</h2>

        <div className="grid grid-cols-3 gap-10 text-sm opacity-80">
          <div>
            <h3 className="mb-2 font-medium">Frontend</h3>
            <ul>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-24">
        <h2 className="text-2xl mb-6">Challenges & Learnings</h2>
        <p className="opacity-80 leading-relaxed max-w-3xl">
          Later i tried to improve this project by adding more features and
          making the UI better and tried to add a litle AI to it.
        </p>
      </section>

      {/* FOOTER CTA */}
      <section className="flex gap-10 text-base">
        <Link href="/projects" className="underline">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
