"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageModal from "../components/ui/ImageModal"; // <- ruta desde /app/portfolio/logos/page.jsx

const logos = [
  { 
    title: "PixelTrend Studio", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040608/pixel_nwys8f.webp", 
    description: "A sleek, futuristic, and modern logo design for PixelTrend Studio, a cutting-edge tech startup focused on innovation and digital trends." 
  },
  { 
    title: "Waleska Makeup Artist", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png", 
    description: "An elegant and sophisticated branding design for a professional makeup artist. The logo captures beauty, refinement, and artistic expression." 
  },
  { 
    title: "The Roll Sushi", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040450/logo-theroll_xpdkcj.webp", 
    description: "A playful and bold design for a sushi restaurant, combining modern aesthetics with a fun and inviting look that represents fresh and high-quality cuisine." 
  },
  { 
    title: "Aesthetica Glam", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742125816/logo_vezxgm.png", 
    description: "A minimalistic and elegant logo for a high-end aesthetic clinic. Designed to convey sophistication, beauty, and a sleek, luxurious feel." 
  },
  { 
    title: "PinkTail Cocktails", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_pinktail_kw5oql.svg", 
    description: "A chic and stylish logo for PinkTail, a brand that specializes in beautifully crafted cocktails. The design blends simplicity with a touch of flair." 
  },
  { 
    title: "SweatMate Fitness", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg", 
    description: "A strong and dynamic logo for a fitness app. The design embodies energy, movement, and motivation for those striving to reach their fitness goals." 
  },
  { 
    title: "Footify Streetwear", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742125704/logo_footify_qnezbt.webp", 
    description: "A bold, urban, and youthful logo for Footify, a streetwear brand that embodies authenticity, creativity, and individuality in the fashion industry." 
  },
  { 
    title: "LifeStyle & Wellness", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/wellness_mdtwwe.svg", 
    description: "A soothing and serene logo for a wellness brand, designed to evoke peace, wellbeing, balance, and a holistic approach to health and joy." 
  },
  { 
    title: "La Erotique", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/laerotique_lpsgep.svg", 
    description: "A sensual and sophisticated logo that captures the essence of elegance and allure. With its bold yet refined composition, it evokes passion, intimacy, and the art of seduction." 
  },
  { 
    title: "La Vida Fit y Activa", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/VidaFit-03_wiqsk5.jpg", 
    description: "A dynamic and empowering design that embodies movement, strength, and a commitment to an active lifestyle. The perfect fusion of aesthetics and energy, making the brand both inviting and inspiring." 
  },
  { 
    title: "Planto", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png", 
    description: "A fresh and organic design that speaks to the heart of nature lovers. This logo beautifully represents a brand dedicated to plant care, sustainability, and the harmony between humans and greenery." 
  },
  { 
    title: "G", 
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/logo-G_vrynqb.svg", 
    description: "A sleek and versatile logo crafted for a high-end brand that spans luxury tourism, VIP entertainment, and exclusive real estate hosting. Its minimalist yet powerful design radiates prestige, exclusivity, and world-class service." 
  },
];

export default function LogosGallery() {
  const router = useRouter();

  // estado para la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative z-40 pt-32 py-16 bg-gray-900 dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-30 text-5xl font-display font-bold mb-12 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent animate-gradient"
      >
        The Logos
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center transition-all"
          >
            {/* click para abrir la modal con SOLO la imagen */}
            <img
              src={logo.image}
              alt={logo.title}
              className="w-full rounded-md mb-4 cursor-zoom-in"
              onClick={() => {
                setSelectedImage(logo.image);
                setIsModalOpen(true);
              }}
            />

            <h3 className="text-xl font-semibold">{logo.title}</h3>
            <p className="text-textSecondary-light dark:text-textSecondary-dark mt-2">
              {logo.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Back to Portfolio */}
      <div className="mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/portfolio")}
          className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white dark:text-gray-900 rounded-full shadow-lg transition-all"
        >
          Back to Portfolio
        </motion.button>
      </div>

      {/* Modal reutilizando tu componente existente */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={selectedImage}
        label={null}  // solo imagen
      />
    </section>
  );
}
