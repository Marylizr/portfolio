"use client";

import { motion } from "framer-motion";
import { FaPaintBrush, FaGlobe, FaChartLine, FaEnvelope, FaCreditCard, FaCalendarCheck } from "react-icons/fa";

const services = [
  { title: "Graphic Design", icon: FaPaintBrush, description: "Enhance your brand with visually striking designs that capture attention and communicate your message with style and impact." },
  { title: "Web Design", icon: FaGlobe, description: "Create a stunning, user-friendly website tailored to your brand, ensuring a seamless experience across all devices." },
  { title: "Google Ranking", icon: FaChartLine, description: "Improve your website's visibility with SEO strategies that drive traffic, increase engagement, and help you rank higher on search engines." },
  { title: "Business Email", icon: FaEnvelope, description: "Build trust with a custom email address that matches your brand, enhancing credibility and communication with clients." },
  { title: "Payment Integration", icon: FaCreditCard, description: "Enable secure and hassle-free transactions on your website with multiple payment options, ensuring a smooth checkout experience for your customers." },
  { title: "Online Booking", icon: FaCalendarCheck, description: "Let clients schedule appointments with ease through an integrated booking system, streamlining your workflow and maximizing convenience." }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-textPrimary-light dark:text-textPrimary-dark text-center">
      <h2 className="text-4xl font-display font-bold mb-12">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4 text-primary-light dark:text-primary-dark text-4xl">
              <service.icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
