import React from "react";
import { Mail, Github } from "lucide-react";
import { BsBehance } from "react-icons/bs";
import EmailForm from "./api/EmailForm";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-base-100 text-base-content transition-colors"
    >
      <div className="text-base-content dark:text-white max-w-2xl mx-auto text-center">

        {/* Header */}
        <motion.h2
          className="text-3xl font-bold mb-4 text-primary dark:text-primary-content"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="mb-10 text-base text-base-content dark:text-base-content/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’d love to hear from you! Whether it’s a question, collaboration, or just a hello — feel free to reach out.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            variants={itemVariants}
            href="mailto:lianngonzales7@gmail.com"
            className="btn btn-outline btn-primary dark:btn-primary dark:text-primary-content flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> lianngonzales7@gmail.com
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://github.com/liaskyyy"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-primary dark:btn-primary dark:text-primary-content flex items-center gap-2"
          >
            <Github className="w-5 h-5" /> github.com/liaskyyy
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.behance.net/lianngonza304c"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-primary dark:btn-primary dark:text-primary-content flex items-center gap-2"
          >
            <BsBehance className="w-5 h-5" /> behance.net/lianngonza304c
          </motion.a>
        </motion.div>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <EmailForm />
        </motion.div>
      </div>
    </section>
  );
}
