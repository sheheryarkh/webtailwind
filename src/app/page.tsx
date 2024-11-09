import Image from "next/image";
import web from "@/app/pics/dev.png"
export default function Home() {
  return (
    <>
    <main className="flex mx-9 justify-evenly gap max-sm:flex-col mt-4 bg-black text-white">
      <div className="mt-5"><h1>A full-stack developer is a software developer who is proficient in both front-end (client-side) and back-end (server-side) technologies. They work on the entire stack of a web application, from the user interface to the database and server logic. Full-stack developers often handle everything from building the user-facing parts to setting up and maintaining databases, APIs, and server infrastructure.</h1></div>
      <div className=" md: mt-6 mx-auto"><Image width={900} src={web} alt="picture"></Image></div>
    </main>
    </>
  );
}
