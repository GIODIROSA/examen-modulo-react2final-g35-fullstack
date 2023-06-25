import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

const Pizza = () => {
  const [pizzaDetails, setPizzaDetails] = useState({});

  console.log("probando=>", pizzaDetails);

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
      <h1>El detalle de la pizza: {pizzaDetails.name}</h1>
      <div className="pizzeria-contenedor__pizzaDetails">
        <div className="pizzeria-contenedor__img">
          <img src={img} alt={name} />
        </div>

        <div className="pizzeria-contenedor__descripcion">
          <p className="pizzeria-descripcion">{desc}</p>
        </div>

        <div className="pizzeria-contenedor__ingrediente">
          <ol>
            {ingredients &&
              ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </div>

        <div className="pizzeria-price__precio">
          <p>{price}</p>
        </div>
      </div>
      <div className="pizzeria-contenedor__btnPizzaDetails">
        <button className="btn-volver">
          <Link to="/">Volver</Link>
        </button>
      </div>
    </>
  );
};

export default Pizza;
