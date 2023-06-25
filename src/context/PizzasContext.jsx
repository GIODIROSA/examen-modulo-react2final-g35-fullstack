import { createContext, useEffect, useState } from "react";

import { useFetch } from "../hook/useFetch";

//crear el contexto
export const PizzasContext = createContext();

//Proveer el contexto
export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  //DATA de Api piza
  const { data, error, loading } = useFetch("/pizzas.json");
  //console.log("data=>", data);

  useEffect(() => {
    if (data) {
      setPizzas(data);
    }
  }, [data]);

  //añadir al carrito
  const addPizzaCarrito = (pizza) => {
    const findPizzaIndex = cart.findIndex((item) => item.id === pizza.id);
    const producto = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      count: 1,
      desc: pizza.desc,
      img: pizza.img,
    };

    if (findPizzaIndex >= 0) {
      cart[findPizzaIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, producto]);
    }
  };

  //incrementar pizza
  const incrementar = (index) => {
    cart[index].count++;
    setCart([...cart]);
  };

  //decrementar pizza
  const decrementar = (index) => {
    if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  };

  //total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  // coleccion de valores del contexto pizza
  const valoresContextoPizza = {
    pizzas,
    error,
    loading,
    cart,
    setCart,
    addPizzaCarrito,
    incrementar,
    decrementar,
    total,
  };

  return (
    <PizzasContext.Provider value={{ valoresContextoPizza }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasContext;
