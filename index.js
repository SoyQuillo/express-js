const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "santiago",
    lastname: "quintero",
    edad: "40",
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "some steet 123",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000);
console.log(` Server on port ${3000}`);
