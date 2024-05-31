const Koder = require('./cli'); // Asegúrate de que la ruta al archivo cli.js es correcta

async function add(newKoder) {
    // Validaciones del koder
    if (!newKoder.firstName) throw new Error("First name is required");
    if (!newKoder.email) throw new Error("Email is required");
    if (newKoder.generation <= 0) throw new Error("Generation must be greater than 0");

    // Logica para agregar un nuevo koder a la base de datos
    const koder = new Koder(newKoder);
    await koder.save();
    return koder;
}

module.exports = {
    add,
};
