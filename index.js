const express = require("express");

const app = express();

app.get('/search', (req, res) =>{
    console.log(req.query)
    if(req.query.q == 'javascript boojs'){
        res.send("lista de libros de js")
    }else{
        res.send("pagina normal")
    }
})

app.listen(3000);
console.log(` Server on port ${3000}`);
