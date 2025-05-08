import React, { useState, useEffect } from "react";

export default function RecipeSearch({ 
  value,
  onChange,
  onSearch,
  resultText,
  suggestions = [],
  onSelectSuggestion
}) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions]);

  const handleSearch = () => {
    onSearch(value);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowSuggestions(true);
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setShowSuggestions(true);
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      onSelectSuggestion(suggestions[highlightedIndex]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={value ? `Searching for: ${value}` : "🔍 Search for recipes..."}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-gray-900 dark:text-white"
          />

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white dark:bg-gray-800 border border-gray-300 rounded w-full mt-1 max-h-40 overflow-y-auto shadow-lg">
              {suggestions.map((item, index) => (
                <li
                  key={item}
                  onMouseDown={() => {
                    onSelectSuggestion(item);
                    setShowSuggestions(false);
                  }}
                  className={`px-4 py-2 cursor-pointer text-gray-800 dark:text-white ${
                    index === highlightedIndex ? 'bg-indigo-100 dark:bg-indigo-700' : ''
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      <textarea
        value={resultText}
        readOnly
        rows={4}
        className="max-w-100 max-h-25 border-gray-950 p-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-white"
        placeholder="Search result will appear here..."
      />
    </div>
  );
}
