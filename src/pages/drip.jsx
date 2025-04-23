import styles from '../styles/Drip.module.css'
import Layout from '../components/Layout'

export default function Drip() {

    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>

    )

}
