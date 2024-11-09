import React from "react";
import about from "@/app/pics/about.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="flex mx-9 justify-evenly gap max-sm:flex-col mt-4">
        <div className="mt-5">
          <h1>
            We are a full-service development company dedicated to creating
            innovative, scalable, and user-friendly digital solutions. Our team
            of skilled developers specializes in both front-end and back-end
            technologies, delivering high-quality web and mobile applications.
            We partner with businesses to transform ideas into impactful,
            efficient, and future-proof products.
          </h1>
        </div>
        <div className=" md: mt-6 mx-auto">
          <Image width={900} src={about} alt="picture"></Image>
        </div>
      </main>
    </>
  );
};

export default page;
