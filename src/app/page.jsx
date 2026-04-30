import Hero from "@/components/Home/Hero";
import PopularCourses from "@/components/Home/PopularCourses";

export default function Home() {
  return (
    <div>
      <main className="pt-22">
        <Hero />
        <PopularCourses />
      </main>
    </div>
  );
}
