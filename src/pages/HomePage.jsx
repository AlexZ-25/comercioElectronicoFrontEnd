import React from 'react'
import Contacto from '../components/Contacto'
import Episodios from '../components/Episodios'
import Jumbotron from '../components/Jumbotron'
import QuienesSomos from '../components/QuienesSomos'
import Servicios from '../components/Servicios'

const HomePage = () => {
  return (
    <>
    <Jumbotron />
    <QuienesSomos />
    <Episodios />
    <Servicios />
    <Contacto />
    </>
  )
}

export default HomePage