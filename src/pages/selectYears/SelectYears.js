import React, { useState } from 'react'
import Cabezera from './components/Cabezera'
import FormYear from './components/FormYear'
import './selectYear.css'

const SelectYears = () => {
  return (
    <div className='contenedor'>
       <Cabezera/>
       <FormYear/>
    </div>
  )
}

export default SelectYears