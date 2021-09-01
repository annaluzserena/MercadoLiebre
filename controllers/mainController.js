const fs = require("fs");
const path = require("path");

const readProducts = fs.readFileSync(path.resolve(__dirname, "../data/products.json"));
const products = JSON.parse(readProducts);


const controller = {
    index: (req, res) => {
        res.render("home", {products: products});
    }
};

module.exports = controller