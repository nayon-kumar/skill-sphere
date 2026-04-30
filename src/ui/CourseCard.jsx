import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div>
      <div
        key={course.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
      >
        {/* Image */}
        <Image
          src={course.image}
          alt={course.title}
          width={40}
          height={40}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

          <p className="text-sm text-gray-500 mb-2">
            Instructor: {course.instructor}
          </p>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {course.description}
          </p>

          {/* Info Row */}
          <div className="flex justify-between items-center text-sm mb-3">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-gray-500">{course.duration}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between">
            <span className="text-yellow-500 font-semibold">
              ⭐ {course.rating}
            </span>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
