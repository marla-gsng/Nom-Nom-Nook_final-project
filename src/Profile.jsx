import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./Context/AuthContext";

import Header from "./HomePage/Header.jsx";
import Footer from "./HomePage/Footer.jsx";

const Profile = () => {
  const { userData, setUserData } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!userData) return;
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/users/${userData._id}/favorites`
        );
        console.log("hello", response.data);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      }
    };

    fetchFavoriteRecipes();
  }, [userData]);

  return (
    <div className="profile-container">
      <Header />
      <div className="favorites-section">
        <h2 className="text-3xl">Favorite Recipes</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

// const Profile = () => {
//   const [favoriteRecipes, setFavoriteRecipes] = useState([]);
//   const [pantryItems, setPantryItems] = useState([]);
//   const [newPantryItem, setNewPantryItem] = useState("");

//   useEffect(() => {
//     // Fetch favorite recipes from the backend
//     const fetchFavoriteRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/favorites");
//         setFavoriteRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching favorite recipes:", error);
//       }
//     };

//     fetchFavoriteRecipes();
//   }, []);

//   const handleAddPantryItem = () => {
//     if (newPantryItem.trim() !== "") {
//       setPantryItems([...pantryItems, newPantryItem]);
//       setNewPantryItem("");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="profile-container">
//         <div className="favorites-section">
//           <h2 className="text-3xl">Favorite Recipes</h2>
//           <ul>
//             {favoriteRecipes.map((recipe) => (
//               <li key={recipe.id}>{recipe.name}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="pantry-section">
//           <h2 className="text-3xl">Pantry</h2>
//           <ul>
//             {pantryItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//           <input
//             type="text"
//             value={newPantryItem}
//             onChange={(e) => setNewPantryItem(e.target.value)}
//             placeholder="Add new pantry item"
//           />
//           <button onClick={handleAddPantryItem}>Add</button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;
