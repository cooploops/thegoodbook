const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//not sure what the structure of this will be yet
const customerSchema = new Schema({
    firebaseID: "",
    firstName: "",
    lastName: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    paymentInfo: ""
  });

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
