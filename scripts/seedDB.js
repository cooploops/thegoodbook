const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the customers collection and inserts the customers below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goodbookdata",
  {
    useMongoClient: true
  }
);

const productSeed = [{
  name: "The Chocolate Book",
  contents: {
    item1: "Candy Bar",
    item2: "Cocoa Crispy Treat",
    item3: "PB and Jays"
  },
  price: "$18.99",
  quantity: 10,
  img: "./img/exampleimage.png"
},
{
  name: "The Gummy Box",
  contents: {
    item1: "Gummy Worms",
    item2: "Jelly Beans",
    item3: "Hard Candy"
  },
  price: "$15.99",
  quantity: 8,
  img: "./img/exampleimage.png"
},
{
  name: "The Pastry Box",
  contents: {
    item1: "Cupcake",
    item2: "Danish",
    item3: "Cream Puff"
  },
  price: "$18.99",
  quantity: 8,
  img: "./img/exampleimage.png"
}];

const customerSeed = [{
  firebaseID: "Kv_1ou7-GCkCnEAH8M3",
  firstName: "Felix",
  lastName: "Rupert",
  address: {
    street: "1234 Yermom Ln.",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90041"
  },
  paymentInfo: "PayPal"
},
{
  firebaseID: "Kv_1ou7-GCkCnEAH8M3",
  firstName: "Phil",
  lastName: "McCracken",
  address: {
    street: "4321 Whattheheck Ln.",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90025"
  },
  paymentInfo: "PayPal"
}];

db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
