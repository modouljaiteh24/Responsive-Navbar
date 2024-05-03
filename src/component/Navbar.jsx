import React, { useState } from "react";
import Button from "./Button";

export const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog's", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, Setopen] = useState(false);
  return (
    <div className="shadow-sm w-full fixed top-0 left-0 shadow-gray-600">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex item-center font-[poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Frontend Wed developer
        </div>
        <div
          onClick={() => Setopen(!open)}
          className="text-3xl absolute right-8 text-indigo-600 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
