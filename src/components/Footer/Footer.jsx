import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white pt-8.75 pb-7.5 ">
      <MyContainer>
        <div className="grid gap-4 justify-items-center text-center sm:text-left sm:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex items-center justify-center sm:justify-normal gap-1"
            >
              <h3 className="font-bold text-2xl md:text-3xl">
                <span className="text-[#C09F66]">Skill</span>
                <span className="text-[#0C7996]">Sphere</span>{" "}
              </h3>
            </Link>
            <p className="mt-4 text-gray-300">Online Learning Platform</p>
          </div>
          <div>
            <h3 className="font-medium text-md">Important Links</h3>
            <p className="text-gray-300 mt-3 cursor-pointer hover:underline">
              Terms & Conditions
            </p>
            <p className="text-gray-300 mt-1 cursor-pointer hover:underline">
              Privacy policy
            </p>
            <p className="text-gray-300 mt-1 cursor-pointer hover:underline">
              Contact info
            </p>
          </div>
          <div>
            <h3 className="font-medium text-md">Social Links</h3>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaXTwitter />
              </div>
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaLinkedinIn />
              </div>
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-7.5 border-t mt-8.75 border-[#E5E7EB]/50">
          <p className="text-[#FAFAFA]">
            Copyright © 2026 - All right reserved
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
