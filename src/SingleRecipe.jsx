import React from "react";

import Header from "./HomePage/Header.jsx";
import Footer from "./HomePage/Footer.jsx";

const SingleRecipe = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10 mb-5">Recipe</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-64 h-64 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleRecipe;
