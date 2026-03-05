"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4"
        >
          Software Developer // Photographer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Hi, I&apos;m <span className="text-blue-400">Monroe</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-5 justify-center"
        >
          <ul className="flex gap-6 justify-center">
            <li>
              <a
                href="https://www.instagram.com/thisismonroe/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/monroe-gollaher/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MonroeGollaher"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="mailto:mgollaher92@gmail.com?subject=Let's%20get%20in%20touch"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-zinc-400 mb-5 max-w-xl mx-auto"
        >
          Full-stack software developer with a passion for creativity and
          problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            Photo Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
