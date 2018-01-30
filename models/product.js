const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//not sure what the structure of this will be yet
const productSchema = new Schema({
  stuff1: { type: String, required: true },
  stuff2: { type: String, required: true },
  stuff3: String,
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
