import React from 'react'
import Screen from './Screen'
import Sensor from './Sensor'
import "../styles/PokedexBody.css"


const PokedexBody = () => {
  return (
    <section className='pokedex-body'>
        <Sensor/>
        <div className='pokedex-body__screen'>
          <Screen/>
        </div>
    </section>
  )
}

export default PokedexBody