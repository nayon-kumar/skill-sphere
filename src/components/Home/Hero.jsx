"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Online <span className="text-[#008BA0]">Courses</span> For Creative
            Mind
          </h1>

          <p className="my-6 text-gray-200">
            A modern e-learning platform where users can browse courses, watch
            lessons, and enroll in skill-based programs like Web Development,
            Design, and Marketing.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/courses"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Get Started
            </Link>

            <Link
              href="#learningTips"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
