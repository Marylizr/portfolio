"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/navBar/NavBar";

const portfolioItems = [
  { title: "The Logos", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/logos-box_xbu2yz.png", link: "/portfolio/logos" },
  { title: "Corporate Design", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/corporate_toqwaa.png", link: "/portfolio/corporate-design" },
  { title: "UX", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/ux-ui-1_hbalum.png", link: "/portfolio/ux" },
  { title: "Websites", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/web-sites_t72hok.png", link: "/portfolio/websites" },
  { title: "Editorial Design", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/editorial-design-1_rxvmgz.png", link: "/portfolio/editorial" },
  { title: "Graphic Design", image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/graphic-design_opv0j7.png", link: "/portfolio/graphic" },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark text-center">
      <div>
        <Navbar />
      </div>
      <motion.h2
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-5xl font-display font-bold mb-12 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent animate-gradient"
      >
        Portfolio
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center transition-all"
          >
            <Link href={item.link}>
              <img src={item.image} alt={item.title} className="w-full rounded-md mb-4 cursor-pointer" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
