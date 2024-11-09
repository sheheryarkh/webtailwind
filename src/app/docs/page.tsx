import React from "react";
import about from "@/app/pics/image.avif";
import Image from "next/image";
const page = () => {
  return (
    <>
      <main className="flex mx-9 justify-evenly gap max-sm:flex-col mt-4">
        <div className="mt-5">
          <h1>
            Documentation is essential for providing clear, comprehensive
            instructions and guidelines for using software or systems. It
            ensures that developers, users, and stakeholders can easily
            understand, troubleshoot, and extend applications. Well-organized
            documentation improves collaboration, reduces errors, and enhances
            the overall user experience.
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
