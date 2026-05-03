"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CourseCard = ({ course }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl line-clamp-1 font-semibold mb-2">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 mb-2">
            Instructor: {course.instructor}
          </p>

          <p className="text-gray-600 text-sm mb-3 line-clamp-1">
            {course.description}
          </p>

          <div className="flex justify-between items-center text-sm mb-3">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-gray-500">{course.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-yellow-500 font-semibold">
              ⭐ {course.rating}
            </span>

            <Link
              href={`/details/${course.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
