import Popular from "../components/Popular";
import Ensaladas from "../components/Ensaladas";
import Pollos from "../components/Pollos";
import Postres from "../components/Postres";
import Carnes from "../components/Carnes";
import Vegetariano from "../components/Vegetariano";
import Mariscos from "../components/Mariscos";
import Bebidas from "../components/Bebidas";
import App from "../App.css";

import React from 'react';

function Home() {
  return (
    <div className="menu-container">
      <div className="menu-item"><Ensaladas></Ensaladas></div>
      <div className="menu-item"><Postres></Postres></div>
      <div className="menu-item"><Popular></Popular></div>
      <div className="menu-item"><Pollos></Pollos></div>
      <div className="menu-item"><Carnes></Carnes></div>
      <div className="menu-item"><Vegetariano></Vegetariano></div>
      <div className="menu-item"><Mariscos></Mariscos></div>
      <div className="menu-item"><Bebidas></Bebidas></div>
    </div>
  );
}

export default Home;
