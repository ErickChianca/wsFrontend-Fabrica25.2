import React from 'react'
import './styles.css'
import Image from 'next/image'
import Pokeball from '../../assets/Poké_Ball_icon.svg.png'

type Pokemon = {
  name: string,
  id: number,
  sprites: {  
    front_default: string
  },
}

type Props = {
  pokemons: Pokemon[]
}

export function PokemonsList({ pokemons }: Props) {
  return (
    <section id='pokemonsList'>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className='pokemonsCard'>
          <div className='pokemonTopCardDiv'>
            <h2 className='pokemonName'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <div className='pokemonIdDiv'>
              <Image src={Pokeball} alt="Pokebola" width={20} /> {pokemon.id}
            </div>
          </div>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokemonImage" alt={pokemon.name} loading='lazy'/>
          <a href="" className='seePokemonDetailsAnchor'>
            <button className='seePokemonDetailsBtn'>Ver detalhes</button>
          </a>
        </div>
      ))}
    </section>
  )
}