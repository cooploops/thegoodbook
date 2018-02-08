import React, { Component } from "react";
import API from "../../utils/API";
import "./Products.css";
import firebase from '../../firebase';
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

  componentWillMount(){
    setTimeout(()=>{
      const user = firebase.auth().currentUser;
      console.log(user.uid);
      console.log(user.displayName);
      console.log(user.email);
    },350)
  }

  componentDidMount() {
    // this grabs the current user logged in and has all the data; You can setState from here as well if you want to store it
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

  handleSingleProduct = cartdata => {
    console.log(cartdata);
    // API.getProduct(id)
    //   .then(res => this.setState({ product: res.data }))
    //   .catch(err => console.log(err));
  };


  render() {
    return (
      // <Container fluid>
<div>
            {this.state.products.length ? (
              <div className="container-fluid">
                {this.state.products.map(product => 
                <div className="prod-container" key={product._id} >
                    <img className="carousel-img img-fluid" src={product.img} alt={product.name === 'The Gummy Book' ? 'The Gummy Book' : "The Pastry Book" ? 'The Pastry Book': "The Gummy Book" ? "The Gummy Book":""}></img>
                    <div className="prod-descrip">
                    <strong className="carousel-font prod-title">{product.name}</strong>
                    <h6 className="prod-contains">Contains:</h6>
                    <div className="product-contents carousel-font">
                    {product.contents.item1}<br/>
                    {product.contents.item2}<br/>
                    {product.contents.item3}<br/>
                </div>
                <h6 className="prod-price">Price:<br/>
                {product.price}
                </h6>
                <button data-db-id={product._id} className="btn sanch-button">Add To Cart</button>
                </div>
                </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
</div>

    );
  }
}

export default Products;
