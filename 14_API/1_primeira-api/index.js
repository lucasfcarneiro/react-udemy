const express = require('express')
const app = express()

app.use(express.json())

//rotas - endpoints
app.get('/', (req, res) => {
    res.json({ message: 'primeira rota criada sucesso!' })
})

app.listen(3000)