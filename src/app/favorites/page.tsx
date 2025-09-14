"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { HeaderBanner } from "@/components/HeaderBanner"
import { FooterMenu } from "@/components/FooterMenu"
import '../globals.css'
import './styles.css'
import Masterball from "@/assets/masterball.png"
import GridIcon from "@/assets/grid-fill.svg"
import ListIcon from "@/assets/list-task.svg"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([])
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (stored) setFavorites(JSON.parse(stored))
  }, [])

  if (favorites.length === 0) {
    return <h1>Você ainda não capturou nenhum Pokémon</h1>
  }

  function releasePokemon(id: number) {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }

  function toggleToGrid(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setVisibility(false)
  }

  function toggleToList(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setVisibility(true)
  }

  return (
    <>
      <HeaderBanner />
      <main>
        <div className='titleAndLayoutBtnsDiv'>
          <h1 id='favoritesTitle'>Pokémons Capturados</h1>  
          <div className="changeVisibilityDiv">
            <a className='changeVisibilityBtn' onClick={toggleToGrid}><Image src={GridIcon} alt="Visão em grade" width={22} height={22}/></a>
            <a className='changeVisibilityBtn' onClick={toggleToList}><Image src={ListIcon} alt="Visão em lista" width={24} height={24}/></a>
          </div>
        </div>
        <section id={visibility ? 'pokemonsList' : 'pokemonsGrid'}>
          {favorites.map((pokemon) => (
            <div key={pokemon.id} className='pokemonsCard'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokemonImage" alt={pokemon.name} loading='lazy'/>
              <div className='pokemonsCardContent'>
                <div className='pokemonTopCardDiv'>
                  <h2 className='pokemonName'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                  <div className='pokemonIdDiv'>
                    <Image src={Masterball} alt="Pokebola" width={20} className="pokeballIcon" /> {pokemon.id}
                  </div>
                </div>
                
                <div className="pokemonsButtonsDiv">
                  <a href={`/details/${pokemon.id}`} className='seePokemonDetailsAnchor'>
                    <button className='seePokemonDetailsBtn'>Ver detalhes</button>
                  </a>
                  <button className='releasePokemonBtn' onClick={() => releasePokemon(pokemon.id)}>Soltar</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <FooterMenu/>
    </>
  )
}