import React from "react";
import logoAmstel from "../../img/logo-amstel.png";
import "./yaestasParticipando.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const YaEstasParticipando = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="contenedor_yaestasParticipando">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="img-logo"
        src={logoAmstel}
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="titulo-yaestasparticipando"
      >
        ¡Ya estás
        <br />
        participando!
      </motion.h2>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="boton_subir_otro_codigo"
        onClick={() =>
          navigate("/IngresoCodigo", {
            state: {
              nombre: location.state.nombre,
              cedula: location.state.cedula,
              telefono: location.state.telefono,
              email: location.state.email,
              ciudad: location.state.ciudad,
            },
          })
        }
      >
        subir otro código
      </motion.button>
    </div>
  );
};

export default YaEstasParticipando;
