import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";

//router
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";

//contexto
import { PizzasProvider } from "./context/PizzasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzasProvider>
      <RouterProvider router={router} />
    </PizzasProvider>
  </React.StrictMode>
);
