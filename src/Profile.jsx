import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [newPantryItem, setNewPantryItem] = useState("");

  useEffect(() => {
    // Fetch favorite recipes from the backend
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/favorites");
        setFavoriteRecipes(response.data);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      }
    };

    fetchFavoriteRecipes();
  }, []);

  const handleAddPantryItem = () => {
    if (newPantryItem.trim() !== "") {
      setPantryItems([...pantryItems, newPantryItem]);
      setNewPantryItem("");
    }
  };

  return (
    <div className="profile-container">
      <div className="favorites-section">
        <h2>Favorite Recipes</h2>
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      </div>
      <div className="pantry-section">
        <h2>Pantry</h2>
        <ul>
          {pantryItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newPantryItem}
          onChange={(e) => setNewPantryItem(e.target.value)}
          placeholder="Add new pantry item"
        />
        <button onClick={handleAddPantryItem}>Add</button>
      </div>
    </div>
  );
};

export default Profile;
