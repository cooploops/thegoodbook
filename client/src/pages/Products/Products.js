import React, { Component } from "react";
import API from "../../utils/API";
import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";

class Products extends Component {
  state = {
    products: [],
    name: "",
    contents: {
      item1: "",
      item2: "",
      item3: ""
    },
  price: "",
  img: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, name: "",
        contents: {
          item1: "",
          item2: "",
          item3: ""
        },
        price: "",
        img: ""})
      )
      .catch(err => console.log(err));

  };

  render() {
    console.log(this.state.products);
    return (
      // <Container fluid>
<div>
            {this.state.products.length ? (
              <div className="container">
                {this.state.products.map(product => 
                <div key={product._id} >
                    <img src={product.img} alt={product.name === 'The Gummy Book' ? 'The Gummy Book' : "The Pastry Book" ? 'The Pastry Book': "The Gummy Book" ? "The Gummy Book":""}></img>
                    <div className="prod-descrip">
                    <strong>{product.name}</strong>
                    <h6>Contains:</h6>
                    {product.contents.item1}<br/>
                    {product.contents.item2}<br/>
                    {product.contents.item3}<br/>
                    <h6>Price:</h6>
                    {product.price}<br/>
                    <button data-db-id={product._id} className="btn">Add To Cart</button>
                    </div>
                </div>
                )}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <Footer />
</div>

    );
  }
}

export default Products;
