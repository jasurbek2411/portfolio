import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorksPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-[48px] my-[32px] ">
      {works.map((work) => (
        <div className="flex items-center justify-around " key={work.link}>
          <div className="flex flex-col space-y-3 group ">
            <Link
              target="_blank"
              href={work.link}
              className="transition group-hover:text-gray"
            >
              <h3 className="text-[24px] font-[600]">{work.name}</h3>
            </Link>
            <p className="text-[16px] font-[500]">{work.deskription}</p>
          </div>
          <div>
            <Image
              className="rounded-md w-[300] h-[250]"
              src={work.img}
              alt="work-image"
              width={300}
              height={250}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const works = [
  {
    name: "Mediapark",
    deskription: "description",
    link: "https://mediapark.uz",
    img: "https://marketing.uz/tafest-konkurs-2022/uploads/works/covers/04a95701a9fb8caa39cc47bb7d9900e1.jpg",
  },
  {
    name: "AOS",
    deskription: "description",
    link: "https://aos.uz",
    img: "https://play-lh.googleusercontent.com/ARzgDy3mRzngCLezFi4tgqFKiAn6ugbwGvchjOee2MWEhwvZs-ToCE3sYjrdprfAPak8=w240-h480-rw",
  },
];

export default WorksPage;
