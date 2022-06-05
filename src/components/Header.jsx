import React, { useState } from "react";
// import Button from './Button';

const Header = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "WORKS", link: "#works" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="text-3xl text-blue-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          &lt;PORTFOLIO/&gt;
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
        <span className="text-white">
          <ion-icon
            name={open ? "close" : "menu"}
          ></ion-icon>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
              <a
                href={link.link}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>
          Get Started
        </Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
