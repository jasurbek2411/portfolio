import WorkItem from "@/components/shared/work-item";
import React from "react";

const WorksPage = () => {
  return (
    <div className="container mx-auto mt-[48px] flex flex-col gap-[96px]">
      {works.map((work, i) => (
        <WorkItem
          key={work.img}
          description={work.description}
          i={i}
          img={work.img}
          title={work.title}
          link={work.link}
        />
      ))}
    </div>
  );
};

const works = [
  {
    title: "wokr",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NdW5ADmbWwWNc2MN0oy5vJ_dRtvwGPBE_Q&usqp=CAU",
    description: "wokr",
    link: "fdasfas",
  },
  {
    title: "wokr",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NdW5ADmbWwWNc2MN0oy5vJ_dRtvwGPBE_Q&usqp=CAU",
    description: "wokr",
    link: "fdasfas",
  },
];

export default WorksPage;
