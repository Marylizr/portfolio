"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageModal from "../../../../components/ui/ImageModal";

export default function M2MCaseStudy() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  return (
    <section className="relative z-40 pt-28 md:pt-32 pb-24 bg-gray-900 dark:bg-gray-950 text-white">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent animate-gradient">
          M2M — Mouth to Mouth
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A community-driven referral marketplace connecting small local
          businesses in Interlaken, Switzerland with new customers through
          word-of-mouth sharing and reward-based engagement.
        </p>
        <div className="mt-10">
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760014148/hero-section_em1aaj.png" 
            alt="M2M Hero Mockup"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl cursor-zoom-in"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1760014148/hero-section_em1aaj.png"
              )
            }
          />
        </div>
      </motion.div>

      {/* PROBLEM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">
          The Problem
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Small local businesses in tourist towns like Interlaken rely heavily
          on recommendations. However, their marketing is limited by budget and
          visibility. On the other side, users love to share good experiences
          but rarely benefit from doing so. The challenge:{" "}
          <span className="text-primary-light">
            how to turn sharing into measurable growth.
          </span>
        </p>
      </motion.div>

      {/* RESEARCH & INSIGHTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">
            Research & Insights
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Interviews with 12 small business owners and 15 locals revealed that
            word-of-mouth remains the most trusted form of advertising. The
            insight: <strong>people share what they love — if sharing feels
            rewarding and effortless.</strong>
          </p>
          <p className="text-gray-400 leading-relaxed">
            This inspired a gamified system where users earn points for
            recommending local businesses, and can later redeem them for
            discounts or free products.
          </p>
        </div>
        <div>
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760015620/section_ehhb8l.png" // placeholder
            alt="User Research Visualization"
            className="rounded-2xl shadow-xl cursor-zoom-in"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1760015620/section_ehhb8l.png"
              )
            }
          />
        </div>
      </motion.div>

      {/* DESIGN GOALS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">
          Design Goals
        </h2>
        <ul className="text-gray-400 space-y-2 list-disc list-inside">
          <li>Make sharing effortless and fun</li>
          <li>Encourage local discovery through social validation</li>
          <li>Build a simple, reward-based gamification system</li>
          <li>Balance local charm with modern, digital trust</li>
        </ul>
      </motion.div>

      {/* FINAL UI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-200">
          Final Design
        </h2>
        <div className="grid">
          {[
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760016684/flux_brorfn.png",
            
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`M2M screen ${i + 1}`}
              className="rounded-xl shadow-lg cursor-zoom-in"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(img)}
            />
          ))}
        </div>
      </motion.div>

      {/* RESULTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20 text-gray-400 leading-relaxed"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">Outcome</h2>
        <p>
          M2M’s prototype validated the power of social design and community
          gamification. The UX exploration focused on simplicity — visual
          hierarchy, reward clarity, and the emotional satisfaction of helping
          local businesses grow.
        </p>
        <p className="mt-4">
          The next iteration would include analytics for businesses and refined
          reward personalization for users.
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/portfolio/ux-ui")}
          className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-full shadow-lg transition-all"
        >
          Back to UX/UI
        </motion.button>
      </div>

      {/* MODAL */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={selectedImage}
        label={null}
      />
    </section>
  );
}
