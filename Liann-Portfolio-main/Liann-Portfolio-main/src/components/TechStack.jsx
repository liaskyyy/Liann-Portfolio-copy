import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "C++", "Java",
    "MySQL", "Node.js", "Figma", "UI/UX Design", "Git & GitHub"
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-base-100 dark:bg-gray-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3246ea] to-blue-400">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
