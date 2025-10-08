"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const texts = [
    "Crafting digital experiences",
    "Designing intuitive interfaces",
    "Elevating brands online",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-12 overflow-hidden bg-background-light dark:bg-background-dark text-textPrimary-light dark:text-textPrimary-dark font-sans">
      
      {/* === Background Gradient (DO NOT CHANGE) === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-primary-light to-white dark:from-primary-dark dark:to-gray-900 animate-gradient"
      />

      {/* === UI Wireframes - Left Side (Fixed Positions) === */}
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959441/2_awfw7x.png"
        alt="Desktop UI 1"
        className="absolute left-[-4%] top-[7%] w-64 opacity-30 dark:opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959441/1_f7k9mw.png"
        alt="Desktop UI 2"
        className="absolute left-[-6%] top-[45%] w-56 opacity-30 dark:opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959442/4_u6pb1e.png"
        alt="Mobile UI"
        className="absolute left-[10%] bottom-[8%] w-40 opacity-30 dark:opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === UI Wireframes - Right Side (Fixed Positions) === */}
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959441/1_f7k9mw.png"
        alt="Desktop UI 3"
        className="absolute right-[-8%] top-[15%] w-64 opacity-30 dark:opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959441/1_f7k9mw.png"
        alt="Desktop UI 4"
        className="absolute right-[-5%] bottom-[21%] w-52 opacity-30 dark:opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741959442/3_ztwqzp.png"
        alt="Mobile UI 2"
        className="absolute right-[10%] top-[48%] w-36 opacity-30 dark:opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Hero Content === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Creating beautiful
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-primary-light dark:text-primary-dark"
          >
            interfaces
          </motion.span>
        </h1>

        {/* Animated Text Rotator */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="mt-2 text-lg font-body text-primary-light dark:text-primary-dark max-w-2xl mx-auto italic"
        >
          {texts[index]}
        </motion.p>

        {/* Description */}
        <p className="mt-4 text-lg font-body text-textSecondary-light dark:text-textSecondary-dark max-w-2xl mx-auto">
          Tell me all about your business requirements and let’s design together the best communication strategy!
        </p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-6 py-3 text-lg font-display font-semibold text-white dark:text-gray-900 bg-primary-light dark:bg-primary-dark rounded-full shadow-lg transition-all hover:bg-primary-dark dark:hover:bg-primary-light hover:text-white dark:hover:text-gray-900"
        >
          Let’s talk!
        </motion.a>
      </motion.div>

      {/* === Scroll Indicator === */}
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center text-primary-light dark:text-primary-dark"
      >
        <p className="text-sm font-body tracking-wide opacity-80">
          Scroll Down
        </p>
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
