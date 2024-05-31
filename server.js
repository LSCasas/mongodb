// Definir nuestro servidor
const express = require('express');
const mongoose = require('mongoose');
const kodersRouter = require('./koders.router');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

// Crear una instancia de la aplicación Express
const server = express();

// Conectar a la base de datos MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log(''))
    .catch((error) => console.error('Error al conectar con la base de datos', error));

// Usar middleware para parsear JSON
server.use(express.json());

// Middleware de aplicación para autorización
server.use((req, res, next) => {
    console.log("middleware de aplicacion");
    const authorization = req.headers.authorization;
    
    if (authorization === 'alohomora') {
        req.isAWizard = true;
        next();
    } else {
        res.status(403).json({
            message: 'No tienes acceso'
        });
    }
});

// Montar los routers en el servidor
server.use("/koders", kodersRouter);

// Ruta principal del servidor
server.get('/', (req, res) => {
    res.json({
        message: "kodemia APIv1"
    });
});

// Exportar el servidor para usarlo en otros archivos
module.exports = server;

