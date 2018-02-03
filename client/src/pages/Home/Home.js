import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import Testimonials from "../../components/Testimonials"

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({products: res.data})
      )
      .catch(err => console.log(err));
  };


  render() {
    return(
      <Carousel products={this.state.products}/>
      <Testimonials />
    )
  }


}
  
export default Home;
