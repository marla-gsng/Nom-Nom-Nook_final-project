import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SoloRecipeStep = (recipes) => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stepNumber, setStepNumber] = useState(0);

  const fetchRecipe = async () => {
    try {
      const recipe = await axios.get(`http://localhost:5001/api/recipe/${id}`);
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

  console.log(recipe && recipe.instructions.length);

  console.log(stepNumber);
  return (
    <>
      {recipe && !loading ? (
        <div className="flex flex-col justify-items-center min-h-screen w-full bg-licorice">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-3/4 mt-40 md:w-128 h-128 bg-bole rounded-lg p-12">
              <h3 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {recipe.title}
              </h3>
              <p className="text-center text-sm text-licorice md:text-xl lg:text-2xl">
                Step {stepNumber + 1} of {recipe.instructions.length}
              </p>

              <p className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                {recipe.instructions[stepNumber].step}
              </p>
            </div>
            <div className="flex space-x-32 mt-10 ">
              <button
                onClick={() => setStepNumber(stepNumber - 1)}
                disabled={stepNumber === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={() => setStepNumber(stepNumber + 1)}
                disabled={stepNumber === recipe.instructions.length - 1}
                className="px-6 py-2 bg-green-500 text-white rounded-lg"
              >
                Next
              </button>
            </div>
            <div className="mt-4">
              <Link to={`/recipe/${id}`}>
                <button className="px-3 py-1 bg-ecru text-white rounded-lg text-sm">
                  Back to Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default SoloRecipeStep;

// if (!Array.isArray(recipes)) {
//   return <div>Invalid recipes data</div>;
// }

// const recipe = recipes.find((recipe) => recipe._id === id);

// if (!recipe) {
//   return <div>Recipe not found</div>;
// }

// const stepIndex = recipe.steps.findIndex(
//   (step) => step.stepNumber === parseInt(stepId)
// );

// if (stepIndex === -1) {
//   return <div>Step not found</div>;
// }

// const step = recipe.steps[stepIndex];
// const nextStep = recipe.steps[stepIndex + 1];

// const handleNextClick = () => {
//   if (nextStep) {
//     navigate(`/recipes/${id}/step/${nextStep.stepNumber}`);
//   }
// };
