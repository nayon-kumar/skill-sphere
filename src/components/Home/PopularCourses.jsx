"use client";
import Image from "next/image";
import React from "react";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.8,
    level: "Beginner",
    description: "Learn full-stack web development from scratch.",
    image: "https://i.postimg.cc/example-course1.png",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Smith",
    duration: "15 hours",
    rating: 4.7,
    level: "Beginner",
    description:
      "Master the fundamentals of user interface and user experience design.",
    image: "https://i.postimg.cc/example-course2.png",
    category: "Design",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    instructor: "Michael Brown",
    duration: "12 hours",
    rating: 4.6,
    level: "Intermediate",
    description:
      "Learn SEO, social media marketing, and online branding strategies.",
    image: "https://i.postimg.cc/example-course3.png",
    category: "Marketing",
  },
  {
    id: 4,
    title: "React & Next.js Advanced Guide",
    instructor: "Emily Johnson",
    duration: "18 hours",
    rating: 4.9,
    level: "Advanced",
    description: "Build scalable web applications using React and Next.js.",
    image: "https://i.postimg.cc/example-course4.png",
    category: "Development",
  },
  {
    id: 5,
    title: "Python for Data Science",
    instructor: "David Wilson",
    duration: "22 hours",
    rating: 4.8,
    level: "Intermediate",
    description:
      "Analyze data and build models using Python and popular libraries.",
    image: "https://i.postimg.cc/example-course5.png",
    category: "Data Science",
  },
  {
    id: 6,
    title: "Graphic Design Fundamentals",
    instructor: "Sophia Lee",
    duration: "10 hours",
    rating: 4.5,
    level: "Beginner",
    description:
      "Learn the basics of graphic design, color theory, and typography.",
    image: "https://i.postimg.cc/example-course6.png",
    category: "Design",
  },
];

const PopularCourses = () => {
  // Sort + get top 3
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Popular Courses
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {topCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <Image
              src={course.image}
              alt={course.title}
              width={40}
              height={40}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

              <p className="text-sm text-gray-500 mb-2">
                Instructor: {course.instructor}
              </p>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {course.description}
              </p>

              {/* Info Row */}
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="text-gray-500">{course.duration}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {course.rating}
                </span>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
