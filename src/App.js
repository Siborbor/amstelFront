import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectYears from "./pages/selectYears/SelectYears";
import FormDatos from "./pages/formDatos/FormDatos";
import IngresaCodigo from "./pages/ingresaCodigo/IngresaCodigo"
import YaEstasParticipando from "./pages/yaEstasParticipando/YaEstasParticipando";
import "../src/pages/responsive.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectYears />,
  },
  {
    path:"/IngresoDatos",
    element:<FormDatos/>,
  },
  {
    path:"/IngresoCodigo",
    element:<IngresaCodigo/>,
  },
  {
    path:"/yaestasparticipando",
    element:<YaEstasParticipando/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
