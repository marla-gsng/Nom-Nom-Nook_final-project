import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home.jsx";
import RecipesPage from "./RecipesPage";
import SingleRecipe from "./SingleRecipe";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
      </Routes>
    </>
  );
};

export default Routing;
