const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

// This file empties the customers and products collection and inserts the former and latter below

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
  img: "./img/ChocolateTreats.jpeg"
},
{
  name: "The Gummy Book",
  contents: {
    item1: "Gummy Worms",
    item2: "Jelly Beans",
    item3: "Hard Candy"
  },
  price: "$15.99",
  quantity: 6,
  img: "./img/gummies.jpeg"
},
{
  name: "The Pastry Book",
  contents: {
    item1: "Cupcake",
    item2: "Danish",
    item3: "Cream Puff"
  },
  price: "$18.99",
  quantity: 8,
  img: "./img/bakedGoods.jpeg"
}];

// const customerSeed = [{}];

// db.Customer
//   .remove({})
//   .then(() => db.Customer.collection.insertMany(customerSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

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
