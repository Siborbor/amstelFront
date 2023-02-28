import React from "react";
import logoAmstel from "../../../img/logo-amstel.png";
import tituloAmstel from "../../../img/titulo-amstel.png";
import "./cabezera.css";
import { motion} from "framer-motion";

const Cabezera = () => {
  return (
      <motion.div
      initial={{y:30, opacity:0 }}
      animate={{ y: 0, opacity:1}}
        transition={{ duration: 0.3}}
        className="contenedorCabezera"
      >
        <img className="img-logo" src={logoAmstel} />
        <img className="img-text-logo" src={tituloAmstel} />
        <h3 className="subtitulo">
          {" "}
          para continuar con la experiencia <br />
          debes confirmar tu mayoría de edad{" "}
        </h3>
      </motion.div>
  );
};

export default Cabezera;
