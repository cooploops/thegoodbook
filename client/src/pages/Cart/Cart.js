import React, { Component } from "react";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import "./Cart.css";

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

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                        <p>hi</p>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}