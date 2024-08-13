const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/product/: id", (req, res) => {
  res.send("Home Page");
});

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const productsRouter = require("./src/routes/products.js");
const cartsRouter = require("./src/routes/carts.js");

app.listen(PORT, () =>
  console.log(`Server online en http://localhost: ${PORT}`)
);
