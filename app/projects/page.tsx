import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Store",
      image: "store.png",
      link: "/projects/ecommerce",
      stack: ["tailwind.png", "TypeScript.svg", "MongoDB.svg"],
    },
    {
      title: "Social App",
      image: "social.png",
      link: "/projects/social",
      stack: ["tailwind.png", "TypeScript.svg"],
    },
    {
      title: "Inventory App",
      image: "inventory3d.png",
      link: "/projects/inventory",
      stack: ["tailwind.png", "TypeScript.svg"],
    },
    {
      title: "Weather App",
      image: "weather3d.png",
      link: "/projects/weather",
      stack: ["JavaScript.svg", "tailwind.png"],
    },
  ];

  return (
    <div className="bg-[#EBEBEB] relative font-mono font-light text-xl flex h-screen w-full items-center justify-center overflow-hidden">

      {/*  HEADER */}
      <div className="absolute top-12 w-full text-center">
        <a href="/">
         <div className="absolute right-10 text-2xl ">Home</div>
        </a>
        <h1 className="text-4xl tracking-wide">
          Selected Projects
        </h1>
        <p className="mt-2 text-sm opacity-70">
          Real applications built with modern web technologies • From Idea to Production — Full-Stack Projects • Building Practical Web Apps with Modern Technologies
        </p>
      </div>

      {/* GRID PROIECTE */}
      <div className="grid grid-cols-4 gap-4 ">
        {projects.map((project, index) => (
          <Link key={project.title} href={project.link}>
            <div
              className={`h-120 rounded-4xl transform p-4 flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ease-out bg-orange-300 ${
                index % 2 === 0
                  ? "-translate-y-10"
                  : "translate-y-10 flex-col-reverse"
              }`}
              style={{ width: "350px" }}
            >
              <h2 className="text-center">
                {project.title}
              </h2>

              <div className="h-72 w-full rounded-xl overflow-hidden">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="flex justify-center gap-2 mt-2">
                {project.stack.map((icon) => (
                  <img
                    key={icon}
                    src={`/${icon}`}
                    alt={icon.split(".")[0]}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔽 TICKER JOS */}
      <div className="absolute bottom-6 w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-sm opacity-70 ">
          Next.js • TypeScript • Tailwind • MongoDB • REST APIs • Dashboards •
          Auth • Payments • Admin Panels • E-commerce • Inventory Management • 
          Web Dev • Full Stack • Hire me • Junior • Next.js • TypeScript • Tailwind • MongoDB • REST APIs • Dashboards •
          Auth • Payments • Admin Panels • E-commerce • Inventory Management • 
          Web Dev • Full Stack • Hire me • Junior 
        </div>
      </div>

    </div>
  );
}
