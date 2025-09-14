"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import SearchIcon from '@/assets/search-icon.svg'
import GridIcon from '@/assets/grid-fill.svg' 
import ListIcon from '@/assets/list-task.svg'
import './styles.css'

type SearchBarProps = {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchBar( { visibility, setVisibility }: SearchBarProps ) {
  const [expanded, setExpanded] = useState(false)

  function toggleExpanded(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setExpanded((prev) => !prev)
  }

  function toggleToGrid(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setVisibility(true)
  }

  function toggleToList(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setVisibility(false)
  }

  return (
    <section id="searchPokemonsSection">
      <div className='titleAndLayoutBtnsDiv'>
        <h1 id='searchPokemonsTitle'>Pokémons</h1>  
        <a className='changeVisibilityBtn' onClick={toggleToGrid}><Image src={GridIcon} alt="Visão em grade" width={22} height={22}/></a>
        <a className='changeVisibilityBtn' onClick={toggleToList}><Image src={ListIcon} alt="Visão em lista" width={24} height={24}/></a>
      </div>
      <div className={`searchBar ${expanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="e.g. Charmander" className="searchInput"/>
        <a href="##" className="searchIcon" onClick={toggleExpanded}>
          <Image src={SearchIcon} alt="Botão de Pesquisa" className="icon"/>
        </a>
      </div>    
    </section>
  )
}