import React from "react";

const RecipeCard = ({ image, title, duration }) => (
  <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
    <img loading="lazy" src={image} className="w-full aspect-[1.79]" />
    <div className="mt-3 text-base font-medium text-neutral-900">{title}</div>
    <div className="text-sm text-stone-500">{duration}</div>
  </div>
);

const RecipeSection = ({ title, recipes }) => {
  return (
    <>
      <div className="mt-9 text-2xl font-bold leading-7 text-neutral-900 max-md:max-w-full">
        {title}
      </div>
      <div className="px-px mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className={`flex flex-col w-[33%] ${
                index > 0 ? "ml-5" : ""
              } max-md:ml-0 max-md:w-full`}
            >
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeSection;
