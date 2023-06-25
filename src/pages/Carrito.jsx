import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

const Carrito = () => {
  const { valoresContextoPizza } = useContext(PizzasContext);
  const { cart, incrementar, decrementar, total } = valoresContextoPizza;
  //console.log(cart, incrementar, decrementar, total);

  return (
    <>
      <div>
        <h1>Card total: {total}</h1>

        {cart.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <p>{item.desc}</p>

            <div>
              <button onClick={() => incrementar(index)}>+</button>
              <span>{item.count}</span>
              <button onClick={() => decrementar(index)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrito;
