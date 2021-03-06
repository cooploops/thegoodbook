import axios from "axios";

export default {
    // Gets all customers
    getCustomers: function() {
      return axios.get("/api/customers");
    },
    // Gets the customer with the given id
    getCustomer: function(id) {
      return axios.get("/api/customers/" + id);
    },
    // Deletes the customer with the given id
    deleteCustomer: function(id) {
      return axios.delete("/api/customers/" + id);
    },
    // Saves a customer to the database
    saveCustomer: function(customerData) {
      return axios.post("/api/customers", customerData);
    },
    saveCart: function(cartData) {
      return axios.post("/api/customers/updatecart/", cartData);
    },
    saveAddress: function(addressData) {
      return axios.post("/api/customers/saveaddress/", addressData);
      },
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  updateProductBtn: function(productData) {
    return axios.post("/api/products/updatebutton/", productData);
  }
};


