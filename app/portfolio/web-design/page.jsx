"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";

// Websites data (replace/add as needed)
const websitesData = {
  "the-roll": {
    name: "The Roll",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760384862/logo_theRoll_h293pw.png",
    description:
      "Single‑page restaurant website with hero, menu sections, and gallery. Built with Next.js, Tailwind, Framer Motion. Deployed on Netlify.",
    url: "https://the-roll.netlify.app/",
  },
  "pixeltrend": {
    name: "PixelTrend Studio",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040608/pixel_nwys8f.webp",
    description:
      "Minimal, professional and interactive portfolio with Apple‑inspired flow. Sections: Home, Services, Portfolio, Contact, Blog, About.",
    url: "https://marylizr.netlify.app/",
  },
  "sweatmate": {
    name: "SweatMate",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1759946142/logo_sweatMate_ezmkqq.png",
    description:
      "Landing and in‑app UI for a fitness SaaS. Emphasis on onboarding, scheduling, and clear conversion paths.",
    url: "https://sweatmateapp.netlify.app//",
  },
};

export default function WebDesign() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Spacing between Navbar and title */}
      <div className="pt-24 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-display font-bold mb-12 text-[#919191]"
        >
          Web Design
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-8">
          {Object.entries(websitesData).map(([key, site]) => (
            <motion.a
              key={key}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4 text-center hover:scale-105 transition block"
            >
              {/* Card Content */}
              <div className="p-4 bg-white rounded-lg mb-4 flex items-center justify-center">
                <img src={site.logo} alt={site.name} className="w-60 h-60 object-contain" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{site.name}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{site.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Back to Portfolio */}
        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/portfolio")}
            className="px-6 py-3 mb-8 bg-primary-light dark:bg-primary-dark text-white dark:text-gray-900 rounded-full shadow-lg transition-all"
          >
            Back to Portfolio
          </motion.button>
        </div>
      </div>
    </section>
  );
}
