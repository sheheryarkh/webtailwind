import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className="flex gap-3 py-4 px-2 max-sm:bg-black bg-yellow-100 max-sm:text-white">
        <div className="ml-4">khanz web</div>
        <nav className="flex list-none gap-4 ml-auto mr-2 ">
          <Link className=" hover:text-sm " href="/"><li>home</li></Link>
          <Link className=" hover:text-sm " href="/about"><li>about</li></Link>
          <Link className=" hover:text-sm " href="/docs"><li>docs</li></Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
