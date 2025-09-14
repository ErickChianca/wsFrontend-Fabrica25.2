import { HeaderBanner } from '@/components/HeaderBanner'
import { FooterMenu } from '@/components/FooterMenu'
import Image from 'next/image'
import { getPokemon } from '@/services/getPokemon'
import Pokeball from '../../../assets/Poké_Ball_icon.svg.png'
import '../../globals.css'
import './styles.css'
import Masterball from '../../../assets/masterball.png'
import AddToFavoritesButton from '@/components/AddToFavoritesButton'

type DetailsPageProps = { 
  params: Promise<{ id: string }>
}

export default async function DetailsPage(props: { params: Promise<{ id: string }> }) { 
  const { id } = await props.params
  const pokemon = await getPokemon(Number(id))

  if(!pokemon) return <h1>Pokemon não encontrado</h1>

  return(
    <>
      <HeaderBanner/> 
      <main>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={300} height={300} alt={pokemon.name}/>
  
        <div className='pokemonNameAndIdDiv'>
          <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
          <Image src={Pokeball} alt="Pokebola" width={20} /> {pokemon.id}
        </div>

        <div className='pokemonAditionalInformations'>
          <h2>Informações adicionais</h2>

          <div className='infoCard'>
            <h3>Tipo(s)</h3>
            {pokemon.types.map((typeObject: {type: {name: string}}) => (
              <p key={typeObject.type.name}> 
                {typeObject.type.name.charAt(0).toUpperCase() + typeObject.type.name.slice(1)}
              </p>  
            ))}
          </div>

          <div className='infoCard'>
            <h3>Habilidades</h3>
            {pokemon.abilities.map((abilityObject: {ability: {name: string}}) => 
              <p key={abilityObject.ability.name}>
                {abilityObject.ability.name.charAt(0).toUpperCase() + abilityObject.ability.name.slice(1)}
              </p>
            )}
          </div>

          <div className='infoCard'>
            <h3>Experiencia Base</h3>
            <p> {pokemon.base_experience}</p>
          </div>

          <div className='infoCard'>
            <h3>Tamanho</h3>
            <p>Altura: {(pokemon.height / 10)}m</p>
            <p>Peso: {pokemon.weight}kg</p>
          </div>
        </div>
        
        <div className='addToFavoritesDiv'>
          <p id='addToFavoritesText'>Capture o pokémon para adicionar aos seus favoritos</p>
          <AddToFavoritesButton pokemon={{ id: pokemon.id, name: pokemon.name, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}} />
        </div>
      </main>
      <FooterMenu />
    </>
  )
}