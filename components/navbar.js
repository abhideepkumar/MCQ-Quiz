import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex justify-end text-lg nav-font text-right rounded-md p-2">
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
