const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  contents: {
    item1: { type: String, required: true },
    item2: { type: String, required: true },
    item3: { type: String, required: true }
  },
  price: { type: String, required: true },
  img: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


