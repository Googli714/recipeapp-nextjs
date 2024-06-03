'use client'

import RecipeList from "@/components/RecipeList";
import Link from "next/link";

export default function FavoritesList({ recipes }) {

    let favorites = [];

    let favoritesLS = localStorage.getItem('favorites');

    if (favoritesLS == null || favoritesLS == '') {
        return (<div className="flex flex-col items-center justify-center h-screen">No favorites</div>)
    }

    const favoritesIds = favoritesLS.split(' ');

    favorites = recipes.filter((recipe) => favoritesIds.includes(recipe.id))

    return (
        <>
            <Link href="/">Home</Link>
            <RecipeList recipes={favorites} query=""></RecipeList>
        </>
    )
};