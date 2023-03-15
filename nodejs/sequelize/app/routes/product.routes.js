module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new product
  router.post("/", products.create);

  router.get("/", products.findAll);

  app.use("/api/products", router);
};
