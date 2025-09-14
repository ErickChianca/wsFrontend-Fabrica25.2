export async function searchPokemon(name: string) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

      if (!response.ok) throw new Error("Nenhum pokemon encontrado.");
      
      const data = await response.json()

      return [data]
    } catch (error) {
      console.log(error)
      return []
    }
}