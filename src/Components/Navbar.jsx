import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pizza">Pizza</NavLink>
        </li>
        <li>
          <NavLink to="/carrito">Carrito</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
