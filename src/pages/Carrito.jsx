import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { Link } from "react-router-dom";
//style
import "../assets/css/carrito.css";

const Carrito = () => {
  const { valoresContextoPizza } = useContext(PizzasContext);
  const { cart, incrementar, decrementar, total } = valoresContextoPizza;
  //console.log(cart, incrementar, decrementar, total);

  return (
    <>
      {cart.length ? (
        <div>
          <div className="contenedor-titulo-total">
            <h1>Card total: {total}</h1>
          </div>

          <div className="wrapper-pedido">
            <div className="contenedor-card-general">
              {cart.map((item, index) => (
                <div className="card-pedido" key={index}>
                  <div className="contenedor-imagenPedido">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="titulo-card-pedido">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="contenedor-precio">
                    <h3>${item.price}</h3>
                  </div>
                  <div className="contenedor-descripcionPedido">
                    <p>{item.desc}</p>
                  </div>

                  <div className="contendor-boton-pedido">
                    <button
                      className="signo-plus"
                      onClick={() => incrementar(index)}
                    >
                      +
                    </button>
                    <span className="count-pedido">{item.count}</span>
                    <button
                      className="signo-minus"
                      onClick={() => decrementar(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="contenedor-mensaje">
          <h1 className="carrito-vacio">El carrito está vacio</h1>
        </div>
      )}

      <div className="contenedor-boton-volver">
        <button className="btn-volver-carrito">
          <Link to="/" className="volver-link">
            Volver
          </Link>
        </button>
      </div>
    </>
  );
};

export default Carrito;
