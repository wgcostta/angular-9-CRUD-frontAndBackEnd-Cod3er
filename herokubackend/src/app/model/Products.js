const mongoose = require("../../database");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.Now,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
