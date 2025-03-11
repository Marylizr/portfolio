"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle Dark Mode with Animation
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741687794/logo_mary_x45r10.png"
            alt="logo"
            width={80} // Equivalent to 5em
            height="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <motion.span 
                whileHover={{ scale: 1.1 }} 
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle with Animation */}
        <motion.button
          onClick={toggleDarkMode}
          className="text-gray-900 dark:text-white text-2xl mx-4 transition"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <FaSun />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <FaMoon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 dark:text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-6"
        >
          <ul className="flex flex-col space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href} passHref>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="block cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
