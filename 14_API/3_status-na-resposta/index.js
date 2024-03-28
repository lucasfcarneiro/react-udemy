const express = require('express')
const app = express()

app.use(express.json())

//rotas - endpoints
app.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: `O campo nome é obrigatorio`})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({ message: `O produto: ${name} foi criado com sucesso` })
})

app.get('/', (req, res) => {
    res.status(200).json({ message: `primeira rota criada sucesso!` })
})

app.listen(3000)