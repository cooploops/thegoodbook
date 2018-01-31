import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Products extends Component {
  state = {
    products: [],
    stuff1: "",
    stuff2: "",
    stuff3: ""
  };

  // componentDidMount() {
  //   this.loadProducts();
  // }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, stuff1: "", stuff2: "", stuff3: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

          </Col>
          <Col size="md-6">

            {this.state.products.length ? (
              <div>
                {this.state.products.map(product => (
                  <divItem key={product._id}>
                    <Link to={"/products/" + product._id}>
                      <strong>
                        hi
                      </strong>
                    </Link>
                    <button onClick={() => this.deleteProduct(product._id)} />
                  </divItem>
                ))}
              </div>
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
