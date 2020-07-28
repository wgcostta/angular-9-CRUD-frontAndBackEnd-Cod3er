const express = require("express");
const routes = express.Router();
//const user = require("./app/controllers/userController");
const project = require("./app/controller/productController");
//const authMiddleware = require("./app/middlewares/auth");
const authController = require("./app/controller/authController");

//routes.post("/cadastro", user.create);
//routes.get("/cadastro", user.index);

//routes.post("/login", authController.login);

//routes.post("/forgot-password", authController.forgotPassword);
//routes.post("/reset-password", authController.resetPassword);

//routes.use(authMiddleware);
routes.get("/", project.test);

module.exports = routes;
