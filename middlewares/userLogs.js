const fs = require("fs");
const path = require("path");

function logMiddleware (req, res, next) {
    fs.appendFileSync(path.resolve(__dirname, "../logs/userLogs.txt"), "El usuario ingresó a la ruta: " + req.url);
    next();
};

module.exports = logMiddleware;