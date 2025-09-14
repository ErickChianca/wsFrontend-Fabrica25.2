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

type PokemonsListProps = Props & {
  visibility: boolean
}

export function PokemonsList({ pokemons , visibility}: PokemonsListProps, ) {
  return (
    <section id={visibility ? 'pokemonsGrid' : 'pokemonsList'}>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className='pokemonsCard'>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokemonImage" alt={pokemon.name} loading='lazy'/>
          <div className='pokemonsCardContent'>
            <div className='pokemonTopCardDiv'>
              <h2 className='pokemonName'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <div className='pokemonIdDiv'>
                <Image src={Pokeball} alt="Pokebola" width={20} className='pokeballIcon'/> {pokemon.id}
              </div>
            </div>
            <a href={`/details/${pokemon.id}`} className='seePokemonDetailsAnchor'>
              <button className='seePokemonDetailsBtn'>Ver detalhes</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}