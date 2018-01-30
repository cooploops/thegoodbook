const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nameofcollection",
  {
    useMongoClient: true
  }
);

const productSeed = [
];

db.product
  .remove({})
  .then(() => db.product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
