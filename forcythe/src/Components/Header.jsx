import React, { useState, useMemo } from "react";
import logo from "../assets/forcythe logo.svg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  // is open button for mobile
  const [isOpen, setIsOpen] = useState(false);

  // Memoize nav links for better performance
  const navLinks = useMemo(
    () => [
      { name: "About", href: "/", className: "" },
      { name: "Services", href: "/", className: "" },
      { name: "Portfolio", href: "/", className: "" },
      { name: "Studio", href: "/", className: "" },
      { name: "Foundation", href: "/", className: "" },
      { name: "Careers", href: "/", className: "md:hidden" }, // visible only on small screens
      { name: "Blog", href: "/", className: "md:hidden" } // visible only on small screens
    ],
    []
  );

  return (
    <>
      <div className="w-full fixed top-0 left-0 py-[1.8rem] div-padding mx-auto flex justify-between gap-10 items-center z-30 backdrop-blur-md">
        <div className="flex items-center gap-20">
          <NavLink to="/">
            <img src={logo} alt="forcythe" className="w-28 sm:w-32 md:w-auto" />
          </NavLink>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 text-base">
            {navLinks.slice(0, 5).map(
              (
                nav // Only show first 5 items in desktop nav
              ) => (
                <NavLink key={nav.name} to={nav.href}>
                  {nav.name}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <div className="relative w-fit group hover:border-[#064386]">
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            <button
              aria-label="Book a call"
              className="custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
                     "
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <HiMenuAlt4 className="w-6 h-6" />
          ) : (
            <HiMenuAlt4 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Glowing border effect */}
        <div
          className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-white via-transparent to-white
      animate-border-light bg-[length:200%_200%] pointer-events-none"
        ></div>

        {/* Container with custom mobile menu shape */}
        <div className="relative text-white z-10 bg-transparent rounded-[inherit] w-full">
          <div className="w-full p-5 py-8 rounded-[2rem] menu-nav">
            {/* Menu content */}
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {navLinks.map((nav) => (
                <navLink
                  key={nav.name}
                  href={nav.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5"
                >
                  <a className="w-full text-base py-3">{nav.name}</a>
                </navLink>
              ))}
            </nav>
          </div>
        </div>
        {/* bottom color  */}
        <div className="bg-black absolute inset-[2px] rounded-[inherit]"></div>
      </div>
    </>
  );
};

export default Header;
