import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container bg-dark-grey min-h-[70px] rounded-b-sm flex items-center text-gray justify-between">
      <div className="flex items-center space-x-8">
        {navs.map((nav) => (
          <Link
            className="text-[16px] font-[500] hover:text-white transition"
            href={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"https://t.me/Jasurbek_Mansuraliev"}>
          <Image
            src={"/svg/telegram.svg"}
            alt="telegram-icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href={"https://github.com/hfutgf"}>
          <Image
            src={"/svg/github.svg"}
            alt="telegram-icon"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

const navs = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Works",
    path: "/works",
  },
  {
    label: "Bio",
    path: "/bio",
  },
];

export default Navbar;
