import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div>
      <div
        key={course.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden "
      >
        <div className="relative aspect-square">
          <Image src={course.image} alt={course.title} fill className="" />
        </div>

        <div className="p-5">
          <h3 className="text-xl line-clamp-1 font-semibold mb-2">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 mb-2">
            Instructor: {course.instructor}
          </p>

          <p className="text-gray-600 text-sm mb-3 line-clamp-1">
            {course.description}
          </p>

          <div className="flex justify-between items-center text-sm mb-3">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-gray-500">{course.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-yellow-500 font-semibold">
              ⭐ {course.rating}
            </span>

            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
