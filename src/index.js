const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const HomeRoutes = require('./routes/home');
const UserRoutes = require('./routes/users')

//settings
app.set("appName", "Express Course");
app.set("port", 3000);

//middlewares 
app.use(morgan("dev"));
app.use(express.json());

app.use(HomeRoutes);
app.use(UserRoutes);


app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(` Server ${app.get("appName")} on port ${app.get("port")}`);
