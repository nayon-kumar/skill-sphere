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

const PopularCourses = async () => {
  const courses = await getData();
  console.log(courses);
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <MyContainer className="py-15">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Popular Courses
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topCourses.map((course) => (
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

export default PopularCourses;
