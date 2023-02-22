import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/bebas-neue/BebasNeueBold.ttf';
import './fonts/bebas-neue/BebasNeueRegular.ttf';
import Logo18 from "./img/icono-18y.png"
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <div className='contenedor18years'>
    <img className='contenedor18years_img'src={Logo18}/>
    <p className='contenedor18years_text'>ADVERTENCIA: EL CONSUMO DE ALCOHOL PUEDE PERJUDICAR SU SALUD, MINISTERIO DE SALUD PÚBLICA DEL ECUADOR, *APLICAN TÉRMINOS Y CONDICIONES.</p>
    </div>
  </React.StrictMode>
);

