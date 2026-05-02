"use client";
import MyContainer from "@/components/MyContainer/MyContainer";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const imageSrc = session?.user?.image?.trim();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editProfile = (data) => {
    console.log(data);
    document.getElementById("my_modal_1").close();
  };

  return (
    <MyContainer className="pt-35 pb-20">
      {session?.user && (
        <div className="border-2 border-gray-300 shadow-xl rounded-2xl p-6 flex flex-wrap justify-center  sm:justify-between gap-6">
          <div className="flex items-center gap-4">
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
              <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>

              <p className="text-sm text-gray-400 mt-1">
                Joined:{" "}
                {new Date(session?.user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
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
              type="text"
              className="input w-full"
            />

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
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
  );
};

export default ProfilePage;
