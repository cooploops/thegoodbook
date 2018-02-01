import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

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



  // deleteProduct = id => {
  //   API.deleteProduct(id)
  //     .then(res => this.loadProducts())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

          </Col>
          <Col size="md-6">

            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  <ListItem key={product._id}>
                    <Link to={"/products/" + product._id}>
                      <strong>
                        {product.name} 
                      </strong>
                    </Link>
                    <h6>Contains:</h6>
                       {product.contents.item1}
                       <br />
                       {product.contents.item2}
                       <br />
                       {product.contents.item3}

                       <h6>Price: {product.price}</h6>
                       
                      
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
