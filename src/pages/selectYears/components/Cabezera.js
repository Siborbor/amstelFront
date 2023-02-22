import React from 'react'
import logoAmstel from '../../../img/logo-amstel.png'
import tituloAmstel from '../../../img/titulo-amstel.png'
import "./cabezera.css"

const Cabezera = () => {
  return (
    <div className='contenedorCabezera'>
        <img className='img-logo' src={logoAmstel}/>
        <img className='img-text-logo' src={tituloAmstel}/>
        <h3 className='subtitulo'> para continuar con la experiencia <br/>debes confirmar tu mayoría de edad </h3>
    </div>
  )
}

export default Cabezera