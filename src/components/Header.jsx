import React, { useState } from "react";

const Header = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CERTIFICATES", link: "#certificates" },
    { name: "MY VIDEOS", link: "#videos" },
    { name: "WORKS", link: "#works" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-600 py-3 md:px-5 px-2">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="text-3xl text-blue-600 mr-1 pt-1">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          &lt;PORTFOLIO/&gt;
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <span className="text-white">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-gray-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-19 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg md:my-0 my-6 hover:text-black-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-200"
            >
              <a href={link.link} className="text-white  duration-500 ">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
