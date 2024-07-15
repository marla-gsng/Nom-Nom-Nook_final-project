import React from "react";
import Routing from "./Routing.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./HomePage/Header.jsx";
import Footer from "./HomePage/Footer.jsx";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const recipes = await axios.get("http://localhost:5000/api/recipes");
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
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10 mb-5">Recipes</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="w-64 h-64 bg-pink-300 rounded-md">
              {recipe.title}
              {/* {recipe.title} {recipe.ingredients}
              {recipe.instructions} */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipesPage;