import React from "react";
import { nav_items } from "./nav_items";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex gap-5 text-lg text-black font-medium font-serif bg-[#00BFFF] py-5 px-2">
      {nav_items?.map((item) => {
        return (
          <ul key={item.id}>
            <li className="hover:underline hover:decoration-red-700 hover:text-blue-700 duration-200 ease-in">
              <Link href={item.href}>{item.title}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Navbar;
