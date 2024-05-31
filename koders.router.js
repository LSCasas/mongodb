const express = require("express");
const koderUseCase = require('./koders_usecase');

// Crear un router de Express
const router = express.Router();

// Middleware de nivel de router
router.use((req, res, next) => {
    next();
});

// POST /koders -> Endpoint para agregar un koder
router.post("/", async (req, res) => {
    try {
        const newKoder = req.body;
        const koder = await koderUseCase.add(newKoder);
        res.json({
            message: 'Koder added',
            data: { koder },
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message,
        });
    }
});

module.exports = router;
