const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");

const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

const logMiddleware = require("./middlewares/userLogs");

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", logMiddleware, mainRoutes);
app.use("/users", logMiddleware, usersRoutes);
app.use("/admin", logMiddleware, adminRoutes);
