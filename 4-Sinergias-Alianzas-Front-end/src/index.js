// Dependencias
import React from "react";
import ReactDOM from "react-dom/client";

// Componentes
import App from "./App";

// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
