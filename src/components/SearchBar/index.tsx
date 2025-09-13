"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import SearchIcon from '../../assets/search-icon.svg'
import './styles.css'

export function SearchBar() {
  const [expanded, setExpanded] = useState(false)

  function toggleExpanded(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setExpanded((prev) => !prev)
  }

  return (
    <section id='searchPokemonsSection'>
      <h1 id='searchPokemonsTitle'>Pokémons</h1>
      <div className={`searchBar ${expanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="e.g. Charmander" className="searchInput"/>
        <a href="##" className="searchIcon" onClick={toggleExpanded}>
          <Image src={SearchIcon} alt="Botão de Pesquisa" className="icon"/>
        </a>
      </div>    
    </section>
  )
}