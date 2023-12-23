import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto flex items-center justify-around mt-[80px]">
      <div className="max-w-[540px] flex flex-col space-x-2">
        <h1 className="text-[44px] font-[700]">Jasurbek Mansuraliyev</h1>
        <p className="text-gray ">
          Frontend developer and student at the University TUIT!
        </p>
        <Button className="bg-green shadow-md mt-[20px] shadow-green-shadow hover:bg-green-shadow transition w-[70%] p-7">
          <a download={"/docs/resume.doc"} className="text-[16px] font-[500]">
            Click to see resume
          </a>
        </Button>
      </div>
      <div>
        <Image
          src={"/images/me.png"}
          alt="me-avatar"
          className="max-w-[350px] max-h-[350px] rounded-full"
          width={350}
          height={400}
        />
      </div>
    </div>
  );
};

export default HomePage;
