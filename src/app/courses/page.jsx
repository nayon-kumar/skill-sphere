import SearchBox from "@/components/Courses/SearchBox";
import MyContainer from "@/components/MyContainer/MyContainer";
import CourseCard from "@/ui/CourseCard";

const getData = async () => {
  const res = await fetch("https://skill-sphere-pi-inky.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
};

const CoursesPage = async ({ searchParams }) => {
  const { search } = await searchParams;
  const courses = await getData();
  const filteredCourse = search
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()),
      )
    : courses;
  return (
    <div className="pt-25">
      <MyContainer className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          All Courses
        </h2>
        <SearchBox />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 pb-20">
          {filteredCourse.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default CoursesPage;
