import "./formCodigo.css";
import { useState } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlechaRoja from "../../../img/flecha-roja.jpg";
import Modal from "react-modal";
import Loader from "../../../img/spiner.gif";
import { motion } from "framer-motion";

const FormCodigo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const buttonPress = (values) => {
    if (values.codigo) {
      setIsloading(true);
      //consulta
      let datos = JSON.stringify(values, null, 2);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = datos;

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://amstel-backend-production.up.railway.app/api",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.codigo === 200 || data.codigo === 400) {
            setIsloading(false);
            navigate("/yaestasparticipando", {
              state: {
                nombre: values.nombre,
                cedula: values.cedula,
                telefono: values.telefono,
                email: values.email,
                ciudad: values.ciudad,
              },
            });
          } else {
            setIsloading(false);
            openModal();
            setTexModal("Código inválido");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Formik
        initialValues={{
          iduser: Math.floor(Math.random() * 100),
          nombre: location.state.nombre,
          cedula: location.state.cedula,
          telefono: location.state.telefono,
          email: location.state.email,
          ciudad: location.state.ciudad,
          codigo: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.codigo) {
            errors.codigo = "Ingresa tu código";
          } else if (values.codigo.length !== 6) {
            errors.codigo = "Código debe tener 6 dígitos";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="contenedorFormularioCodigo" onSubmit={handleSubmit}>
            <motion.input
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
              type="text"
              name="codigo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.codigo}
              placeholder="código"
            />
            <p className="errormensaje">
              {errors.codigo && touched.codigo && errors.codigo}
            </p>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <h2 className="tituloModal">{textModal}</h2>
              <button className="botonModal" onClick={() => closeModal()}>
                Aceptar
              </button>
            </Modal>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3}}
              type="submit"
              className="botonEnviar"
              disabled={isSubmitting}
              onClick={() => buttonPress(values)}
            >
              {isLoading ? (
                <img src={Loader} className="loader" />
              ) : (
                <p>
                  Enviar
                  <img src={FlechaRoja} className="flechaRoja" />
                </p>
              )}
            </motion.button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "30px",
  },
};

export default FormCodigo;
