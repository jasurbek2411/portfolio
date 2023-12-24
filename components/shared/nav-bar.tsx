"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const pathname = usePathname();


  return (
    <div className="container bg-dark-grey min-h-[70px] rounded-b-sm flex items-center text-gray justify-between">
      <div className="flex items-center space-x-8">
        {navs.map((nav) => (
          <Link
            className={`text-[16px] font-[500] hover:text-white transition ${
              pathname === nav.path ? "text-white font-[600]" : ""
            }`}
            href={nav.path}
            key={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Link target="_blank" href={"https://t.me/Jasurbek_Mansuraliev"}>
          <Image
            src={"/svg/telegram.svg"}
            alt="telegram-icon"
            width={32}
            height={32}
          />
        </Link>
        <Link target="_blank" href={"https://github.com/hfutgf"}>
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
    label: "Porfolio",
    path: "/portfolio",
  },
  {
    label: "Bio",
    path: "/bio",
  },
];

