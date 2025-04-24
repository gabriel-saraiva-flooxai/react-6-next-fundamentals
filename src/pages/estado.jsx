import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    // const state = useState(0)
    // let num = state[0]
    // let altNum = state[1]

    const [num, setNum] = useState(0)

    function inc() {
        setNum(num + 1)
    }

    return(
        <Layout titulo="Componente com estado">
            <div>{num}</div>
            <button onClick={inc}>Inc</button>
        </Layout>
    )
}