import React from "react";

const Footer = () => {
  return (
    <div className="bg-licorice w-full flex flex-col px-5 py-10 text-base leading-6 text-center text-ecru md:max-w-full">
      <div className="mt-10  flex flex-wrap gap-5 gap-y-6 justify-evenly content-center md:max-w-full">
        <div>
          <li className="list-none">
            <a href="#about" className="text-ecru">
              About Us
            </a>
          </li>
        </div>

        <div>
          <li className="list-none text-ecru">
            <a href="#contact" className="text-ecru">
              Contact
            </a>
          </li>
        </div>

        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
      <div className="mt-20 md:max-w-full">
        © 2024 Nom Nom Nook by Marla Geesing
      </div>
    </div>
  );
};

export default Footer;
