export default function handler(req, res) {
    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Pica-Sônica ${codigo}`,
        idade: `2018-${codigo}`
    })
}