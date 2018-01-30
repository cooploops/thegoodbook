const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goodbookproducts",
  {
    useMongoClient: true
  }
);

const productSeed = [{
  stuff1: "this is a test 1",
  stuff2: "this is a test 2",
  stuff3: "this is a test 3"
}];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
