"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../../components/navBar/NavBar";

// Sample brand data
const brandData = {
  "la-erotique": {
    name: "La Erotique",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/laerotique_lpsgep.svg",
    description: "A sensual and luxurious brand identity that embodies sophistication and seduction.",
  },
  "planto": {
    name: "Planto",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png",
    description: "A modern and eco-conscious identity for a plant-care brand focused on sustainability.",
  },
  "pixeltrend": {
    name: "PixelTrend Studio",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040608/pixel_nwys8f.webp",
    description: "An innovative tech brand focused on creativity and digital transformation.",
  },
  "sweatmate": {
    name: "SweatMate",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg",
    description: "A fitness brand focused on performance, motivation, and physical excellence.",
  },
  "waleska": {
    name: "Waleska",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png",
    description: "A glamorous and elegant brand for a high-end beauty and lifestyle service.",
  }
};

export default function CorporateDesign() {
  const router = useRouter();

  const handleBrandClick = (brandKey) => {
    router.push(`/portfolio/corporate-design/${brandKey}`);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Improved spacing between Navbar and title */}
      <div className="pt-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-5xl font-display font-bold mb-12"
        >
          Corporate Design
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(brandData).map(([brandKey, brandInfo]) => (
            <motion.div
              key={brandKey}
              onClick={() => handleBrandClick(brandKey)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-all max-w-[20em] mx-auto"
            >
              {/* Card Content */}
              <div className="p-4 bg-white rounded-lg mb-4 flex items-center justify-center">
                <img src={brandInfo.logo} alt={brandInfo.name} className="w-80 h-80 object-contain" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{brandInfo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
