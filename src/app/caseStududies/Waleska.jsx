"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WaleskaCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-textPrimary-light dark:text-textPrimary-dark">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">Waleska Makeup Artistry</h1>
        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
          Elevating Beauty Through Professional Makeup Artistry
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">📌 Project Overview</h2>
        <p className="text-lg">
          Waleska Makeup Artistry is a high-end personal brand website designed to
          showcase the talent and services of a professional makeup artist.
          This website functions as a portfolio, service hub, and booking
          platform, ensuring a sleek, professional online presence.
        </p>
      </motion.div>

      {/* The Problem */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">🚀 The Challenge</h2>
        <p className="text-lg">
          Waleska lacked a structured online presence, making it difficult for
          clients to explore her work and book services. The key challenges were:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>No professional website for credibility.</li>
          <li>No structured booking system for ease of access.</li>
          <li>Needed a visually rich and elegant portfolio to attract clientele.</li>
        </ul>
      </motion.div>

      {/* Research & Strategy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">📊 Research & Strategy</h2>
        <p className="text-lg">Understanding user needs and pain points was crucial:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Target Audience: Brides, models, and beauty enthusiasts.</li>
          <li>Market research showed users preferred a mobile-first approach.</li>
          <li>SEO and social media integration were essential for discoverability.</li>
        </ul>
      </motion.div>

      {/* Solution & Features */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">💡 The Solution</h2>
        <p className="text-lg">A fully responsive, elegant, and intuitive website featuring:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>A visually stunning portfolio showcasing makeup artistry.</li>
          <li>A streamlined booking system for seamless client scheduling.</li>
          <li> A brand identity that reflects luxury, elegance, and professionalism.</li>
        </ul>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">📈 Results & Impact</h2>
        <p className="text-lg">The website led to measurable success:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>30% increase in client inquiries within the first month.</li>
          <li>Enhanced credibility and professionalism in the beauty industry.</li>
          <li>Positive feedback on the seamless user experience.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <h2 className="text-3xl font-bold mb-4">Want to Create Something Similar?</h2>
        <p className="text-lg mb-6">
          Let’s work together to build an elegant, high-end website that reflects
          your brand’s vision. Get in touch today!
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-full text-lg font-semibold shadow-md hover:opacity-80 transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
