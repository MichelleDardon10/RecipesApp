import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Components para establecer paths para links
import Ensaladas from './components/Ensaladas';
import Postres from './components/Postres';
import Popular from './components/Popular';
import Pollos from './components/Pollos';
import Carnes from './components/Carnes';
import Vegetariano from './components/Vegetariano';
import Mariscos from './components/Mariscos';
import Bebidas from './components/Bebidas';

//import Pages
import Agregar from './pages/Agregar';
import Sesion from './pages/Sesion';
import Calendar from './pages/Calendar';


//import libreria Router para uso de pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ensaladas",
    element: <Ensaladas />,
  },
  {
    path: "/postres",
    element: <Postres/>,
  },
  {
    path: "/popular",
    element: <Popular/>,
  },
  {
    path: "/pollos",
    element: <Pollos/>,
  },
  {
    path: "/carnes",
    element: <Carnes/>,
  },
  {
    path: "/vegetariano",
    element: <Vegetariano/>,
  },
  {
    path: "/mariscos",
    element: <Mariscos/>,
  },
  {
    path: "/bebidas",
    element: <Bebidas/>,
  },
  {
    path: "/sesion",
    element: <Sesion/>,
  },
  {
    path: "/calendar",
    element: <Calendar/>,
  },
  {
    path: "/agregar",
    element: <Agregar/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
