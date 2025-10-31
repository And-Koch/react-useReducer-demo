import './recipes.css'

export const Recipes = ({ recipes, isLoading, dispatch }) => {
  return (
    <div className="container">
      <h2>Recipes</h2>
      {isLoading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="recipesBox">
          {recipes.map((recipe) => (
            <div id={recipe.id} className='singleRecipeBox'>
              <img src={recipe.image} alt={recipe.name} width="200px" />
              <h1>{recipe.name}</h1>
              <h2>{recipe.ingredients}</h2>
              <p>{recipe.instructions}</p>
              <h3> Cook Time: {recipe.cookTimeMinutes} min</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
