const express = require('express')

const app = express()

app.get('/products', (req, res) =>{
    res.send('Lista de productos')
})
 
app.post('/products', (req, res) =>{
    res.send('Creando productos')
})

app.put('/products', (req, res) =>{
    res.send('Actualizando un producto')
})

app.delete('/products', (req, res) =>{
    res.send('Eliminando un producto')
})

app.patch('/products', (req, res) =>{
    res.send('Actualizando una parte del producto')
})

app.listen(3000)
console.log(` Server on port ${3000}`)