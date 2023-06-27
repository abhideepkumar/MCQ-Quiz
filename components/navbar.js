import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <ul className="flex justify-end text-lg nav-font text-right rounded-md p-2">
      <Link href="/" className="absolute left-0 top-0  px-5 ">
      </Link>
      <Link href="/" className="px-3 bg-red-100 mx-2 rounded-md py-2">
        Quiz
      </Link>
      <Link href="/admin" className="px-3 bg-blue-100 mx-2 rounded-md py-2">
        Admin
      </Link>
      
    </ul>
  );
};

export default Navbar;
