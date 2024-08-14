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

  const [wakeLock, setWakeLock] = useState(null);
  const [isWakeLockActive, setIsWakeLockActive] = useState(false);

  const fetchRecipe = async () => {
    try {
      const recipe = await axios.get(`http://localhost:5001/api/recipes/${id}`);
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

  const openIngredientsWindow = () => {
    const ingredientsHtml = `
    <html>
      <head>
        <title>Ingredients</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f9f9f9;
          }
          h2 {
            text-align: center;
            color: #333;
            font-weight: 800; 
          }
          ul {
            list-style-type: disc;
            padding-left: 20px;
            list-style-type: none;
            margin: 50px;
            text-align: left;
          }
          li {
            margin-bottom: 10px;
            font-size: 18px;
            list-style-type: none;
            padding: 10px;
          }
          .checkbox {
           margin-right: 10px;
        </style>
      </head>
      <body>
        <h2>Ingredients for ${recipe.title}</h2>
        <ul>
          ${recipe.ingredients
            .map(
              (ingredient) => `
            <li>
            <input type="checkbox" class="checkbox" />
              ${ingredient.quantity} ${ingredient.unit} ${ingredient.name}
            </li>
          `
            )
            .join("")}
        </ul>
      </body>
    </html>
    `;
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write(ingredientsHtml);
    newWindow.document.close();
  };

  const requestWakeLock = async () => {
    try {
      const wakeLock = await navigator.wakeLock.request("screen");
      setWakeLock(wakeLock);
      setIsWakeLockActive(true);
      wakeLock.addEventListener("release", () => {
        setIsWakeLockActive(false);
      });
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };

  const releaseWakeLock = () => {
    if (wakeLock) {
      wakeLock.release();
      setWakeLock(null);
      setIsWakeLockActive(false);
    }
  };

  const toggleWakeLock = () => {
    if (isWakeLockActive) {
      releaseWakeLock();
    } else {
      requestWakeLock();
    }
  };

  const handleToggleChange = (e) => {
    toggleWakeLock();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(recipe);
  return (
    <div className="flex flex-col justify-items-center ">
      <Header />
      <div className="flex mt-12 mr-10 flex-col w-full justify-end items-center px-4">
        <p className=" w-60 mt-5 text-black text-sm ">
          {isWakeLockActive ? "Off" : "Keep Screen Awake for Cooking!"}
        </p>
        <label className="switch flex items-center">
          <input
            type="checkbox"
            checked={isWakeLockActive}
            onChange={handleToggleChange}
          />
          <span className="slider round flex justify-end"></span>
        </label>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-3/4 mt-10 md:w-128 h-128 bg-licorice rounded-md">
          <h2 className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {recipe.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-4">
            {recipe.category}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-4">
            {recipe.totalTime}
          </p>
          <div className="w-full text-lg md:text-xl lg:text-2xl flex justify-center gap-4 flex-wrap">
            <h3>Tags:</h3>
            {recipe.tags.map((tag, index) => (
              <span key={index} className="px-4 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 pl-6 text-lg md:text-xl lg:text-2xl text-left">
            <h2 className="text-3xl mb-5">Ingredients:</h2>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="grid grid-cols-2 ">
                  <span className="flex justify-start items-center">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="flex justify-start items-center">
                    {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={openIngredientsWindow}
            className="px-4 py-2 mt-7 bg-ecru text-white rounded-lg"
          >
            Open List in A Separate Window
          </button>

          <div className="mt-8 mb-10 m-6 text-lg md:text-xl lg:text-2xl text-left">
            <h2 className="text-3xl mb-5">Instructions</h2>

            <ul>
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-5">
                  {index + 1}. {instruction.step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <button
          onClick={toggleWakeLock}
          className="px-4 py-2 bg-green-500 text-white rounded-lg ml-4"
        >
          {isWakeLockActive ? "Disable Wake Lock" : "Enable Wake Lock"}
        </button> */}

        <div className="text-center mt-10 mb-10">
          <Link
            to={`/recipes/${recipe._id}/step`}
            className="inline-block bg-ecru text-white py-4 px-8 text-2xl rounded hover:bg-blue-700 transition-colors"
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
