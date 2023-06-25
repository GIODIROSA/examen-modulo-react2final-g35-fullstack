import { useContext } from "react";

import { NavLink, Link } from "react-router-dom";
import "../assets/css/navbar.css";

import { PizzasContext } from "../context/PizzasContext";

const Navbar = () => {
  const { valoresContextoPizza } = useContext(PizzasContext);
  const { total } = valoresContextoPizza;
  return (
    <>
      <nav className="pizzeria-contenedor__navbar">
        <ul className="pizzeria-listado__pages">
          <li>
            <NavLink className="item-pages" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="item-pages" to="/carrito">
              Carrito
            </NavLink>
          </li>

          <li>
            <Link className="item-pages" to="/carrito">
              🛒${total}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
