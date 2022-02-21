import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Pokemon = ({data})=>{
    const router = useRouter()

    console.log(router);
    if(router.isFallback){
        return <p>Loaging...</p>
    }
    return(
        <div>
            <h1>{data.name} number #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400}/>
            <Link href='/'>Volver al inicio</Link>
        </div>
        )
}

export default Pokemon;


//cada vez que se haga una peticion a lapagina va a gatillar esta funcion
//para transformar una pagina a ssr debemosexportar getServerSideProps. solamente se renderiza si llegamos a una pagina hecha.
/* export const getServerSideProps = async ({params})=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return {props:{data}}
} */


export const getStaticProps = async ({params})=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return {props:{data}}
}

export const getStaticPaths = async ()=>{
    const paths = [ 
        {params: {id: '1'}},
        {params: {id: '2'}},
    ]
    return{
        paths,
        fallback: true,
    }
}