import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  img: string;
  description: string;
  i: number;
  link: string;
}

const WorkItem = ({ description, i, img, title, link }: Props) => {
  return (
    <div
      className={`flex items-center justify-around ${
        i % 2 !== 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-[24px] font-[600]">{title}</h2>
        <p className="text-[16px]">{description}</p>
        <Link
          href={link}
          className="flex items-center gap-x-2 hover:text-gray transition"
        >
          <Image
            src={"/svg/github.svg"}
            alt="github-icon"
            width={24}
            height={24}
          />
          Github
        </Link>
        <p></p>
      </div>
      <div>
        <Image
          className="rounded-md"
          src={img}
          alt="work-img"
          width={400}
          height={350}
        />
      </div>
    </div>
  );
};

export default WorkItem;
