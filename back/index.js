// server.js
const express = require("express");
const connectDB = require("./config/db"); // Importe ta fonction de connexion

const app = express();

app.use(express.json());

// Lancer la connexion à la base de données
connectDB();

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});