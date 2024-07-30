import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home.jsx";
import RecipesPage from "./RecipesPage.jsx";
import SingleRecipe from "./SingleRecipe.jsx";
import SoloRecipeStep from "./SoloRecipeStep.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/recipe/:id/step" element={<SoloRecipeStep />} />
      </Routes>
    </>
  );
};

export default Routing;
