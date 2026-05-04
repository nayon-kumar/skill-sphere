"use client";
import MyContainer from "@/components/MyContainer/MyContainer";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaBookReader, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { myContext } from "@/context/CourseContext";
import EnrolledCard from "@/ui/EnrolledCard";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ProfileClient = () => {
  const { enrolledCourses, setEnrolledCourses } = useContext(myContext);

  const { data: session } = authClient.useSession();
  const imageSrc = session?.user?.image?.trim();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editProfile = async (data) => {
    const updateData = {};

    if (data.name) {
      updateData.name = data.name;
    }

    if (data.image && data.image.trim() !== "") {
      updateData.image = data.image;
    }

    await authClient.updateUser(updateData);

    toast.success("Profile Edited Successfully!", {
      position: "bottom-center",
    });

    document.getElementById("my_modal_1").close();
  };
  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <MyContainer className="pt-35 pb-20">
          {session?.user && (
            <div className="border-2 border-gray-300 shadow-xl rounded-2xl p-6 flex flex-wrap justify-center  sm:justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt="profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  />
                ) : (
                  <FaUserCircle size={40} />
                )}

                <div className="flex-1">
                  <h2 className="sm:text-2xl text-xl font-bold">
                    {session?.user?.name}
                  </h2>
                  <p className="text-gray-600">{session?.user?.email}</p>

                  <p className="text-sm text-gray-400 mt-1">
                    Joined:{" "}
                    {new Date(session?.user?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}

          {/* Modal */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit your profile</h3>

              <form
                onSubmit={handleSubmit(editProfile)}
                className="text-left space-y-4 mt-4"
              >
                <label className="label">Name*</label>
                <input
                  {...register("name", {
                    required: "Name field is required",
                  })}
                  defaultValue={session?.user?.name}
                  type="text"
                  className="input w-full"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}

                <label className="label">Photo Url (link)</label>
                <input
                  {...register("image", {
                    pattern: {
                      value: /^https?:\/\/.+$/,
                      message: "URL must start with http:// or https://",
                    },
                  })}
                  defaultValue={session?.user?.image}
                  type="text"
                  className="input w-full"
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                    className="btn"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Edit Profile
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </MyContainer>
      </motion.div>
      <div>
        {session?.user && (
          <MyContainer className="pb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center pb-10">
              Your Enrolled Courses
            </h2>

            {enrolledCourses.length > 0 ? (
              <div className="flex flex-col gap-6">
                {enrolledCourses.map((course) => (
                  <EnrolledCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col text-gray-500 items-center justify-center py-20">
                <FaBookReader size={120} />
                <p className="mt-4 text-center">
                  You have not enrolled in any course yet. Go to courses tab for
                  enroll your favourite courses.
                </p>
              </div>
            )}
          </MyContainer>
        )}
      </div>
    </>
  );
};

export default ProfileClient;
