export async function getPokemons() {
  try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")

      if (!response.ok) throw new Error("Nenhum pokemon encontrado.");
      
      const data = await response.json()
      
      const pokemonsInformations = await Promise.all(
        data.results.map(async (p: {name: string; url: string}) => {
          const response = await fetch(p.url)
          return await response.json()
        })
      )

      return pokemonsInformations
    } catch (error) {
      console.log(error)
    }
}