import RecipeList from "@/components/RecipeList";
import Search from "@/components/Search";
import { GetRecipes } from "@/lib/db";
import Link from "next/link";

export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';

  const recipes = await GetRecipes();

  return (
    <body className="container mx-auto px-4 py-8">
      <Search></Search>
      <Link href="/favorites">Favorites</Link>
      <RecipeList recipes={recipes} query={query}></RecipeList>
    </body>
  )
};