"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center min-h-screen px-6 sm:px-12 py-16 bg-background-light dark:bg-background-dark text-textPrimary-light dark:text-textPrimary-dark font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={hasScrolled ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Profile Image */}
        <motion.img
          src="https://res.cloudinary.com/da6il8qmv/image/upload/v1741106258/profile_trbaek.png"
          alt="profile"
          className="rounded-full w-48 h-48 shadow-lg border-4 border-primary-light dark:border-primary-dark mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasScrolled ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Main Heading */}
        <h1 className="text-5xl font-display font-bold mb-4">About Me</h1>
        <h2 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-2">
          Web Design & Management
        </h2>
        <h3 className="text-xl text-textSecondary-light dark:text-textSecondary-dark mb-6">
          For Service-Based Businesses
        </h3>

        {/* Description */}
        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed max-w-3xl mx-auto mb-8">
          I’m Mary, a designer fueled by curiosity, creativity, and a love for solving complex problems. 
          This space is a glimpse into my journey as a UX/UI, graphic, and product designer. 
          Here, you’ll find my portfolio, stories about design challenges, and ideas that inspire me every day.
        </p>

        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed max-w-3xl mx-auto mb-8">
          Design, for me, is more than aesthetics—it’s about connecting people, simplifying experiences, 
          and sparking innovation. I’m constantly evolving, learning, and pushing boundaries to create 
          meaningful designs that make a difference.
        </p>

        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed max-w-3xl mx-auto mb-8">
          Welcome to Mary’s Web Design Wonderland! Looking to bring your digital dreams to life? You’re in the right place! 
          I’m Mary, your friendly neighborhood web wizard, and I’m here to sprinkle a little magic on your online presence.
        </p>

        {/* Highlighted Skills Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={hasScrolled ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">UX/UI Excellence</h4>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">Creating seamless and intuitive digital experiences.</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">AI Integration</h4>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">Bringing AI-powered magic to enhance user engagement.</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">Custom Web Solutions</h4>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">Tailored websites designed for your unique needs.</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">Future-Proof Design</h4>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">Ensuring your website thrives with evolving digital trends.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-8 py-4 text-lg font-semibold font-display text-white dark:text-gray-900 bg-primary-light dark:bg-primary-dark rounded-full shadow-lg transition-all hover:bg-primary-dark dark:hover:bg-primary-light hover:text-white dark:hover:text-gray-900"
        >
          Let’s Create Together!
        </motion.a>
      </motion.div>
    </section>
  );
}