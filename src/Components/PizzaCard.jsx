import { useContext } from "react";

//style
import "../assets/css/home-pizzeria.css";

//contexto
import { PizzasContext } from "../context/PizzasContext";
import { useNavigate } from "react-router-dom";

const PizzaCard = () => {
  const { valoresContextoPizza } = useContext(PizzasContext);
  //console.log("data-home=>", valoresContextoPizza.pizzas);

  const { pizzas, error, loading, addPizzaCarrito } = valoresContextoPizza;
  //console.log(pizzas);

  if (loading) return <h1>Loading...!</h1>;
  if (error) return <h1>{error}</h1>;

  //obtener id para url params
  const navigate = useNavigate();
  const handleDetallePizza = (id) => {
    // console.log(id);
    navigate(`/pizza/${id}`);
  };

  return (
    <>
      {pizzas &&
        pizzas.map((item) => (
          <div key={item.id} className="card-pizza__contenedor">
            <div className="card-pizza__img">
              <img src={item.img} alt={item.name} />
            </div>
            <hr className="border-separador" />
            <div className="card-pizza__titulo">
              <h2 className="titulo-pizza">{item.name.toUpperCase()}</h2>
            </div>
            <hr className="border-separador" />
            <div className="pizzeria-contendor__ingredientes">
              <ol className="listado-ingredientes">
                {item.ingredients.map((ingrediente, i) => (
                  <li key={i} className="ingrediente-item">
                    {ingrediente}
                  </li>
                ))}
              </ol>
            </div>
            <hr className="border-separador" />
            <div className="pizzeria-contenedor-botones">
              <button onClick={() => addPizzaCarrito(item)}>
                Agregar al carrito
              </button>
              <button
                to={`pizza/${item.id}`}
                onClick={() => handleDetallePizza(item.id)}
              >
                Detalle de la pizza
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default PizzaCard;
