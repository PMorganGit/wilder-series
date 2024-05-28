const express = require("express");

const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Route de bienvenue
app.get("/", (req, res) => {
  res.send("Welcome to Wild Series !");
});

// Importer le routeur API des programmes
const programsRouter = require("./routers/api/router");

app.use("/api", programsRouter);

module.exports = app;
