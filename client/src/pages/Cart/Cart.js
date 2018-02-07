import React, { Component } from "react";
import API from "../../utils/API";
import "./Cart.css";
import Form from '../../components/Form';
import Jumbotron from '../../components/Jumbotron';
import CartItem from '../../components/CartItem';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }

    // loadCart(){
    //     API.getCustomer(id)
    //     .then(res => 
    //     this.setState({ cart: res.data}))
    //     .then(() => console.log(this.state.cart))
    //     .catch(err => console.log(err));
    // }

    componentWillMount(){
        // uncomment the below when ready to load
        // this.loadCart();
    }

    render() {
        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="row">
                            </div>
                            <div className="container">
                                <CartItem />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <p>Total Column</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="container">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }

}
export default Cart;