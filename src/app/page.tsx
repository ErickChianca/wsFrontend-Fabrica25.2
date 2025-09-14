"use client"

import { FooterMenu } from '@/components/FooterMenu'
import { HeaderBanner } from '@/components/HeaderBanner'
import { SearchBar } from '@/components/SearchBar'
import { PokemonsList } from '@/components/PokemonsList'
import { getPokemons } from '@/services/getAllPokemons'
import { useEffect, useState } from 'react'
import './globals.css'


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [layoutVisibility, setLayoutVisibility] = useState(false);

  useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);

  return (
    <>
      <HeaderBanner />
      <main>
        <SearchBar visibility={layoutVisibility} setVisibility={setLayoutVisibility} />
        <PokemonsList pokemons={pokemons} visibility={layoutVisibility}/>
      </main>
      <FooterMenu />
    </>
  )
}
