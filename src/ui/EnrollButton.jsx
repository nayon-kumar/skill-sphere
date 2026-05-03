"use client";
import { myContext } from "@/context/CourseContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const EnrollButton = ({ course }) => {
  const { enrolledCourses, setEnrolledCourses } = useContext(myContext);

  const isEnrolled = enrolledCourses.some((item) => item.id === course.id);

  const handleEnroll = () => {
    if (isEnrolled) return;
    toast.success(`Successfully Enrollded ${course.title}`, {
      position: "bottom-center",
    });
    setEnrolledCourses([...enrolledCourses, course]);
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={isEnrolled}
      className={`mt-4 py-3 rounded-xl font-semibold transition 
        ${
          isEnrolled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        }`}
    >
      {isEnrolled ? "Enrolled" : "Enroll Now"}
    </button>
  );
};

export default EnrollButton;
