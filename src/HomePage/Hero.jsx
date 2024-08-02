import heroImage from "../assets/images/FP-hero-op1.jpeg";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState("");
  const [searchRecipe, setSearchRecipe] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
    try {
      const recipe = await axios.get(
        `http://localhost:5001/api/recipe/${searchRecipe}`
      );
      setSearch(recipe.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="hero w-full">
        <div className="hero__container w-full">
          <img
            src={heroImage}
            alt="Delicious Food"
            className="hero__img w-full"
          />

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
              value={searchRecipe}
              onChange={(e) => setSearchRecipe(e.target.value)}
            />
            <button
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-indigo-700"
              onClick={fetchRecipe}
            >
              <i className="fas fa-search">Find</i>
            </button>
          </div>
        </div>
      </div>
      {search && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 mt-10 md:w-128 h-128 bg-licorice rounded-md">
            <h2 className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              {search.title}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
