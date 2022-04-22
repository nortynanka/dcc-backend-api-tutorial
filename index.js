// Imports //

const express = require("express");
const app = express();

app.get("/", (req,res) => {

});


// Middleware //

app.use(express.json())


// Starting a Server //

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server started on port number: ${PORT}`)
});