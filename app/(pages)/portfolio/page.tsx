import WorkItem from "@/components/shared/work-item";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="container mx-auto mt-[48px] flex flex-col gap-[96px] mb-[32px]">
      {portfolio.map((work, i) => (
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

const portfolio = [
  {
    title: "Twitter X clone.",
    img: "https://pbs.twimg.com/profile_images/1683366300054069248/67v23AEj_400x400.jpg",
    description:
      "Developed in Next.js with TypeScript using Shadcn UI, Zustand, Next.js-Auth and MongoDB.",
    link: "https://github.com/hfutgf/twitter-x-clone.git",
  },
  {
    title: "Googole drive clone.",
    img: "https://i.pcmag.com/imagery/reviews/02PHW91bUvLOs36qNbBzOiR-12..v1569471162.png",
    description:
      "Developed using Next.js and TypeScript using Shadcn UI, Zustand, Clerk-nextjs and Firebase.",
    link: "https://github.com/hfutgf/google-drive-clone.git",
  },
  {
    title: "Real time chat.",
    img: "https://miro.medium.com/v2/resize:fit:700/1*mLE5ZxhtATxrwh20SL2Tlg.png",
    description: "Developed useing Reactjs and Typescript using only firebase.",
    link: "https://github.com/hfutgf/real-time-chat-from-firebase.git",
  },
  {
    title: "Chess",
    img: "https://play-lh.googleusercontent.com/bpdkCCI8e5IbAkLgRwI3e5dJDSR_kFe1Ioh7f7_AxxaR_Jn9VHF1Hx56DEAqGnHPynmd",
    description:
      "I wrote this application to better understand and work with OOP. However, there are still shortcomings that need to be corrected.",
    link: "https://github.com/hfutgf/oop_chess.git",
  },
  {
    title: "Cloud storage.",
    img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/04/940e9395-cloud-storage.jpg",
    description: "Was shouted Nextjs.",
    link: "https://github.com/hfutgf/cloud-storage-client.git",
  },
  {
    title: "Cloud storage server.",
    img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/04/940e9395-cloud-storage.jpg",
    description: "This is my most difficult application written in Nest.js.",
    link: "https://github.com/hfutgf/cloud-storage-server.git",
  },
  {
    title: "Mini shop.",
    img: "https://www.gazeta.uz/media/img/2018/05/105jqd15274336125929_b.jpg",
    description: "Mini online store using React and Express.js.",
    link: "https://github.com/hfutgf/store_reactjs_expressjs.git",
  },
];

export default PortfolioPage;
