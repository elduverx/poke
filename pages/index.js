import Link from "next/link";


const Pokemon = ({pokemon})=>{
const id = pokemon.url.split('/').filter(x=>x).pop();
  return(
    <li>
      <Link href={`/pokemones/${id}`}>
      {pokemon.name}
      </Link>
      </li>
  )
}
export default function Pokemones({pokemones}) {
 
  return (
    <div>
      <p>Mi App de Pokemones by Duverx</p>
      <ul>
      {pokemones.map(pokemon=> <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
    )
}
//get static props nos sirve mucho porque potencia next al siguiente level :v 
//realmente nos indica que la pagina se va a generar de manera estatica por consiguiente genera una pagina de html, 
//este archivo es el que le servira al usuario.

export const getStaticProps = async ()=>{
 const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
 const data = await response.json()

return{
  props:{pokemones: data.results}
}

}