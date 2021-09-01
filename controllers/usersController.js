const fs = require("fs");
const path = require("path");

const readUsers = fs.readFileSync(path.resolve(__dirname, "../data/users.json"));
const users = JSON.parse(readUsers);

const controller = {
    index: (req, res) => {
        res.render("users", {users: users});
    },
    indexLogin: (req, res) => {
        res.render("login");
    },
    indexRegister: (req, res) => {
        res.render("register");
    }
};

module.exports = controller 