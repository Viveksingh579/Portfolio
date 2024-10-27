import React from 'react';
import logo from "../assets/assets/VivekLogo.png";
import { Link } from "../constants";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-12" src={logo} alt="logo"/>
      </div>
      <div className="m-2 flex items-center gap-4 text-2xl">
        <a href={Link.Linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={Link.Github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={Link.Twitter} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href={Link.Instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;