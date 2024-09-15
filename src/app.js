const express = require('express')

const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

app.get('/get', (req, res) => {
    res.send('Primer mensaje: Get bien gestionado!')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})