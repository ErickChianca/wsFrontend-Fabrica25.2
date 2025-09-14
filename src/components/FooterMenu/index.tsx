import Pokeball from '@/assets/Poké_Ball_icon.svg.png'
import GitHub from '@/assets/github.svg'
import Image from 'next/image'

export function FooterMenu() {
  return (
    <footer>
      <div className='footerLogo'>
        <Image src={Pokeball} alt="Pokebola" width={40} height={40}/>
        <h1 className='footerLogoText'>WIKIMON</h1>
      </div>
      <nav className='footerNav'>
        <a href="/">Início</a>
        <a href="/favorites">Favoritos</a>
      </nav>
      <div className='media'>
        <a href="https://github.com/ErickChianca"><Image src={GitHub} alt="GitHub Icon" width={20} height={20} className='mediaIcon'/>GitHub</a>
      </div>
    </footer>
  )
}