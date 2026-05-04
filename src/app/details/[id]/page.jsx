import MyContainer from "@/components/MyContainer/MyContainer";
import EnrollButton from "@/ui/EnrollButton";
import Image from "next/image";
import { FaStar, FaClock, FaUser, FaCheck } from "react-icons/fa";

const getData = async () => {
  const res = await fetch("https://skill-sphere-pi-inky.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const allData = await getData();
  const course = allData.find((singleData) => singleData.id == id);

  return {
    title: course.title,
    description: course.description,
  };
}

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const allData = await getData();
  const course = allData.find((singleData) => singleData.id == id);
  return (
    <MyContainer className="pt-38 pb-20">
      <div className="rounded-2xl shadow-xl p-5 border-2 border-gray-300">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 items-center gap-6">
          {/* Image */}
          <div className="relative aspect-video">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
                {course.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {course.title}
              </h1>

              <p className="text-gray-600 mb-5">{course.description}</p>

              {/* Info */}
              <div className="flex flex-wrap gap-4 text-gray-700 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue-500" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-green-500" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>{course.rating}</span>
                </div>

                <div className="bg-gray-200 px-2 py-1 rounded text-xs">
                  {course.level}
                </div>
              </div>
            </div>

            {/* Button */}
            <EnrollButton course={course} />
          </div>
        </div>

        {/* Extra Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
            {course.learn.map((singleLearn, index) => (
              <li key={index} className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-green-500" /> <p>{singleLearn}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MyContainer>
  );
};

export default CourseDetailsPage;
