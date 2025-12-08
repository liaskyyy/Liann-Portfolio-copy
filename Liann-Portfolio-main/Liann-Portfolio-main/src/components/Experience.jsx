import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Freelance Graphic Designer",
      period: "2021 – 2022",
      description:
        "Worked on logo design, branding, and illustration projects for various clients, focusing on visually appealing and impactful designs.",
    },
    {
      role: "Gymnastics Coach",
      period: "2020 – Present",
      description:
        "Coaching young gymnasts in skills development, discipline, and performance, contributing to recreational and competitive training programs.",
    },
    {
      role: "Technical Director – Gymnastics Competitions",
      period: "2022 – Present",
      description:
        "Managing technical aspects of gymnastics competitions, including scoring systems, event coordination, and smooth execution of events.",
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3246ea] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>



        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                className={`relative w-full flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#3246ea] bg-white dark:bg-gray-950 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />


                <div
                  className={`bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-white/2 w-[400px] ${
                    isLeft ? "ml-6 text-left" : "mr-6 text-left"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
