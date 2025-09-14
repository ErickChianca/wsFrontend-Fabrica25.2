export async function getPokemon(id: number) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if (!response.ok) throw new Error("Nenhum pokemon encontrado.");

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}