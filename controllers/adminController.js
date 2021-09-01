const controller = {
    index: (req, res) => {
        res.send("Hola admin: " + req.query.user);
    }
};

module.exports = controller;