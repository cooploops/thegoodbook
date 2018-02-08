const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//not sure what the structure of this will be yet
const customerSchema = new Schema({
  uid: "",
  firebaseID: "",
  displayName: "",
  email: "",
  photoURL: "",
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: ""
  },
  paymentInfo: "",
  cart: []
  });

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
