
export const FetchRecipes = async () => {
    const recipesFetch = await fetch('https://dummyjson.com/recipes');
    const recipesRes = await recipesFetch.json();
    return recipesRes.recipes;
}