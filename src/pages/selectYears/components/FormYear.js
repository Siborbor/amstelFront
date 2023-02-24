import { useState, useEffect } from "react";
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
  const [year, setYear] = useState([]);
  const [diasSelect, setDiasSelect] = useState("");
  const [mesesSelect, setMesesSelect] = useState("");
  const [yearSelect, setYearSelect] = useState("");

  const dias = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    for (let i = 2023; i > 1800; i--) {
      setYear((preState) => [...preState, i]);
    }
  }, []);

  useEffect(() => {
    const dateSelect = yearSelect + "/" + mesesSelect + "/" + diasSelect;
    setDate(dateSelect);
    setEdad(calcularEdad(dateSelect));
  }, [diasSelect, mesesSelect, yearSelect]);

  const handleChange = () => {
    setCheck(!check);
  };

  const calcularEdad = (date) => {
    var hoy = new Date();
    console.log(hoy)
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
    console.log(date);
    if (date != null) {
      if (edad < 18) {
        setTexModal("No tienes la edad suficiente para ver este contenido");
        openModal();
      } else if (edad > 17) {
        navigate("/IngresoDatos", { replace: true });
      }
    } else {
      setTexModal("Ingrese la Fecha de Su Nacimiento");
      openModal();
    }
  };

  const handleChangeDias = (e) => {
    setDiasSelect(e.target.value);
  };
  const handleChangeMeses = (e) => {
    setMesesSelect(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYearSelect(e.target.value);
  };

  return (
    <div>
      <div className="contenedorDateSelect">
        <select onChange={handleChangeDias}>
          <option value="" disabled selected style={{color: "#fff9"}}>
            DD
          </option>
          {dias.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        <select onChange={handleChangeMeses}>
          <option value="" disabled selected style={{color: "#fff9"}}>
            MM
          </option>
          {meses.map((el, index) => (
            <option value={index + 1}>{el}</option>
          ))}
        </select>
        <select onChange={handleChangeYear}>
          <option value="" disabled selected style={{color: "#fff9"}}>
            AA
          </option>
          {year.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
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
