import { useState, useEffect } from "react";
import { DateSelect } from "react-ymd-date-select/dist/esm/presets/vanilla";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./formYear.css";
import FlechaRoja from "../../../img/flecha-roja.jpg";

const FormYear = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [edad, setEdad] = useState(null);
  const [check, setCheck] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");

  useEffect(() => {
    setEdad(calcularEdad(date));
  }, [date]);

  const handleChange = () => {
    setCheck(!check);
  };

  const calcularEdad = (date) => {
    var hoy = new Date();
    var cumpleanos = new Date(date);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const buttonPress = () => {
    if (date != null) {
      if (edad < 18) {
        setTexModal("No tienes la edad suficiente para ver este contenido");
        openModal();
      } else if (edad >= 18) {
        navigate("/IngresoDatos", { replace: true });
      }
    } else {
      setTexModal("Ingrese la Fecha de Su Nacimiento");
      openModal();
    }
  };

  return (
    <div>
      <div className="contenedorDateSelect">
        <DateSelect
          value={date}
          onChange={setDate}
          lastYear={1800}
          firstYear={2023}
          monthFormat="MMM"
          defaultYear="now"
          defaultMonth="now"
          defaultDay="now"
        />
      </div>
      <div className="contenedorCheckbox">
        <label>
          <input
            type="checkbox"
            checked={check}
            onChange={handleChange}
            className="checkbox"
          ></input>
          RECUÉRDAME
        </label>
      </div>
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
      <button className="botonSiguiente" onClick={buttonPress}>
        SIGUIENTE <img src={FlechaRoja} className="flechaRoja" />
      </button>
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

export default FormYear;
