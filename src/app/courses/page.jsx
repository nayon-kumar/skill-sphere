import MyContainer from "@/components/MyContainer/MyContainer";
import CourseCard from "@/ui/CourseCard";
import React from "react";

const getData = async () => {
  const res = await fetch("https://skill-sphere-pi-inky.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
};

const CoursesPage = async () => {
  const courses = await getData();
  return (
    <div className="pt-25">
      <MyContainer className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          All Courses
        </h2>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="input focus:border-none"
            placeholder="Search"
          />
          <button className="btn">Search</button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 pb-20">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default CoursesPage;
