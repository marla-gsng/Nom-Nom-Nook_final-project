import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "./HomePage/Header.jsx";
import Footer from "./HomePage/Footer.jsx";

const SingleRecipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipe = async () => {
    try {
      const recipe = await axios.get(`http://localhost:5000/api/recipe/${id}`);
      setRecipe(recipe.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(recipe);
  return (
    <div className="flex flex-col justify-items-center w-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mt-10 mb-5">
          Recipe
        </h1>
        <div className="w-3/4 md:w-128 h-128 bg-amber-700 rounded-md">
          <h2 className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {recipe.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            {recipe.category}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            {recipe.totalTime}
          </p>
          <div className="w-full text-lg md:text-xl lg:text-2xl flex justify-center gap-4 flex-wrap">
            <h3>Tags:</h3>
            {recipe.tags.map((tag, index) => (
              <span key={index} className=" px-4 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 pl-6 text-lg md:text-xl lg:text-2xl text-left">
            <h2 className="text-3xl mb-5">Ingredients:</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} {ingredient.quantity} {ingredient.unit}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 mb-10 m-6 text-lg md:text-xl lg:text-2xl text-left">
            <h2 className="text-3xl mb-5">Instructions</h2>

            <ul>
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-5">
                  {instruction.step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 mb-10">
          <Link
            to="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Let's Cook!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleRecipe;
