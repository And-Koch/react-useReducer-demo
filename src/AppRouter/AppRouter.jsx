
import { Route, Routes } from 'react-router-dom';
import { Users } from '../Pages/Users/Users';
import { Products } from '../Pages/Products/Products';
import { Recipes} from '../Pages/Recipes/Recipes';
import { Layout } from '../components/Layout/Layout';
import { HomePage } from '../Pages/HomePage/HomePage';
import { useEffect, useReducer } from 'react';
import {Reducer,initialState} from "../components/DataReducer/DataReducer";
import { FetchUsers } from '../components/FetchUsers/FetchUsers';
import { FetchProducts } from '../components/FetchProducts/FetchProducts';
import { FetchRecipes } from '../components/FetchRecipes/FetchRecipes';



export const AppRouter = () => {

    const[state,dispatch] = useReducer(Reducer,initialState);

    useEffect(() => {
        const fetchUsers = async () => {
           dispatch({type: "LOADING_USERS"});
           const users = await FetchUsers();
           dispatch({type: "SET_USERS", payload: users})
        };

        const fetchProducts = async () => {
            dispatch({type: "LOADING_PRODUCTS"});
            const products = await FetchProducts();
            dispatch({type: 'SET_PRODUCTS', payload: products})
        };

        const fetchRecipes = async () => {
          dispatch({type: "LOADING_RECIPES"});
          const recipes = await FetchRecipes();
          dispatch({type: "SET_RECIPES", payload: recipes})
        }

        fetchUsers();
        fetchProducts();
        fetchRecipes();
    },[])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<Users users={state.users} isLoading={state.isLoadingUsers} dispatch={dispatch} />} />
        <Route path="products" element={<Products products={state.products} isLoading={state.isLoadingProducts} dispatch={dispatch}/>} />
        <Route path="recipes" element={<Recipes  recipes={state.recipes} isLoading={state.isLoadingRecipes} dispatch={dispatch}/>}/>
      </Route>
    </Routes>
  );
};

