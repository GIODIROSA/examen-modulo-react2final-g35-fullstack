import { createContext, useEffect, useState } from "react";

import { useFetch } from "../hook/useFetch";


//crear el contexto
export const PizzasContext = createContext();

//Proveer el contexto
export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  //DATA de Api piza
  const { data, error, loading } = useFetch("/pizzas.json");
  //console.log("data=>", data);

  useEffect(() => {
    if (data) {
      setPizzas(data);
    }
  }, [data]);

 

  // coleccion de valores del contexto pizza
  const valoresContextoPizza = {
    pizzas,
    error,
    loading,
  };

  return (
    <PizzasContext.Provider value={{ valoresContextoPizza }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasContext;
