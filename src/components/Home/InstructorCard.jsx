"use client";
import { FaStar, FaUsers, FaBookOpen } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const InstructorCard = ({ ins }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div
        key={ins.id}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 "
      >
        <div className="relative aspect-square">
          <Image
            src={ins.image}
            alt={ins.name}
            fill
            sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            {ins.specialization}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            {ins.name}
          </h3>
          <p className="text-sm text-gray-500">{ins.title}</p>

          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium text-gray-700">
              {ins.rating}
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {ins.bio}
          </p>

          <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaUsers className="text-indigo-500" />
              <span>{ins.students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBookOpen className="text-indigo-500" />
              <span>{ins.courses} Courses</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Experience: {ins.experience}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
