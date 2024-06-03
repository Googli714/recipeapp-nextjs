import { Recipe } from '@/lib/definitions';
import RecipeCard from './RecipeCard';

export default async function RecipeList({ recipes, query }: {recipes: Recipe[], query: string}) {

    recipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(query) || recipe.ingrediants.toLowerCase().includes(query))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}