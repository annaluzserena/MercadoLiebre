const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controllers/usersController");
const logMiddleware = require("../middlewares/userLogs");

const validateRegister = [
    check("name")
    .isEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLowercase().withMessage("Tu nombre debe empezar en mayúscula"),

    check("user")
    .isEmpty().withMessage("Debes ingresar un usuario").bail()
    .isLength({ min: 6, max: 12}).withMessage("Tu usuario debe tener entre 6 a 12 caracteres"),

    check("email")
    .isEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("debes ingresar un email válido - Ej: nombre@email.com"),

    check("birthDate")
    .isEmpty().withMessage("Debes ingresar una fecha de nacimiento").bail()
    .isBefore()

]

router.get("/", usersController.index);

router.get("/login", usersController.indexLogin);

router.get("/register", usersController.indexRegister);

module.exports = router