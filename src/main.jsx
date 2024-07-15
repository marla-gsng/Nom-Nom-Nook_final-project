import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./HomePage/Home.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
