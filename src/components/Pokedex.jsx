import React from 'react'

import "../styles/Pokedex.css"
import PokedexBody from './PokedexBody'
import PokedexLid from './PokedexLid'


const Pokedex = () => {
  return (
    <div class="pokedex">
        {/*----- LID
          //----- SWITCH-ON SCREEN 
          //----- DETAILS SCREEN 
          //----- MENU SCREEN 
          //----- GAMES SCREEN 
          //----- SCANNER SCREEN 
            //----- SCREEN POKEDEX 
              //----- SEARCH NAV 
              //----- POKEMONS LIST 
              //----- BOTTOM NAV */}
      
      <PokedexLid/>
      <PokedexBody/>
    </div>
  )
}

export default Pokedex