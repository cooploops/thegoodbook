import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: null
    }
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        console.log(res.data)
        // this.setState({products: res.data})
      )
      .catch(err => console.log(err));
  };


  render() {
    return(
      <Carousel />
    )
  }


}
  
export default Home;
