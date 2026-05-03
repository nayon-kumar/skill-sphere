"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import SmallMenu from "./SmallMenu";
import MyContainer from "../MyContainer/MyContainer";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const imageSrc = session?.user?.image?.trim();
  return (
    <div className="shadow-lg fixed w-full bg-[#F9FBFD] z-20">
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
          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                {imageSrc ? (
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Link href="/profile">
                      <Image
                        src={imageSrc}
                        alt="Profile"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </Link>
                  </div>
                ) : (
                  <Link href="/profile">
                    <FaUserCircle size={35} />
                  </Link>
                )}
              </>
            ) : (
              <></>
            )}

            {session?.user ? (
              <div
                onClick={async () => await authClient.signOut()}
                className="btn btn-primary"
              >
                Logout
              </div>
            ) : (
              <Link href="/auth/signin" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
