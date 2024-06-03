import { sql } from '@vercel/postgres';
import {
    Recipe
} from './definitions';

export async function GetRecipes() {
    try {
        const data = await sql<Recipe>`SELECT * FROM recipes`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch recipes data.');
    }
}

export async function GetRecipeById(id: string) {
    try {
        const data = await sql<Recipe>`SELECT * FROM recipes WHERE id = ${id}`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch recipe data.');
    }
}