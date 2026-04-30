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
          href="/apps"
          className={`${pathName === "/apps" ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-8 decoration-[#632EE3]" : ""}`}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          href="/installation"
          className={`${pathName === "/installation" ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-8 decoration-[#632EE3]" : ""}`}
        >
          Installation
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
