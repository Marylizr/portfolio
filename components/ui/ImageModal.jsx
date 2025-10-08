"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ isOpen, onClose, imageUrl, label }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white dark:bg-gray-800 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg"
          onClick={(e) => e.stopPropagation()} // prevent closing on inner click
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-bold"
          >
            ×
          </button>

          {/* Image */}
          <div className="flex justify-center items-center mb-4">
            <img
              src={imageUrl}
              alt={label || "Preview"}
              className="max-w-full max-h-[70vh] object-contain bg-white p-2 rounded-md"
            />
          </div>

          {/* Optional Caption */}
          {label && (
            <p className="text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
              {label}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
