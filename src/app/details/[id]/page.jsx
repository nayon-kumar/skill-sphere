"use client";
import MyContainer from "@/components/MyContainer/MyContainer";
import Image from "next/image";
import { FaStar, FaClock, FaUser } from "react-icons/fa";

const course = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  instructor: "John Doe",
  duration: "20 hours",
  rating: 4.8,
  level: "Beginner",
  description: "Learn full-stack web development from scratch.",
  image: "https://i.ibb.co.com/Tq1rpt0h/Complete-Web-Development-Bootcamp.png",
  category: "Development",
};

const CourseDetailsPage = () => {
  return (
    <MyContainer className="pt-42 pb-20">
      <div className="rounded-2xl shadow-xl p-5 border-2 border-gray-300">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative aspect-video">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
                {course.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {course.title}
              </h1>

              <p className="text-gray-600 mb-5">{course.description}</p>

              {/* Info */}
              <div className="flex flex-wrap gap-4 text-gray-700 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue-500" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-green-500" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>{course.rating}</span>
                </div>

                <div className="bg-gray-200 px-2 py-1 rounded text-xs">
                  {course.level}
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Extra Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
            <li>✔ Build full-stack applications</li>
            <li>✔ Master HTML, CSS, JavaScript</li>
            <li>✔ Learn React & backend basics</li>
            <li>✔ Deploy real-world projects</li>
          </ul>
        </div>
      </div>
    </MyContainer>
  );
};

export default CourseDetailsPage;
