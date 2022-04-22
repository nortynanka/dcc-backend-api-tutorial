// IMPORTS //

const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const app = express();



// MIDDLEWARE //

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// ENDPOINTS //
// http://localhost:5005/api/products

// GET all products
// http://localhost:5005/api/products
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

// POST new product
// http://localhost:5005/api/products
app.post("/api/products", (req,res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return res.status(201).send(addedProduct);
});

// STARTING A SERVER //

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server started on port number: ${PORT}`);
});