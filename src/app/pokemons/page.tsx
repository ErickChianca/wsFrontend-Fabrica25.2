"use client"

import React from 'react'
import {useState, useEffect } from 'react'
import { PokemonsList } from '@/components/PokemonsList'
import { getPokemons } from '@/services/getAllPokemons'
import './styles.css'
 
type Pokemon = {
  name: string,
  id: number
  sprites: {front_default: string}
}

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    getPokemons().then(setPokemons)
  }, []) 

  return (
    <section id='pokemonsList'>
      <PokemonsList pokemons={pokemons} />
    </section>
  )
}