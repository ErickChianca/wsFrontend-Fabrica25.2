import Image from 'next/image'
import React from 'react'
import BookmarkIcon from '../../assets/bookmark-regular-full.svg'
import BookmarkFullIcon from '../../assets/bookmark-solid-full.svg'
import './styles.css'

export function HeaderBanner() {
  return (
    <header>
      <h1 id='logo'>WIKIMON</h1>
      <Image src={BookmarkIcon} alt="Favoritos" className='bookmark'/>
    </header>
  )
}
