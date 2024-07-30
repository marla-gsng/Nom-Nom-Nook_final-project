import React from "react";
import { useParams, Link } from "react-router-dom";

const SoloRecipeStep = ({ recipes }) => {
  const { id, stepId } = useParams();
  console.log({ id, stepId });
  console.log(recipes);

  const recipe = recipes.find((recipe) => recipe._id === id);
  console.log(recipe);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const step = recipe.steps.find(
    (step) => step.stepNumber === parseInt(stepId)
  );
  console.log(step);

  if (!step) {
    return <div>Step not found</div>;
  }

  // const SoloRecipeStep = ({ recipes }) => {
  //   console.log(recipes);
  //   const { id, stepId } = useParams();
  //   const recipe = recipes.find((recipe) => recipe._id === id);
  //   const stepIndex = parseInt(stepId, 10) - 1;
  //   //    const step = recipe.instructions[stepIndex];

  //   if (!recipe) {
  //     return <div>Recipe not found</div>;
  //   }

  //   const step = recipe.steps.find(
  //     (step) => step.stepNumber === parseInt(stepId)
  //   );

  //   if (!step) {
  //     return <div>Step not found</div>;
  //   }

  return (
    <>
      <div className="flex flex-col justify-items-center ">
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 mt-40 md:w-128 h-128 bg-amber-700 rounded-md">
            <h2 className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              {recipe.title}
            </h2>
            {/* Other content */}
          </div>
        </div>
      </div>
    </>

    // <div className="flex flex-col justify-items-center ">
    //   <div className="flex flex-col items-center justify-center">
    //     <div className="w-3/4 mt-40 md:w-128 h-128 bg-amber-700 rounded-md">
    //       <h2 className="mt-10 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
    //         {recipe.title}
    //       </h2>

    //       <p className="text-lg md:text-xl lg:text-2xl text-center mb-4">
    //         {recipe.category}
    //       </p>

    //       <p className="text-lg md:text-xl lg:text-2xl text-center mb-4">
    //         {recipe.totalTime}
    //       </p>

    //       <div className="w-full text-lg md:text-xl lg:text-2xl flex justify-center gap-4 flex-wrap">
    //         <h3>Tags:</h3>

    //         {recipe.tags.map((tag, index) => (
    //           <span key={index} className="px-4 py-1">
    //             {tag}
    //           </span>
    //         ))}
    //       </div>

    //       <div className="mt-5 pl-6 text-lg md:text-xl lg:text-2xl text-left">
    //         <h2 className="text-3xl mb-5">Ingredients:</h2>

    //         <ul>
    //           {recipe.ingredients.map((ingredient, index) => (
    //             <li key={index} className="grid grid-cols-2 ">
    //               <span className="flex justify-start items-center">
    //                 {ingredient.quantity} {ingredient.unit}
    //               </span>

    //               <span className="flex justify-start items-center">
    //                 {ingredient.name}
    //               </span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="mt-8 mb-10 m-6 text-lg md:text-xl lg:text-2xl text-left">
    //         <h2 className="text-3xl mb-5">Instructions</h2>

    //         <ul>
    //           <li className="mb-5">{step.step}</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="text-center mt-8 mb-10">
    //       <Link
    //         to={`/recipe/${id}/step/${stepId + 1}`}
    //         className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
    //       >
    //         Next Step
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SoloRecipeStep;
