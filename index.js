const express = require("express");

const app = express();

app.use((req, res, next) =>{
    console.log(`Ruta: ${req.url} metodo: ${req.method} `)
    next()
})


app.get("/profile", (req, res) => {

    res.send('profile page')

});

app.all("/about", (req, res) => {

    res.send('about page')

});

app.listen(3000);
console.log(` Server on port ${3000}`);
