import heroImage from "../assets/images/FP-hero-op1.jpeg";
import "../App.css";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="hero">
      <div className="hero__container">
        <img src={heroImage} alt="Delicious Food" className="hero__img" />

        <div className="middle-section bg-bole bg-opacity-75 p-6 rounded-lg">
          <h1 className="hero__title text-black">Let's get cooking...</h1>
          <p className="hero__description text-lg text-bold text-white">
            Get inspired by our recipes and start your cooking journey now!
          </p>
          <input
            style={{ display: "flex", alignItems: "center" }}
            type="text"
            placeholder="Search recipes..."
            className="hero__search-bar text-lg p-2 rounded-xl w-full mt-4 h-16"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            className="bg-ecru text-white font-bold py-2 px-4 rounded mt-4 hover:bg-indigo-700"
            onClick={handleSearch}
          >
            <i className="fas fa-search">Find</i>
          </button>
          {searchQuery && (
            <p className="mt-4 text-white">
              Searching for: <strong>{searchQuery}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
