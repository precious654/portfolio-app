import React from "react";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="py-3 flex justify-between items-center">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="rounded-full w-12 h-12" />
        <p className="hidden sm:block font-semibold text-[16px] cursor-pointer">
          <span className="mr-2">|</span>Precious Odukwe
        </p>
      </Link>
      <ul className="list-none sm:flex items-center gap-8 hidden text-[#e2e2e2]">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`
            font-semibold text-sm cursor-pointer hover:text-[20px] hover:text-[#FFFFFF]
            ${active === link.id ? "text-white text-[16px]" : ""}
          `}
            onClick={() => setActive(link.id)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-cols">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        {toggle && (
          <div className="bg-white p-6 rounded-xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] opacity-90">
            <ul className="list-none flex flex-col items-start gap-4 text-[#333333]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                  font-semibold cursor-pointer
                  ${active === link.id ? "text-[16px]" : ""}
                `}
                  onClick={() => {
                    setActive(link.id);
                    setToggle((prevState) => !prevState);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
