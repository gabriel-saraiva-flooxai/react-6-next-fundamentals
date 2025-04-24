import Layout from "../components/Layout";

export default function Jsx() {

    const a = 7;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = []; 

    numbers.forEach((num) => {
        results.push(num * a);
    });

    return (
        <Layout titulo="Entendendo JSX">
            <div>
                <h1>JSX é um conceito Central</h1>
                <h2>Multiplicando por 7:</h2>
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            {numbers[index]} x 7 = {result}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}