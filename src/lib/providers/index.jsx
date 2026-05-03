import CourseContext from "@/context/CourseContext";
import React from "react";

const Provider = ({ children }) => {
  return <CourseContext>{children}</CourseContext>;
};

export default Provider;
