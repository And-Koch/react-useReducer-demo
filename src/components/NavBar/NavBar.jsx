import { NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
    </nav>
  );
};
