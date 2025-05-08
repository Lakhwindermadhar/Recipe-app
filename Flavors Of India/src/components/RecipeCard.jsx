import React, { useState } from "react";

export default function RecipeCard({ recipe }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this recipe: ${recipe.title}`,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  const instructionSteps = Array.isArray(recipe.instructions)
    ? recipe.instructions
    : recipe.instructions?.steps || [];

  return (
    <div className="border p-5 rounded-2xl shadow-md transition-transform hover:scale-[1.02] bg-white">
      <h2 className="text-2xl font-bold mb-2 text-indigo-700">{recipe.title}</h2>
      <p className="text-gray-700 mb-2">{recipe.description}</p>
      
      <div className="text-sm text-gray-600 space-y-1 mb-3">
        <p>⏱ <strong>Ready in:</strong> {recipe.readyIn}</p>
        <p>👨‍🍳 <strong>Chef:</strong> {recipe.chef}</p>
        <p>✅ <strong>Safe to make:</strong> {recipe.safe ? "Yes" : "No"}</p>
      </div>

      <button
        onClick={toggleInstructions}
        className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
      >
        {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
      </button>

      {showInstructions && instructionSteps.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-gray-800">
          {instructionSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      )}

      <div className="my-3">
        <label className="block text-sm font-semibold mb-1 text-gray-800">⭐ Rate this recipe:</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl transition-colors duration-200 ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              title={`${star} Star`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Leave your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-300 p-3 rounded-md mt-2 resize-none"
        rows={3}
      />

      <button
        onClick={() => {
          if (review.trim() === "") return alert("Please write a review.");
          console.log("Review Submitted:", { review, rating });
          alert("Thanks for your review!");
          setReview("");
          setRating(0);
        }}
        className="mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Submit Review
      </button>

      <button
        onClick={handleShare}
        className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Share with Friends
      </button>
    </div>
  );
}
