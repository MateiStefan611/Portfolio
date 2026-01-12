import Link from "next/link";

export default function Contact() {
  return (
    <div className="text-6xl flex flex-col items-center justify-center h-screen space-y-10 bg-[#EBEBEB]">
      <div className="text-6xl absolute top-10 font-extralight">
        <Link href="/">Home</Link>
      </div>
      <span className="hover:text-indigo-600">stefanmatei62@yahoo.ro</span>
      <a
        href="https://www.linkedin.com/in/stefan-matei-90ba0929a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className=" hover:text-blue-500 transition-colors">LinkedIn</span>
      </a>
      <span className="hover:text-green-600">0771 478 789</span>
    </div>
  );
}
