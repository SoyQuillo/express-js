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


app.use((req, res, next) =>{
     if(req.query.login === 'sjquinteros@ufpso.edu.co' ){
        next()
     }else{
        res.send("no autorizado")
     }
})

app.get('/dashboard', (req, res) => {

    res.send('dashboard page')

})

app.listen(3000);
console.log(` Server on port ${3000}`);
