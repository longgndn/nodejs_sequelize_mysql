module.exports = (app) => {
  const users = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  // Create a new product
  router.post("/signup", users.signup);
  router.post("/signin", users.signin);

  app.use("/api/auth", router);
};
