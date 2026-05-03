import { myContext } from "@/context/CourseContext";
import Image from "next/image";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EnrolledCard = ({ course }) => {
  const { enrolledCourses, setEnrolledCourses } = useContext(myContext);

  const handleUnenroll = () => {
    const updatedCourses = enrolledCourses.filter((c) => c.id !== course.id);
    setEnrolledCourses(updatedCourses);
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col sm:flex-row gap-4 sm:items-center">
        {/* Image */}
        <div className="w-full sm:w-24 h-40 sm:h-24 relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg font-bold">{course.title}</h2>
          <p className="text-sm text-gray-600">
            Instructor: {course.instructor}
          </p>
          <p className="text-sm text-gray-500">Category: {course.category}</p>
          <p className="text-sm text-gray-500">Duration: {course.duration}</p>
          <p className="text-sm text-yellow-600">Rating: ⭐ {course.rating}</p>
        </div>

        {/* Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <button
            onClick={handleUnenroll}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
          >
            Unenroll
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EnrolledCard;
