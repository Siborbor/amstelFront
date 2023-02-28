import React, { useState } from "react";
import FormUser from "./components/FormUser";
import "./formDatos.css";
import { motion } from "framer-motion";

const FormDatos = (props) => {
  return (
    <div className="contenedor_formUser">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="titulo_formUser"
      >
        Ingresa tus datos
      </motion.h2>
      <FormUser />
    </div>
  );
};

export default FormDatos;
