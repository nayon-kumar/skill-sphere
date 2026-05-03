import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import LearningCard from "./LearningCard";

const learningData = [
  {
    id: 1,
    title: "Learn the Basics First",
    description:
      "Before jumping into advanced topics, make sure your fundamentals are strong.",
    icon: "📘",
    category: "Study Strategy",
  },
  {
    id: 2,
    title: "Practice Every Day",
    description:
      "Consistent practice helps you retain concepts and improve faster.",
    icon: "🧠",
    category: "Consistency",
  },
  {
    id: 3,
    title: "Build Real Projects",
    description:
      "Apply your knowledge by building real-world projects to gain confidence.",
    icon: "🚀",
    category: "Hands-on Learning",
  },
];

const LearningTips = () => {
  return (
    <MyContainer className="pb-15">
      <h2
        id="learningTips"
        className="text-2xl md:text-3xl font-bold text-center mb-4"
      >
        Learning Tips
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Simple strategies to boost your learning journey
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {learningData.map((learn) => (
          <LearningCard key={learn.id} learn={learn} />
        ))}
      </div>
    </MyContainer>
  );
};

export default LearningTips;
