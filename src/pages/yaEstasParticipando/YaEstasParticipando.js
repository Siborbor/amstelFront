import React from 'react'
import logoAmstel from '../../img/logo-amstel.png'
import "./yaestasParticipando.css"
import {useNavigate, useLocation} from 'react-router-dom';

const YaEstasParticipando = () => {
  const navigate= useNavigate();
  const location = useLocation();
  return (
    <div className='contenedor_yaestasParticipando'>
        <img className='img-logo' src={logoAmstel}/>
        <h2 className='titulo-yaestasparticipando'>¡Ya estás<br/>participando!</h2>
        <button className='boton_subir_otro_codigo' onClick={() => navigate('/IngresoCodigo', {state:{nombre: location.state.nombre,
                    cedula: location.state.cedula,
                    telefono: location.state.telefono,
                    email: location.state.email,
                    ciudad: location.state.ciudad}})}>
            subir otro código
        </button>
    </div>
  )
}

export default YaEstasParticipando