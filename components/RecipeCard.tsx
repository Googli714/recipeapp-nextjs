'use client'

import React from 'react';
import { Recipe } from '@/lib/definitions';
import { AddRecipeToLS, RemoveRecipeFromLS, IsInLS } from '@/lib/utils';

interface RecipeProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeProps) {

  function handleClick(event: any): void {
    if (IsInLS(recipe.id)) {
      RemoveRecipeFromLS(recipe.id)
    }
    else {
      AddRecipeToLS(recipe.id)
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      <img
        src={recipe.imageurl}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>{IsInLS(recipe.id) ? "Remove From Favorites" : "Add To Favorites"}</button>

      <div className="p-4 flex flex-col space-y-2">
        <h1 className='font-bold text-gray-900'>{recipe.name}</h1>
        <div className="flex items-center space-x-2">
          <p className="text-gray-500">Prep Time:</p>
          <p className="font-bold text-gray-500">{recipe.timeneededinminutes} minutes</p>
        </div>
        <p className="text-gray-500">Steps: {recipe.stepscount}</p>
        <h3 className='font-bold text-gray-900'>Ingredients</h3>
        <ul className="list-disc pl-4">
          {recipe.ingrediants.split(',').map((ingrediant, index) => (
            <li key={index} className="text-gray-700">
              {ingrediant.trim()}
            </li>
          ))}
        </ul>
        <h3 className='font-bold text-gray-900'>Instructions</h3>
        <p className="text-gray-700">{recipe.steps}</p>
      </div>
    </div>
  );
}

export default RecipeCard;

