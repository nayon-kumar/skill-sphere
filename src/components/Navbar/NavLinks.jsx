"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-8 decoration-[#632EE3]" : ""}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={`${pathName === "/courses" ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-8 decoration-[#632EE3]" : ""}`}
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`${pathName === "/profile" ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-8 decoration-[#632EE3]" : ""}`}
        >
          My Profile
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
