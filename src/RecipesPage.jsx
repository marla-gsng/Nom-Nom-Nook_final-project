import React from "react";
// import Routing from "./Routing.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "./HomePage/Header.jsx";
import Footer from "./HomePage/Footer.jsx";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const recipes = await axios.get("http://localhost:5001/api/recipes");
      setRecipes(recipes.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-7 mb-7">Recipes</h1>
          <div className="flex flex-wrap justify-center items-center w-full px-40 m-10">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="w-48 h-48 bg-licorice rounded-md flex items-center justify-center m-2"
              >
                <Link to={`/recipe/${recipe._id}`} className="text-white">
                  {recipe.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RecipesPage;
