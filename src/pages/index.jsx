import Navegador from '../components/Navegador'

export default function Inicio() {
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="JSX" desatino="/jsx" cor="crimson"/>
      <Navegador texto="Exemplo" desatino="/exemplo"/>
      <Navegador texto="Drip" desatino="/drip" cor="#670bbd"/>
      <Navegador texto="Navegação" desatino="/navegacao/" cor="#c50f70"/>
    </div>
  )
}