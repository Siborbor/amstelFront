import "./formUser.css";
import { useState } from "react";
import { Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import FlechaRoja from "../../../img/flecha-roja.jpg";
import Modal from "react-modal";
import { motion } from "framer-motion";

const FormUser = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalErrorIsOpen, setErrorIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [textErrorModal, setTextErrorModal] = useState("")
  const location = useLocation();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openErrorModal() {
    setErrorIsOpen(true);
  }

  function closeErrorModal() {
    setErrorIsOpen(false);
  }

  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          apellido:"",
          cedula: "",
          telefono: "",
          email: "",
          ciudad: "",
          checkbox: "",
          fecha_nacimiento: location.state.fecha_nacimiento
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Ingresa tu email*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido*";
          }
          if (!values.nombre) {
            errors.nombre = "Ingresa tu nombre*";
          } //control tipo de datos
          if (!values.apellido) {
            errors.apellido = "Ingresa tu apellido*";
          } //control tipo de datos
          if (!values.cedula) {
            errors.cedula = "Ingresa tu cédula*";
          } else if (
            (values.cedula.length > 10) ^
            (values.cedula.length < 10)
          ) {
            errors.cedula = "Tu número de cédula debe contener 10 dígitos*";
          } //control tipo de datos
          if (!values.telefono) {
            errors.telefono = "Ingresa tu teléfono*";
          } else if (values.telefono.length > 10) {
            errors.telefono =
              "Tu número de teléfono debe contener menos de 10 dígitos*";
          } //control tipo de datos
          if (!values.ciudad) {
            errors.ciudad = "Ingresa tu ciudad*";
          }
          if (!values.checkbox) {
            errors.checkbox = "Debes aceptar los Términos y condiciones*";
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
          <form className="contenedorFormulario" onSubmit={handleSubmit}>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              type="text"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="NOMBRES"
            />
            <p className="errormensaje">
              {errors.nombre && touched.nombre && errors.nombre}
            </p>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              type="text"
              name="apellido"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="APELLIDOS"
            />
            <p className="errormensaje">
              {errors.apellido && touched.apellido && errors.apellido}
            </p>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              type="text"
              name="cedula"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cedula}
              placeholder="NÚMERO DE CÉDULA"
            />
            <p className="errormensaje">
              {errors.cedula && touched.cedula && errors.cedula}
            </p>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
              type="telefono"
              name="telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.telefono}
              placeholder="TELÉFONO"
            />
            <p className="errormensaje">
              {errors.telefono && touched.telefono && errors.telefono}
            </p>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="EMAIL"
            />
            <p className="errormensaje">
              {errors.email && touched.email && errors.email}
            </p>
            <motion.input
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              type="ciudad"
              name="ciudad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ciudad}
              placeholder="CIUDAD"
            />
            <p className="errormensaje">
              {errors.ciudad && touched.ciudad && errors.ciudad}
            </p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7 }}
              className="contenedorTerminos"
            >
              <div className="contenedorTerminosycondiciones">
                <label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={handleChange}
                    id="checkbox"
                    value="acepto"
                    onClick={() => setCheck(!check)}
                  ></input>
                </label>
                <div className="contenedorTextTerminos">
                  <p className="acepto">Acepto</p>
                  <a
                    className="linkterminos"
                    onClick={() => openModal()}
                    href="#"
                  >
                    Términos y Condiciones
                  </a>
                </div>
              </div>
              <p className="camposrequeridos">
                *Todos los campos son obligatorios
              </p>
            </motion.div>
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7 }}
              className="botonSiguiente"
              disabled={isSubmitting}
              onClick={() =>
                [values.nombre !== "" &&
                values.apellido !== "" &&
                values.cedula !== "" &&
                values.cedula.length === 10 &&
                values.telefono !== "" &&
                values.telefono.length === 10 &&
                values.email !== "" &&
                values.ciudad !== "" &&
                check !== false
                  ? navigate(
                      "/IngresoCodigo",
                      {
                        state: {
                          nombre: values.nombre + " " +values.apellido ,
                          cedula: values.cedula,
                          telefono: values.telefono,
                          email: values.email,
                          ciudad: values.ciudad,
                          fecha_nacimiento: values.fecha_nacimiento,
                        },
                      },
                    )
                  : console.log("no se envio datos"), check == false ? (openErrorModal(),setTextErrorModal("Para continuar, acepta los términos y condiciones")) : console.log("términos y condiciones aceptado") ]
              }
            >
              SIGUIENTE <img src={FlechaRoja} className="flechaRoja" />
            </motion.button>
          </form>
        )}
      </Formik>
      <Modal isOpen={modalIsOpen} style={customStyles}  className="modalTerminos">
        <div className="contenedorContenidoModal relative m-h-[1000px] h-full w-full overflow-y-scroll">
          <h2 className="tituloModal">
            Términos y Condiciones
            <br />
            <br />
            “EL ESPÍRITU DE ÁMSTERDAM”
          </h2>
          <p className="textModal">
            El presente documento, establece los Términos y Condiciones
            generales para la campaña y promoción de la marca Amstel® denominada
            “El Espíritu de Ámsterdam”, de observancia obligatoria por parte de
            cada uno de los participantes, y es un documento vinculante entre
            HEINEKEN ECUADOR S.A. (empresa responsable de la campaña y
            promoción) y cada uno de los concursantes y eventuales ganadores de
            la promoción.<br/><br/> La participación de parte del concursante implica el
            reconocimiento de haber leído, entendido y por lo tanto aceptación
            expresa y total de los presentes Términos y Condiciones.<br/><br/> (I) Premio<br/>
            1 (un) viaje a la ciudad de Ámsterdam, Holanda (Países Bajos); para
            vivir una experiencia de marca Amstel®; serán en total 4 (cuatro)
            viajes.<br/> El premio incluye:<br/> - Boleto aéreo en viaje redondo (ida y
            vuelta), en clase turista (económica) <br/>- Paquete de 4 días y 3 Noches
            <br/>- Hospedaje en habitación sencilla <br/>- Traslados
            -hotel-aeropuerto-hotel <br/>- Desayunos incluido <br/>- City Tour + Paseo en
            Río Ámsterdam (incluido almuerzo) <br/>- Tour al Casco Antiguo en
            Ámsterdam (incluida cena) <br/>- Seguro de Gastos Médicos<br/><br/> (ii) Mecánica
            Promocional<br/>Tus Amstel te llevan a vivir el Espíritu de Ámsterdam. <br/>•
            Compra tus Amstel, localiza el código que se encuentra en la parte
            inferior de tu cerveza. o Sólo participa la presentación Lata de
            355ml <br/>• Ingresa al sitio www.viajaconamstel.com y registra tus
            códigos <br/>• Síguenos en nuestras redes sociales oficiales como
            @AMSTELECUADOR <br/>• El sorteo se realizará el 1 de mayo del 2023. Los
            ganadores se anunciarán en nuestras redes sociales oficiales<br/><br/>(iii)
            Vigencia<br/> Promoción: del 1 de Marzo al 30 de Abril del 2023<br/> Cualquier
            registro de códigos posterior al 30 de Abril del 2023, no serán
            considerados como registros participantes para el sorteo.<br/><br/> (iv)
            Restricciones Generales<br/> ▪ Sólo podrán participar personas mayores de
            edad, es decir, igual o mayor a 18 (dieciocho) años cumplidos.<br/> ▪
            Participan usuario de todas las ciudades de Ecuador.<br/> ▪ El premio es
            intransferible e intercambiable.<br/>▪ Ninguno de los concursantes
            ganadores, podrán haber sido ganadores de cualquier promoción,
            concurso o sorteo, de la marca patrocinadora en los últimos 6 meses.
            <br/>▪ El concursante ganador deberá ser seguidor activo de las redes
            sociales oficiales de la marca patrocinadora. <br/>▪ Se prohíbe la
            participación de empleados de HEINEKEN ECUADOR S.A., así como de
            proveedores o prestadores de servicio de la empresa referida
            anteriormente. <br/>▪ Los presentes Términos y Condiciones podrán ser
            modificados en cualquier momento por parte de HEINEKEN ECUADOR S.A.;
            el concursante queda sujeto y acepta expresamente cualquier cambio
            realizado por la empresa, y bajo su responsabilidad deberá consultar
            periódicamente este documento para conocer cualquier actualización a
            los mismos. <br/><br/>(v) Consideraciones Especiales del Premio <br/>- Fecha del
            viaje: del 28 al 31 de Agosto del 2023 (sujeto a cambio).<br/> - HEINEKEN
            ECUADOR S.A. definirá unilateralmente la aerolínea y ruta para el
            pasaje aéreo. <br/>- Se incluirá equipaje de carga (documentado) hasta
            por 23 kg, así como equipaje de mano hasta por 10kg. <br/> <dd>Los límites,
            medidas y restricciones del equipaje, serán los determinados por la
            aerolínea.</dd>- Ciudad de Salida: Guayaquil <dd> En caso de que el ganador
            radique en algún lugar distinto, será bajo su propia responsabilidad
            el traslado a la ciudad de salida.</dd>- El premio no incluye: <dd>
            Almuerzos y Cenas<br/>  Traslados, salvo los específicamente descritos
            como parte del premio <br/> Viáticos para gastos generales <br/> Costo por
            cualquier atracción turística, salvo lo específicamente descrito
            como parte del premio <br/> Bebidas alcohólicas</dd>Cualquier gasto por los
            conceptos descritos anteriormente, así como cualquier otro concepto
            no señalado expresamente como parte del premio, será por cuenta y a
            cargo exclusivamente del concursante ganador. <br/>- El lugar de
            hospedaje será a elección de HEINEKEN ECUADOR S.A., en hotel de 4
            estrellas, en habitación sencilla, incluido el desayuno. No incluye,
            de forma enunciativa mas no limitativamente: servicio a la
            habitación (room service), bebidas alcohólicas, servicio de spa,
            servicio de lavandería y en general no incluye ningún cargo extra no
            contemplado en el costo de hospedaje y desayuno. <br/>- El ganador deberá
            contar con los documentos migratorios necesarios para un viaje
            internacional de acuerdo con las políticas y lineamientos tanto de
            la aerolínea como del país destino; siendo el ganador es el único
            responsable de cualquier trámite migratorio necesario para el
            ingreso al país destino; el cual debe ser realizado de forma previa
            y oportunidad por el ganador; asumiendo cualquier costo inherente al
            trámite correspondiente. <br/><dd> Si por temas migratorios el ganador no
            puede realizar el viaje a la ciudad destino como parte del premio
            ofertado, HEINEKEN ECUADOR S.A. compensará al concursante ganador
            con un viaje alternativo y de experiencia de la marca Amstel®; el
            lugar destino, fechas e itinerario, así como la experiencia de la
            marca patrocinadora será determinado de forma unilateral por parte
            de HEINEKEN ECUADOR S.A.</dd><br/><br/>(vi) Uso de Imagen <br/>Cada uno de los
            participantes por medio de la aceptación de los presentes Términos y
            Condiciones, expresamente aceptan y otorgan a favor de HEINEKEN
            ECUDOR S.A. el uso de su imagen personal, así como a la toma de
            fotografía y video durante el viaje premio, para fines promocionales
            y publicitarios de la marca patrocinadora. <br/><br/>(vii) Obligaciones del
            Concursante Ganador<br/> El concursante ganador quedará obligado
            expresamente a: <br/>• Respetar el horario y agenda establecida durante
            el viaje por HEINEKEN ECUADOR S.A. <br/>• Conocer, respetar y cumplir el
            Código de Conducta que informe HEINEKEN ECUADOR S.A. <br/>• Respetar
            durante el viaje premio la Política de Consumo Responsable, cuyo
            límite es de 2 cervezas por día. <br/>• No publicitar cualquier relación
            directa o indirecta del viaje premio con alguna marca distinta a la
            patrocinadora. <br/>• No realizar ninguna manifestación de carácter
            negativo que pueda afectar la reputación empresarial de HEINEKEN
            ECUADOR S.A. y/o el valor de la marca patrocinadora; en cualquier
            medio de comunicación, respecto a la promoción, su mecánica,
            restricciones y en general, cualquier asunto relacionado al viaje
            premio. <br/><br/>(viii) Incumplimiento de Términos y Condiciones <br/>En caso de
            incumplimiento por parte del participante de todo o parte de los
            presentes Términos y Condiciones, se observarán las siguientes
            reglas: <br/>a) Si el incumplimiento se da durante la vigencia de la
            promoción (y antes de la fecha del viaje premio) <br/>Como consecuencia
            principal de cualquier incumplimiento parcial o total de cualquier
            punto de los términos y condiciones previamente aceptados y conocido
            por el concursante, será la directa descalificación y por ende la
            pérdida del derecho a participar en el concurso y/ o a reclamar el
            premio ofertado sin responsabilidad alguna para la empresa HEINEKEN
            ECUADOR S.A. de entregar cualquier compensación económica (en dinero
            o en especie).<br/> b) Si el incumplimiento se da durante el viaje premio<br/>
            Si por alguna razón se incumplen los términos y condiciones del
            concurso, en el momento en que la empresa HEINEKEN ECUADOR S.A.
            tenga conocimiento de este incumplimiento, se dará por concluida su
            responsabilidad en relación con el premio, y cualquier parte del
            premio pendiente de devengar, ya sea: pasajes, hospedajes,
            traslados, alimentación, quedarán exclusivamente a cuenta de parte
            del ganador; liberando totalmente de cualquier tipo de
            responsabilidad a HEINEKEN ECUADOR S.A.<br/><br/><br/> “Venta prohibida a menores
            de 18 años”; “El consumo excesivo de alcohol puede perjudicar su
            salud. Ministerio de Salud Pública del Ecuador”.
          </p>
          <button className="botonModal" onClick={() => closeModal()}>
            Aceptar
          </button>
        </div>
      </Modal>
      <Modal
        className="modalError"
        isOpen={modalErrorIsOpen}
        style={modalErrorStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="contenedormodalerror">
          <h2 className="tituloModal">{textErrorModal}</h2>
          <button className="botonModal" onClick={() => closeErrorModal()}>
            Aceptar
          </button>
        </div>
      </Modal>
    </div>
  );
};

const customStyles = {
  content: {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    zIndex: "1000",
    width: "90%",
    borderRadius: ".5em",
  },
  overlay: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: "1000",
    overflowY: "auto",
  },
};

const modalErrorStyles = {
  content: {
    position: "absolute",
    backgroundColor: "#FFF",
    top: "40%",
    padding: "15px",
    zIndex: "1000",
    width: "30%",
    borderRadius: ".5em",
  },
  overlay: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: "1000",
    overflowY: "auto",
  },
};

export default FormUser;
