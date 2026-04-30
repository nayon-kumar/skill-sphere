import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import NavLinks from "./NavLinks";
import SmallMenu from "./SmallMenu";
import MyContainer from "../MyContainer/MyContainer";
const Navbar = () => {
  return (
    <div className="shadow-lg fixed w-full bg-white z-20">
      <MyContainer>
        <div className="py-5 flex sm:gap-5 items-center justify-between">
          {/* Left side */}
          <div className="flex gap-2 items-center">
            <SmallMenu />
            <Link href="/">
              <Image src={logo} height={40} width={70} alt="Logo" />
            </Link>
          </div>
          {/* Middle side */}
          <div className="hidden md:flex">
            <ul className="flex gap-8 font-semibold">
              <NavLinks />
            </ul>
          </div>
          {/* Right side */}
          <div>
            <div className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
              <FaGithub size={20} />
              Contribute
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
