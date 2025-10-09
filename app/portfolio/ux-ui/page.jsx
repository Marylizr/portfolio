"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const uxuiProjects = [
  {
    title: "M2M",
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760011618/logoM2M_kndee8.png",
    description:
      "A community-driven referral marketplace connecting small local businesses.",
    link: "/portfolio/ux-ui/m2m",
  },
  {
    title: "Planto",
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png",
    description:
      "A smart care app that helps plant lovers build consistent, mindful care habits.",
    link: "/portfolio/ux-ui/planto",
  },
  {
    title: "SweatMate App",
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295233/logo_sweatMate2_sfpelp.png",
    description:
      "An app prototype combining personalized meal plans, macro tracking, and mindfulness reminders — UI focused on serenity and clarity.",
    link: "/portfolio/ux-ui/wellness",
  },
  {
    title: "Doce & Fit",
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760031920/doceefit_ljc5w0.png",
    description:
      "Redesigned the checkout experience for a online bakery. Reduced steps, improved clarity, and optimized mobile interaction.",
    link: "/portfolio/ux-ui/ecommerce",
  },
];

export default function UXUIPage() {
  const router = useRouter();

  return (
    <section className="relative z-40 pt-32 py-16 bg-gray-900 dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark text-center">
      <motion.h2
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-30 text-5xl font-display font-bold mb-12 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent animate-gradient"
      >
        UX / UI Design
      </motion.h2>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {uxuiProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center transition-all cursor-pointer hover:shadow-xl"
            onClick={() => router.push(project.link)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-textSecondary-light dark:text-textSecondary-dark mt-2">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* botón de volver */}
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
    </section>
  );
}
