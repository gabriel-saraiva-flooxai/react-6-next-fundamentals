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
      <Navegador texto="Navegação #01" desatino="/navegacao/" cor="#c50f70"/>
      <Navegador texto="Navegação #02" desatino="/cliente/SP-Santos/123" cor="blue"/>
      <Navegador texto="Stateful component" desatino="/estado" cor="purple"/>
      <Navegador texto="Integração API #01" desatino="/integracao-1" cor="#ea284b"/>
    </div>
  )
}