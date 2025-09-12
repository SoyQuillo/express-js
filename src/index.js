const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//settings
app.set("appName", "Express Course");
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

app.get("/note.txt", (req, res) => {
  res.send("Este no es un archivo");
});

app.use((req, res, next) => {
  console.log(`Ruta: ${req.url} metodo: ${req.method} `);
  next();
});

app.post("/profile", (req, res) => {
  console(req.body);
  res.send("profile page");
});

app.get("/UserName", (req, res) => {
  res.send("username route");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.get("/dashboard", (req, res) => {
  res.sendFile("dashboard page");
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(` Server ${app.get("appName")} on port ${app.get("port")}`);
