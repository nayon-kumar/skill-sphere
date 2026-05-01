import Image from "next/image";
import { FaStar, FaUsers, FaBookOpen } from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Instructors
        </h2>
        <p className="text-gray-500 mt-2">
          Learn from industry experts with proven experience
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 "
          >
            <div className="relative aspect-square">
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                {ins.specialization}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                {ins.name}
              </h3>
              <p className="text-sm text-gray-500">{ins.title}</p>

              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <FaStar />
                <span className="text-sm font-medium text-gray-700">
                  {ins.rating}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {ins.bio}
              </p>

              <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FaUsers className="text-indigo-500" />
                  <span>{ins.students.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBookOpen className="text-indigo-500" />
                  <span>{ins.courses} Courses</span>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                Experience: {ins.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default TopInstructors;
