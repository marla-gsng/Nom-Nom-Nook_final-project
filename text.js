 <div className="hero w-full">
//       <div className="hero__container w-full">
//         <img
//           src={heroImage}
//           alt="Delicious Food"
//           className="hero__img w-full"
//         />

//         <div className="middle-section bg-bole bg-opacity-75 p-6 rounded-lg">
//           <h1 className="hero__title text-black">Let's get cooking...</h1>
//           <p className="hero__description text-lg text-bold text-white">
//             Get inspired by our recipes and start your cooking journey now!
//           </p>
//           <input
//             style={{ display: "flex", alignItems: "center" }}
//             type="text"
//             placeholder="Search recipes..."
//             className="hero__search-bar text-lg p-2 rounded-xl w-full mt-4 h-16"
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button
//             className="bg-ecru text-white font-bold py-2 px-4 rounded mt-4 hover:bg-indigo-700"
//             onClick={handleSearch}
//           >
//             <i className="fas fa-search">Find</i>
//           </button>
//           {/* {searchQuery && (
//             <p className="mt-4 text-white">
//               Searching for: <strong>{searchQuery}</strong>
//             </p>
//           )} */}
//           {/* <div>
//             <h2>Recipes</h2>
//             <ul>
//               {results.recipes.map((recipe) => (
//                 <li key={recipe._id}>{recipe.name}</li>
//               ))}
//             </ul>

//             <h2>Ingredients</h2>
//             <ul>
//               {results.ingredients.map((ingredient) => (
//                 <li key={ingredient._id}>{ingredient.name}</li>
//               ))}
//             </ul>

//             <h2>Steps</h2>
//             <ul>
//               {results.steps.map((step) => (
//                 <li key={step._id}>{step.description}</li>
//               ))}
//             </ul>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// const handleSearch = () => {
  //   console.log("Searching for:", searchQuery);
  // };

  // const handleSearch = async () => {
  //   try {
  //     const response = await  fetch(
  //       `http://localhost:5001/api/search?q=${searchQuery}`
  //     );
  //     const data = await response.json();
  //     setResults(data);
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };