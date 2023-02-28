import React from "react";
import FormCodigo from "./components/FormCodigo";
import "./ingresaCodigo.css";
import CodigoLata from "../../img/lata-amstel.png";
import { motion } from "framer-motion";

const IngresaCodigo = () => {
  return (
    <div className="contenedor_formCodigo">
      <motion.img
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="img_cabezera_formCodigo"
        src={CodigoLata}
      />
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="titulo_formCodigo"
      >
        Ingresa el código alfanumérico <br /> que viene debajo de tu lata de
        Amstel
      </motion.h2>
      <FormCodigo
      />
    </div>
  );
};

export default IngresaCodigo;
