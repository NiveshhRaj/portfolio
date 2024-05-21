import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between px-5 py-[3rem] bg-slate-300 font-montserrat border-b-2 border-white ">
        <a
          href="#"
          className="text-4xl font-bold font-poppins font-rowdies hover:text-white"
        >
          NIVESHHRAJ
        </a>
        <nav className="hidden md:block">
          <ul className="flex px-5 font-semibold text-black">
            <li className="hover:text-white">
              <a href="#">HOME</a>
            </li>
            <li className="hover:text-white">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:text-white">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="hover:text-white">
              <a href="#resume">RESUME</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        {toggleMenu && (
          <nav className="block md:hidden">
            <ul
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex flex-col px-5 text-white mobile-nav"
            >
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#resume">RESUME</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        )}

        <button
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          className="block md:hidden"
        >
          <Bars3Icon className="h-8 text-white" />
        </button>
      </header>
    </>
  );
}

export default Header;
