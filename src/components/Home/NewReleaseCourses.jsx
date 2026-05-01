import CourseCard from "@/ui/CourseCard";
import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const getData = async () => {
  const res = await fetch("https://skill-sphere-pi-inky.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
};

const NewReleaseCourses = async () => {
  const courses = await getData();
  const newCourses = [...courses].slice(0, 3);

  return (
    <MyContainer className="pb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        New Release Courses
      </h2>
      <p className="text-gray-500 mt-2 mb-8 text-center">
        Explore top-rated courses chosen by learners worldwide
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/courses" className="btn btn-primary">
          Show All Courses
          <IoArrowForward size={20} />
        </Link>
      </div>
    </MyContainer>
  );
};

export default NewReleaseCourses;
