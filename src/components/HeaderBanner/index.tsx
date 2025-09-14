import Image from 'next/image'
import React from 'react'
import BookmarkIcon from '@/assets/bookmark-regular-full.svg'
import Pokeball from '@/assets/Poké_Ball_icon.svg.png'

export function HeaderBanner() {
  return (
    <header>
      <div id='headerLogoDiv'>
        <Image src={Pokeball} alt='Pokebola Icone' width={50} height={50}/> 
        <a href="../"><h1 id='logo'>WIKIMON</h1></a>
      </div>
      <a href="/favorites">
        <Image src={BookmarkIcon} alt="Favoritos" className='bookmark'/>
      </a>
    </header>
  )
}