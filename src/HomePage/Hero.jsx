import React from "react";

const Hero = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 rounded-xl min-h-[480px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=23ef07f824434f9a8236d755b15aa490&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mt-24 mb-9 max-w-full w-[685px] max-md:mt-10">
        <div className="text-5xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          Find me something delicious!
        </div>
        <div className="flex gap-0 self-center mt-8 max-w-full rounded-xl w-[480px] max-md:flex-wrap">
          <div className="flex flex-col justify-center items-start py-6 pr-4 pl-4 bg-white rounded-xl border-t border-b border-l border-solid border-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd071160835c8fcf3537f35db3953ce9fb7a27dfb3a8b435bf2b1e959a995ae4?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="w-5 aspect-square"
            />
          </div>
          <input
            type="text"
            placeholder="Search for recipes"
            className="flex-1 justify-center p-2 text-base leading-6 bg-white border-t border-b border-solid border-stone-200 text-stone-500"
          />
          <div className="flex flex-col justify-center py-2 pr-2 text-base font-bold leading-6 text-center bg-white rounded-none border-t border-r border-b border-solid border-stone-200 text-neutral-900">
            <button className="justify-center px-5 py-3 bg-orange-500 rounded-xl text-ellipsis">
              Find Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
