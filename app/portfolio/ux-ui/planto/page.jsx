"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageModal from "../../../../components/ui/ImageModal";

export default function PlantoCaseStudy() {
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
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-gradient">
          Planto — Smart Care for Living Things
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A mobile app that helps plant lovers build consistent care habits.
          Designed around simplicity, sustainability, and emotional connection
          with nature.
        </p>

        <div className="mt-10">
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760029891/hero-section2_vrgyv1.png"
            alt="Planto hero mockup"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl cursor-zoom-in"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1760029441/hero-section2_vrgyv1.png"
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
          Many plant owners love the idea of green spaces at home but struggle
          to maintain their plants due to inconsistent watering, lack of
          knowledge, or busy schedules. <br />
          The challenge: <span className="text-green-400">
            design a digital companion that simplifies plant care and builds
            healthy routines.
          </span>
        </p>
      </motion.div>

      {/* RESEARCH */}
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
            Through quick surveys and interviews with 20 urban plant owners, I
            identified three key frustrations: uncertainty about watering
            frequency, lack of reminders, and difficulty identifying plant
            issues early.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Users wanted something *beautiful yet practical* — an app that feels
            alive, calm, and rewarding to use.
          </p>
        </div>
        <div>
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760030232/section_ohhq0g.png"
            alt="Research insights"
            className="rounded-2xl shadow-xl cursor-zoom-in"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1760030232/section_ohhq0g.png"
              )
            }
          />
        </div>
      </motion.div>

      {/* INFORMATION ARCHITECTURE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">
          Information Architecture
        </h2>
        <ul className="text-gray-400 space-y-2 list-disc list-inside">
          <li>
            <strong>Dashboard</strong> — overview of all plants, quick status &
            next tasks.
          </li>
          <li>
            <strong>Plant Profile</strong> — detailed care data by species (light,
            water, temperature, notes).
          </li>
          <li>
            <strong>Community</strong> — share photos, ask for help, and earn
            eco-points.
          </li>
          <li>
            <strong>Stats</strong> — monitor growth, watering patterns, and
            milestones.
          </li>
        </ul>
      </motion.div>

      {/* DESIGN SYSTEM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-200">
          Design System
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760029949/home_copy_2_otj6y5.jpg",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760029948/home_copy_3_x98hvl.jpg",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760029949/home_copy_4_o7w2ds.jpg",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760029951/tutorial_eomjlf.jpg",
            
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Planto UI element ${i + 1}`}
              className="rounded-xl shadow-lg cursor-zoom-in"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(img)}
            />
          ))}
        </div>
      </motion.div>

      {/* FINAL DESIGN */}
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
        <p className="text-gray-400 mb-8 leading-relaxed">
          Planto’s final UI merges emotion and functionality — a minimal
          interface that feels alive. Users can water their plants with a tap,
          receive gentle reminders, and track progress through visual feedback.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037242/uniform-planto_mv1pbv.png",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1760030702/design_system_wrmkue.jpg",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Planto final ${i + 1}`}
              className="rounded-xl shadow-lg cursor-zoom-in"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(img)}
            />
          ))}
        </div>
      </motion.div>

      {/* LEARNINGS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20 text-gray-400 leading-relaxed"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">Outcome</h2>
        <p>
          Designing Planto was an exploration of emotional design and habit
          creation. The challenge was to make plant care feel effortless and
          rewarding. 
        </p>
        <p className="mt-4">
          I learned the importance of aligning UI tone with user emotion —
          colors, microinteractions, and content all contribute to building
          trust and joy in digital wellness products.
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/portfolio/ux-ui")}
          className="px-6 py-3 bg-green-400 text-gray-900 font-medium rounded-full shadow-lg transition-all"
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
