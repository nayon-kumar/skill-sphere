import MyContainer from "../MyContainer/MyContainer";
import InstructorCard from "./InstructorCard";

const instructors = [
  {
    id: 1,
    name: "Sarah Smith",
    title: "Full-Stack Web Developer",
    experience: "8+ Years",
    rating: 4.9,
    students: 12000,
    courses: 15,
    bio: "Expert in MERN stack and scalable web applications.",
    image: "https://i.ibb.co.com/MDtm660b/Ellipse-1.png",
    specialization: "Web Development",
  },
  {
    id: 2,
    name: "John Doe",
    title: "UI/UX Designer",
    experience: "6+ Years",
    rating: 4.8,
    students: 9500,
    courses: 10,
    bio: "Specialist in user-centered design and modern UI systems.",
    image: "https://i.ibb.co.com/RGXwMmSJ/Ellipse-1-1.png",
    specialization: "Design",
  },
  {
    id: 3,
    name: "David Mona",
    title: "Data Science Instructor",
    experience: "7+ Years",
    rating: 4.9,
    students: 11000,
    courses: 12,
    bio: "Focuses on Python, machine learning, and real-world data projects.",
    image: "https://i.ibb.co.com/ffM44wp/Ellipse-1-10.png",
    specialization: "Data Science",
  },
];

const TopInstructors = () => {
  return (
    <MyContainer className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Top Instructors
        </h2>
        <p className="text-gray-500 mt-2">
          Learn from industry experts with proven experience
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((ins) => (
          <InstructorCard key={ins.id} ins={ins} />
        ))}
      </div>
    </MyContainer>
  );
};

export default TopInstructors;
