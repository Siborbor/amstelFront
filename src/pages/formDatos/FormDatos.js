import React, { useState } from 'react'
import FormUser from './components/FormUser'
import './formDatos.css'

const FormDatos = (props) => {
  return (
    <div className='contenedor_formUser'>
       <h2 className='titulo_formUser'>Ingresa tus datos</h2>
       <FormUser/>
    </div>
  )
}

export default FormDatos