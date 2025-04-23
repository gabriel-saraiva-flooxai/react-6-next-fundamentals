export default function Cabecalho(props) {
    console.log(props);
    // PROPS SOMENTE LEITURA
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}