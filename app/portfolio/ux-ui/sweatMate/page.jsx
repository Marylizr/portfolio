"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageModal from "../../../../components/ui/ImageModal";

export default function SweatMateCaseStudy() {
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
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          SweatMate — Your Fitness Companion
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A full-featured CRM designed for personal trainers and fitness professionals 
          to manage clients, sessions, and progress seamlessly.
        </p>

        <div className="mt-10">
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg"
            alt="SweatMate logo"
            className="w-48 mx-auto mb-10 cursor-zoom-in"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg"
              )
            }
          />
          <motion.img
            src="https://res.cloudinary.com/da6il8qmv/image/upload/v1744295011/stationary_e1cfr8.png"
            alt="SweatMate mockup"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl cursor-zoom-in"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295011/stationary_e1cfr8.png"
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
          Personal trainers often manage multiple clients, sessions, and fitness programs 
          using scattered tools — spreadsheets, WhatsApp, Google Calendar. This creates 
          confusion, scheduling conflicts, and inconsistent progress tracking.
          <br />
          <span className="text-sky-400 font-medium">
            SweatMate was created to centralize it all — clients, events, and performance — 
            into one intuitive dashboard.
          </span>
        </p>
      </motion.div>

      {/* SOLUTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-200">
          The Solution
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          SweatMate is a web-based CRM that helps trainers simplify client management, 
          visualize progress, and automate repetitive tasks — all while keeping a 
          minimal, modern interface.
        </p>

        <ul className="text-gray-400 space-y-2 list-disc list-inside text-left max-w-2xl mx-auto">
          <li>📅 <strong>NextEvents</strong> — Create 1:1 sessions, group classes, or trainer-only events.</li>
          <li>🕓 <strong>UpcomingMeetings</strong> — Organized schedule with real-time disappearing sessions.</li>
          <li>📊 <strong>ClientList</strong> — View client performance, history, and session notes.</li>
          <li>🧠 <strong>AI Analysis</strong> — Detect medical abnormalities in lab reports and suggest alerts.</li>
          <li>📅 <strong>Calendar</strong> — Visualize all trainer events with day highlights.</li>
        </ul>
      </motion.div>

      {/* USER FLOW */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-200">
          User Flow
        </h2>
        <motion.img
          src="https://res.cloudinary.com/da6il8qmv/image/upload/v1744039950/stationery_mockup_converted_mymywc.png"
          alt="User flow"
          className="rounded-2xl shadow-xl cursor-zoom-in mx-auto"
          whileHover={{ scale: 1.03 }}
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/da6il8qmv/image/upload/v1744039950/stationery_mockup_converted_mymywc.png"
            )
          }
        />
      </motion.div>

      {/* UI PREVIEWS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-200">
          Interface Previews
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          SweatMate’s interface blends simplicity and focus. It uses a clean grid, 
          neutral palette, and soft animations that enhance usability without distraction.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1743352080/header_odlfxb.png",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295011/bc_sweatMate_bhj88l.png",
            "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295482/uniform_kpyoah.png",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`SweatMate UI ${i + 1}`}
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
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">Outcome & Learnings</h2>
        <p>
          SweatMate evolved from a UI concept into a real working SaaS product. 
          The challenge was to balance clean design with functional depth — ensuring 
          every component was both aesthetic and intuitive.
        </p>
        <p className="mt-4">
          Building the CRM strengthened my skills in system design, accessibility, 
          and the psychology of motivation — how visual clarity can influence 
          consistency and performance.
        </p>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/portfolio/ux-ui")}
          className="px-6 py-3 bg-sky-400 text-gray-900 font-medium rounded-full shadow-lg transition-all"
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
