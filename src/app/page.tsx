"use client"

import { FooterMenu } from '@/components/FooterMenu'
import { HeaderBanner } from '@/components/HeaderBanner'
import { SearchBar } from '@/components/SearchBar'
import { PokemonsList } from '@/components/PokemonsList'
import { getPokemons } from '@/services/getAllPokemons'
import { searchPokemon } from '@/services/searchPokemon'
import { useEffect, useState } from 'react'
import './globals.css'

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [layoutVisibility, setLayoutVisibility] = useState(false);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  useEffect(() => {
    if (searchedPokemon.trim() === '') {
      getPokemons().then(setPokemons);
    } else {
      searchPokemon(searchedPokemon).then(setPokemons)
    }
  }, [searchedPokemon]);

  return (
    <>
      <HeaderBanner />
      <main>
        <SearchBar visibility={layoutVisibility} setVisibility={setLayoutVisibility} onSearchChange={setSearchedPokemon} />
        <PokemonsList pokemons={pokemons} visibility={layoutVisibility}/>
      </main>
      <FooterMenu />
    </>
  )
}