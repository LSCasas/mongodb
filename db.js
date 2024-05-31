const mongoose = require('mongoose');

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

async function init() {
    try {
        // Aquí deberías inicializar la conexión a la base de datos
        await mongoose.connect(MONGO_URI);
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        // Aquí podrías manejar el error de conexión a la base de datos de alguna manera
    }
}

module.exports = {
    init,
};

