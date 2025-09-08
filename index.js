const express = require("express");

const app = express();

app.get("/hello/:user", (req, res) => {
  console.log(typeof req.params.user);
  res.send(` Hola ${req.params.user}`);
});

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x)
    console.log(req.params.y)
    const result = parseInt(req.params.x) + parseInt(req.params.y);
    res.send(` Result: ${result}`)
})

app.get('/anadir/:a/:b', (req, res) =>{
    const { a, b } = req.params
    res.send(` Result: ${parseInt(a) + parseInt(b)}`)
})

app.get('/aladir/:a/:b', ({params: { a, b }}, res) =>{
    res.send(` Result: ${parseInt(a) + parseInt(b)}`)
})

app.get('/users/:username/photo', (req, res) => {
    
    if(req.params.username === "quillo"){
        res.sendFile('./javascript.png', {
            root: __dirname
        })
    }else{
        res.send('el usuario no tiene acceso');
    }

})


app.get('/nombre/:nombre/age/:age', (req, res)=> {
    console.log(req.params)
    res.send(` El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log(` Server on port ${3000}`);
