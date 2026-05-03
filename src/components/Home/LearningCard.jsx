"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const LearningCard = ({ learn }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div
        key={learn.id}
        className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="text-4xl mb-4">{learn.icon}</div>

        <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">
          {learn.category}
        </span>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
          {learn.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {learn.description}
        </p>
      </div>
    </motion.div>
  );
};

export default LearningCard;
