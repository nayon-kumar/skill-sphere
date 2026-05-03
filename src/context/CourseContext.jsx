"use client";
import React, { createContext, useState } from "react";

export const myContext = createContext();

const CourseContext = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const data = {
    enrolledCourses,
    setEnrolledCourses,
  };
  return <myContext.Provider value={data}>{children}</myContext.Provider>;
};

export default CourseContext;
