import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col px-5 py-10 mt-5 w-full text-base leading-6 text-center max-w-[960px] text-stone-500 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 gap-y-6 justify-between content-center max-md:max-w-full">
        <div>
          <li className="list-none">
            <a href="#about">About Us</a>
          </li>
        </div>

        <div>
          <li className="list-none">
            <a href="#contact">Contact</a>
          </li>
        </div>

        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
      <div className="mt-20 max-md:max-w-full">
        © 2024 Nom Nom Nook by Marla Geesing{" "}
      </div>
    </div>
  );
};

export default Footer;
