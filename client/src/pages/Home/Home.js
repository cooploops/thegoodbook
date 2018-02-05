import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import Testimonials from "../../components/Testimonials"
import Footer from "../../components/Footer";

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
      ).then(()=>console.log(this.state.products))
      .catch(err => console.log(err));
  };


  render() {
    return(
      <div>
        <Carousel products={this.state.products}/>
        <Testimonials />
        <Footer />
      </div>
    )
  }


}
  
export default Home;
