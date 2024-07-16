import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-10 mb-5">Recipe</h1>
          <div className="w-64 h-64 bg-gray-200 rounded-md">
            <h2 className="text-2xl font-bold text-center">{recipe.title}</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleRecipe;
