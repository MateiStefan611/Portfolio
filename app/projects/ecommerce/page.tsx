"use client"
import Link from "next/link";
import { useState } from "react";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

export default function EcommerceProject() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
  ];

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
        <h1 className="text-5xl mb-4 text-[#E83F6F]">
          E-commerce Store
        </h1>

        <p className="text-lg opacity-80 max-w-2xl">
          Full-stack e-commerce application featuring authentication, product
          management, cart functionality, payments and an admin dashboard.
        </p>

        <div className="flex gap-4 mt-6 text-sm">
          <span className="px-3 py-1 bg-orange-200 rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-orange-200 rounded-full">TypeScript</span>
          <span className="px-3 py-1 bg-orange-200 rounded-full">MongoDB</span>
          <span className="px-3 py-1 bg-orange-200 rounded-full">Stripe</span>
        </div>

        <div className="flex gap-6 mt-8 text-base">
          <Link
            href="https://github.com/MateiStefan611/Licenta"
            target="_blank"
            className="underline"
          >
            GitHub Repository
          </Link>
        </div>
      </section>

      {/* PREVIEW - SLIDER */}
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
           <LuArrowBigLeft className="text-[#E83F6F]"/>
          </button>

          {/* Dreapta */}
          <button
            onClick={next}
            className="absolute right-4 p-4  hover: cursor-pointer rounded-full text-5xl"
          >
            <LuArrowBigRight className="text-[#E83F6F]"/>
          </button>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="grid grid-cols-2 gap-20 mb-24">
        <div>
          <h2 className="text-2xl mb-4">Problem</h2>
          <p className="opacity-80 leading-relaxed">
            Small businesses often need a simple and affordable way to sell
            products online without relying on complex platforms that require
            extensive setup and maintenance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl mb-4">Solution</h2>
          <p className="opacity-80 leading-relaxed">
            I built a full-stack e-commerce application that allows users to
            browse products, manage a shopping cart, place orders and pay
            securely, while providing admins with tools to manage products and
            orders.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mb-24">
        <h2 className="text-2xl mb-6">Key Features</h2>
        <ul className="grid grid-cols-2 gap-y-3 opacity-80 list-disc list-inside">
          <li>User authentication and authorization</li>
          <li>Product listing and detailed product pages</li>
          <li>Shopping cart functionality</li>
          <li>Stripe payment integration</li>
          <li>Order placement and tracking</li>
          <li>Admin dashboard for product and order management</li>
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
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Other</h3>
            <ul>
              <li>Stripe API</li>
              <li>JWT Authentication</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-24">
        <h2 className="text-2xl mb-6">Challenges & Learnings</h2>
        <p className="opacity-80 leading-relaxed max-w-3xl">
          One of the main challenges was handling authentication and protected
          routes across the application. I also learned how to structure a
          scalable backend API, integrate third-party services like Stripe and
          manage application state efficiently in a real-world scenario.
        </p>
      </section>

      {/* FOOTER */}
      <section className="flex gap-10 text-base">
        <Link href="/projects" className="underline">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
