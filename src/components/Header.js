import React from "react";

import Logo from "../assets/mylogo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[111px] h-[48px]" src={Logo} alt="logo" />
          </a>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={10}
          >
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
