import React from 'react'
import FormCodigo from './components/FormCodigo'
import './ingresaCodigo.css'
import CodigoLata from '../../img/lata-amstel.png'
import {useLocation} from 'react-router-dom';

const IngresaCodigo = () => {
  const location = useLocation();
  return (
    <div className='contenedor_formCodigo'>
       <img className="img_cabezera_formCodigo" src={CodigoLata}/>
       <h2 className='titulo_formCodigo'>Ingresa el código alfanumérico <br/> que viene debajo de tu lata de Amstel</h2>
       <FormCodigo/>
    </div>
  )
}

export default IngresaCodigo