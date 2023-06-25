import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

//style
import "../assets/css/pizza-detalle.css";

const Pizza = () => {
  const [pizzaDetails, setPizzaDetails] = useState({});

  const { valoresContextoPizza } = useContext(PizzasContext);
  const { pizzas } = valoresContextoPizza;
  const { id } = useParams();

  const obtenerPizzaDetails = () => {
    const dataPizza = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetails(dataPizza || {});
  };

  useEffect(() => {
    obtenerPizzaDetails();
  }, [pizzas]);

  const { name, desc, img, price, ingredients } = pizzaDetails;

  return (
    <>
      <div className="pizzeria-contenedor-general">
        <div className="pizzeria-contenedor__pizzaDetalle">
          <h1>El detalle de la pizza: {pizzaDetails.name}</h1>
        </div>

        <div className="pizzeria-contenedor__pizzaDetails">
          <div className="pizzeria-contenedor__img">
            <img src={img} alt={name} />
          </div>

          <div className="pizzeria-contenedor__descripcion">
            <p className="pizzeria-descripcion">{desc}</p>
          </div>
          <hr />
          <div className="pizzeria-contenedor__ingrediente">
            <ol className="listado-ingrediente-pizzaDetalle">
              {ingredients &&
                ingredients.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </div>
          <hr />
          <div className="pizzeria-price__precio">
            <p>${price}</p>
          </div>

        </div>
        <div className="pizzeria-contenedor__btnPizzaDetails">
          <button className="btn-volver">
            <Link className="link-volver" to="/">Volver</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pizza;
