"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const SmallMenu = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden">
      <div
        onClick={() => setOpen(!open)}
        className={`transition-transform duration-300 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      >
        {open ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>
      <div>
        <div
          className={`px-5 py-5 absolute bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full transition-all duration-300 ease-in-out ${open ? "top-22 left-0" : "top-22 -left-200"}`}
        >
          <ul className="text-white font-semibold space-y-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`block bg-black px-5 py-2 rounded-lg ${pathName === "/" ? "bg-gray-300" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setOpen(false)}
              className={`block bg-black px-5 py-2 rounded-lg ${pathName === "/courses" ? "bg-gray-300" : ""}`}
            >
              Courses
            </Link>
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className={`block bg-black px-5 py-2 rounded-lg ${pathName === "/profile" ? "bg-gray-300" : ""}`}
            >
              My Profile
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallMenu;
