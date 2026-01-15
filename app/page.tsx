"use client";
import Modal from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [showHireMe, setShowHireMe] = useState(false);
  const handleClick = () => {
    setShowHireMe(true);
    setTimeout(() => setShowHireMe(false), 1500); // durează 1.5 secunde
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ro-RO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const [showStatsModal, setShowStatsModal] = useState(false);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#EBEBEB] ">
      {/* Clock */}
      <div className="absolute top-10 text-7xl font-semibold ">{time}</div>

      <div className="absolute left-10 top-10 text-6xl font-extralight">
        Matei Stefan
      </div>
      <div className="absolute right-10 top-10 text-6xl font-extralight">
        <Link href="/contact">Contact me</Link>
      </div>

      {/* Left text */}
      <div className="absolute font-extrabold left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-6xl text-[#E83F6F] tracking-wide">
        Full Stack
      </div>

      {/* Right text */}
      <div className="absolute  font-extrabold right-1 top-1/2 -translate-y-1/2 rotate-90 origin-center text-6xl text-[#E83F6F] tracking-wide">
        Web Developer
      </div>

      {/* Grid */}
      <div className="grid mt-36 h-155 w-155 grid-cols-4 grid-rows-3 gap-3 p-20">
        <div className="hover:-translate-y-4 hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 ml-15 mt-[-160] w-70 h-55 row-span-1 rounded-xl bg-[#FF7F50] text-black font-semibold">
          <Link href="/projects">
            <img src="/folder.png"></img>
          </Link>
          <span className="text-xl  ml-[-70] mb-40 font-serif font-light">
            Projects
          </span>
        </div>
        <div className="col-span-1 row-span-1 rounded-xl"></div>
        <div className="col-span-1 row-span-1 rounded-xl"></div>
        <div className="hover:-translate-y-6 hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex flex-col justify-center items-center col-span-1 row-span-3 h-140 w-90 mt-[-110] ml-5 rounded-xl bg-[#FFD580] text-black p-4 overflow-y-auto text-xl font-light font-serif">
          I am a motivated and adaptable individual with experience in
          hospitality and retail, where I developed strong communication skills,
          a positive attitude, and the ability to handle diverse situations. I
          enjoy learning new things quickly, solving problems practically, and
          collaborating effectively in a team. Outside of work, I am curious,
          organized, and enjoy challenges that help me grow personally and
          professionally. I aim to bring enthusiasm, reliability, and a
          proactive mindset to any environment I am part of.
        </div>

        <div
          onClick={handleClick}
          className="font-mouse hover:-translate-x-6 hover:scale-105 text-4xl hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 row-span-1 h-50 w-70 mt-[-70] ml-[-178] rounded-xl bg-[#F6C49F] text-black"
        >
          Young and motivated
        </div>
        {showHireMe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-yellow-400 text-rose-400 text-8xl font-bold px-10 py-6 rounded-lg animate-pulseFlash">
              Would you hire me? 🥹
            </div>
          </div>
        )}
        <a
          href="/CV_Ștefan_Matei_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover:bg-red-600 hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 row-span-1 rounded-xl w-15 h-15 mt-21 bg-[#FF6F61]  text-black font-serif font">
            CV
          </div>
        </a>
        <a
          href="https://github.com/MateiStefan611"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#F4F4F9]  hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 row-span-1 ml-[-90] mt-[-70] rounded-xl h-35 w-40 ">
            <Image
              src="/GitHub.png"
              alt="GitHub"
              width={200}
              height={2000}
              className="object-contain w-full h-full"
            />
          </div>
        </a>
        <div className="hover:-translate-x-6 hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 row-span-1 rounded-xl ml-[-30] mt-8 h-50 w-50 bg-[#BDBDBD] text-black font-semibold">
          <img src="/poza.jpeg" className="rounded-xl" />
        </div>
        <div
          onClick={() => setShowStatsModal(true)}
          className="text-2xl hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-out flex justify-center items-center col-span-1 row-span-1 mt-[-60] rounded-xl ml-18 h-40 w-40 bg-[#E8A87C] text-black font-extrabold"
        >
          Skills
        </div>
      </div>

      {/* Modal */}
      <Modal show={showStatsModal} onClose={() => setShowStatsModal(false)}>
        <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
        <ul className="mt-18 list-disc list-inside items-center text-center justify-center  space-y-2 text-gray-600 text-xl font-semibold">
          <li>
            Web & Software Development: Next.js,{" "}
            <span className="bg-yellow-300 rounded-sm">JavaScript</span>,
            TypeScript, HTML, CSS,{" "}
            <span className="bg-sky-400 rounded-sm">Tailwind</span>
          </li>
          <li>
            Databases: <span className="bg-green-500 rounded-sm">MongoDB</span>,
            SQL
          </li>
          <li>Automation & AI: n8n, integrating AI into workflows</li>
          <li>
            General Skills:{" "}
            <span className="bg-linear-to-r from-blue-300 to-yellow-400 rounded-sm">
              adaptability
            </span>
            , problem-solving, analytical thinking
          </li>
          <li>
            Economic Skills: accounting, auditing,{" "}
            <span className="bg-purple-400 rounded-sm">data analysis</span>
          </li>
        </ul>
      </Modal>

      {/* Animatii */}
      <style jsx>
        {`
          @keyframes pulseGlow {
            0%,
            100% {
              box-shadow: 0 0 10px rgba(232, 63, 111, 0.4);
            }
            50% {
              box-shadow: 0 0 25px rgba(232, 63, 111, 0.8);
            }
          }
          .animate-pulseGlow {
            animation: pulseGlow 2s ease-in-out infinite;
          }

          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 10s ease infinite;
          }
        `}
      </style>
      {/* Animatie flash */}
      <style jsx>{`
        @keyframes pulseFlash {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          10% {
            opacity: 1;
            transform: scale(1.1);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
        .animate-pulseFlash {
          animation: pulseFlash 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
