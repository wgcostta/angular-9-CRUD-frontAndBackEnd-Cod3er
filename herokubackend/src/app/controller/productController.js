const express = require("express");
//const authMiddleware = require("../middlewares/auth");

const Product = require("../model/Products");
//const Task = require("../model/Task");
//const { promises } = require("fs");

const router = express.Router();

//router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    const products = await Product.find();
    return res.send(products);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Error loading products", details: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    const product = await Product.findById(req.params.id);
    return res.send(product);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Error loading product", details: err });
  }
});

router.post("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    const { name, price } = req.body;

    const product = await Product.create({
      name,
      price,
    });

    await product.save();

    return res.send(product);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Error creating new product", details: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    const { name, price } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
      },
      { new: true } //Retornar o registro atualizado
    );
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    await product.save();

    return res.send(product);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Error update product", details: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    await Product.findByIdAndRemove(req.params.id);
    return res.send("Ok");
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Error remove product", details: err });
  }
});

module.exports = (app) => app.use("/products", router);
