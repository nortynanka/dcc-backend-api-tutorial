// Imports //

const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const app = express();



// Middleware //

app.use(express.json())


// Endpoints //
// http://localhost:5005/api/products

// GET all products
app.get("/api/products", (req,res) => {
    const products = repoContext.products.findAllProducts();
    res.send(products);
});

// GET product by id
// http://localhost:5005/api/products/:id
app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = repoContext.products.findProductById(id);
    return res.send(product);
});

// Starting a Server //

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server started on port number: ${PORT}`)
});