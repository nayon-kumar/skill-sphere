import Hero from "@/components/Home/Hero";
import LearningTips from "@/components/Home/LearningTips";
import NewReleaseCourses from "@/components/Home/NewReleaseCourses";
import PopularCourses from "@/components/Home/PopularCourses";
import TopInstructors from "@/components/Home/TopInstructors";

export default function Home() {
  return (
    <div>
      <main className="pt-22">
        <Hero />
        <PopularCourses />
        <NewReleaseCourses />
        <LearningTips />
        <TopInstructors />
      </main>
    </div>
  );
}
