import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home.jsx";
import RecipesPage from "./RecipesPage.jsx";
import SingleRecipe from "./SingleRecipe.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
      </Routes>
    </>
  );
};

export default Routing;
