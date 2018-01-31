import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Customers extends Component {
  state = {
   customers: []
  };

  // componentDidMount() {
  //   this.loadCustomers();
  // }

  loadCustomers = () => {
    API.getCustomers()
      .then(res =>
        this.setState({ customers: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteCustomer = id => {
    API.deleteCustomer(id)
      .then(res => this.loadCustomers())
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

            {this.state.customers.length ? (
              <div>
                {this.state.customers.map(customer => (
                  <divItem key={customer._id}>
                    <Link to={"/customers/" + customer._id}>
                      <strong>
                        hi
                      </strong>
                    </Link>
                    <button onClick={() => this.deleteCustomer(customer._id)} />
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

export default Customers;
