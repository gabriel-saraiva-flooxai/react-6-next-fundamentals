import Link from 'next/link'

export default function Inicio() {
  
  return (
    <div>
      <Link href="/drip">
        Link pro Drip
      </Link>
      <h1>Primeiro componente</h1>
        <p> Pra criar um componente com REACT basta criar um arquivo dentro de .Pages e correr pro abraço </p>
        <p> não esquecer de: criar uma função exportando como default e retornando o conteúdo </p>
    </div>
  )
}