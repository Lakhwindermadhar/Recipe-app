import React, { useState } from "react";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";
import sampleRecipes from "./data/sampleRecipes";
import './index.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(sampleRecipes);
  const [resultText, setResultText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (query) => {
    const filtered = sampleRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredRecipes(filtered);

    if (filtered.length > 0) {
      const result = filtered
        .map((r) => `🍽️ ${r.title}: ${r.description}`)
        .join("\n\n");
      setResultText(`${filtered.length} recipe(s) found:\n\n${result}`);
    } else {
      setResultText(`No matching recipes found for "${query}". Please try a different keyword.`);
    }
    setSuggestions([]);

  };

  const handleInputChange = (input) => {
    setSearchQuery(input);


    if (input.trim() === "") {
      setSuggestions([]);
    } else {
      const matches = sampleRecipes
        .filter((recipe) =>
          recipe.title.toLowerCase().includes(input.toLowerCase())
        )
        .map((r) => r.title);
      setSuggestions([...new Set(matches)]); 
    }
  };

  const handleSuggestionSelect = (title) => {
    setSearchQuery(title);
    handleSearch(title);
    setSuggestions([]); 
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
      Flavors Of India <span role="img" aria-label="Cooking">🍳</span>
      </h1>

      <RecipeSearch
        value={searchQuery}
        onChange={handleInputChange}
        onSearch={handleSearch}
        onSelectSuggestion={handleSuggestionSelect}
        suggestions={suggestions}
        resultText={resultText}
      />

<RecipeList recipes={filteredRecipes} />
    </div>
  );
}