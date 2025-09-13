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

  useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);

  return (
    <>
      <HeaderBanner />
      <main>
        <SearchBar />
        <PokemonsList pokemons={pokemons} />
        <FooterMenu />
      </main>
    </>
  )
}
