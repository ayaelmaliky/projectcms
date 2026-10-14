// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connexion à MongoDB en local (utilise 127.0.0.1 pour éviter les erreurs de connexion)
    await mongoose.connect("mongodb://127.0.0.1:27017/school");
    console.log("MongoDB connecté avec succès !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit(1); // Arrête l'application en cas d'échec
  }
};

module.exports = connectDB;