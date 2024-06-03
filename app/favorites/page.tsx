import FavoritesList from "@/components/FavoritesList";
import { GetRecipes } from "@/lib/db";

export default async function Page() {
    const recipes = await GetRecipes();

    return (<FavoritesList recipes={recipes}/>)
};