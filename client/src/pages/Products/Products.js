import React, { Component } from "react";
import API from "../../utils/API";
import "./Products.css";
import firebase from '../../firebase';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      name: "",
      contents: {
        item1: "",
        item2: "",
        item3: ""
      },
    price: null,
    img: "",
    currentUser:null
    }
  }

  componentDidMount() {
    // this grabs the current user logged in and has all the data; You can setState from here as well if you want to store it
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        // console.log(user);
        this.setState({currentUser: user})
      } else{
        console.log("no user signed in")
      }
    })
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
        price: null,
        img: ""})
      )
      .catch(err => console.log(err));

  };

  handleSingleProduct = cartdata => {
    console.log(this.state.currentUser.uid);
    API.saveCart(
      {
        uid: this.state.currentUser.uid,
        cart: {
        prodName: cartdata.prodName, 
        prodPrice: parseFloat(cartdata.prodPrice), 
        prodIMG: cartdata.prodIMG
        }  
      }
    )};
  


  render() {
    return (
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
                <button data-db-name={product.name} data-db-price={product.price} data-db-img={product.img} className="btn sanch-button" onClick={() => this.handleSingleProduct({prodName: product.name, prodPrice:product.price, prodIMG: product.img})}>Add To Cart</button>
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
