// Iniciar el servidor
const server = require("./server");
const db = require("./db");

const port = 8080;

db.init();
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


//inicializar la base de datos
//poner a escuchar el servidor