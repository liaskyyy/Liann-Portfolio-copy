import React, { useState, useEffect } from "react";
import orgShirt from "../assets/REVISED ORG POLO SHIRT.png";
import cherryTomato from "../assets/CHERRY TOMATO LOGO w TEXT-03.png";
import frog from "../assets/pepeTheFrog.png";
import tmc from "../assets/tmc-logo.jpg";
import logofolio from "../assets/logofolio.png";
import logofolioPdf from "../assets/logofolio.pdf";

export default function Projects() {
  const [tab, setTab] = useState("it");

  useEffect(() => {
    const applyFromHash = () => {
      if (window.location.hash === "#projects-design") setTab("design");
      if (window.location.hash === "#projects-it") setTab("it");
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-[#3246ea]">Selected Work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Projects I've Built
          </h2>

          {/* Tabs */}
          <div className="mt-6 inline-flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
            <button
              onClick={() => setTab("it")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "it"
                  ? "bg-[#3246ea] text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              Information Technology
            </button>
            <button
              onClick={() => setTab("design")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "design"
                  ? "bg-[#3246ea] text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>


        <div className="mt-10">{tab === "it" ? <ItProjects /> : <DesignProjects />}</div>
      </div>
    </section>
  );
}

function Card({ title, description, image, link, download }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">

      <figure className="w-full h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>


      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-3 flex-grow text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>


        <div className="mt-6 flex justify-end">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              download={download ? download : undefined}
              className="px-5 py-2 bg-[#3246ea] text-white rounded-full font-medium hover:bg-[#2536b3] transition-colors duration-300"
            >
              {"View Project"}
            </a>
          ) : (
            <button
              disabled
              className="px-5 py-2 bg-gray-300 text-gray-500 rounded-full font-medium cursor-not-allowed"
            >
              View Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


function ItProjects() {
  const items = [
    {
      title: "Cherry Tomato App (Pomodoro)",
      description:
        "Created the UI design for our capstone project — a Pomodoro timer app with task management and progress tracking features.",
      image: cherryTomato,
      link: "https://www.figma.com/design/SUhaT4WfdsFubPVW3eOMw9/Cherry-Tomato?node-id=0-1&t=rLvc2qtTrgeSSMsW-1",
    },
    {
      title: "Pepe the Frog Mini Game",
      description:
        "Developed a fun mini game using Godot, featuring Pepe the Frog as the main character. Focused on simple mechanics, smooth controls, and engaging gameplay.",
      image: frog,
      link: "https://github.com/liaskyyy/pepethefroggame.git",
    },
    {
      title: "TMC Website",
      description:
        "Developed a responsive website for a gymnastics academy, featuring programs, coaches, and events with user-friendly navigation.",
      image: tmc,
      link: "https://github.com/liaskyyy/tmc-website.git",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <Card key={it.title} {...it} />
      ))}
    </div>
  );
}


function DesignProjects() {
  const items = [
    {
      title: "JPSSITE ORG SHIRT",
      description:
        "Designed the official organization shirt for JPSSITE, combining creativity and branding. Recognized as the winning design.",
      image: orgShirt,
      link: orgShirt,
    },
    {
      title: "Logofolio",
      description:
        "30-day logo challenge by Logocore. Created unique logos daily, exploring various styles and concepts to enhance my design skills.",
      image: logofolio,
      link: logofolioPdf
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((design) => (
        <Card key={design.title} {...design} />
      ))}
    </div>
  );
}
