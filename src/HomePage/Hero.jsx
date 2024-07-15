import React from "react";
import heroImage from "../assets/images/hero-img_FP.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Let's get cooking...</h1>
        <img src={heroImage} alt="Delicious Food" className="hero__img" />
        <p className="hero__description">
          Get inspired by our recipes and start your cooking journey now !
        </p>
        <input
          style={{ display: "flex", alignItems: "center" }}
          type="text"
          placeholder="Search recipes..."
          className="hero__search-bar"
        />
        <button>
          <i className="fas fa-search">Find</i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
