

export const initialState = {
  users: [],
  products: [],
  recipes: [],
  isLoadingUsers: true,
  isLoadingProducts: true,
  isLoadingRecipes: true,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoadingUsers: false,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoadingProducts: false,
      };
    case 'SET_RECIPES' :
      return {
        ...state,
        recipes: action.payload,
        isLoadingRecipes: false,
      };
    case 'LOADING_USERS':
      return {
        ...state,
        isLoadingUsers: true,
      };
    case 'LOADING_PRODUCTS':
      return {
        ...state,
        isLoadingProducts: true,
      };
      case 'LOADING_RECIPES':
       return {
        ...state,
        isLoadingRecipes: true,
       };
            default:
              return state;
    }
};
