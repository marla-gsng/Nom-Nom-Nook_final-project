import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'


const SoloRecipeStep = (recipes) => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stepNumber, setStepNumber] = useState(0)

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

  console.log(recipe && recipe.instructions.length)


  console.log(stepNumber)
  return (
    <>
      {recipe && !loading ? (
        <div className="flex flex-col justify-items-center ">
          <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 mt-40 md:w-128 h-128 bg-amber-700 rounded-md">
              <h2 className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                {recipe.instructions[stepNumber].step}
              </h2>
            </div>
            <button onClick={() => setStepNumber(stepNumber + 1)} disabled={stepNumber === recipe.instructions.length - 1} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      )
        : 'Loading'
      }

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
