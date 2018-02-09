import React, { Component } from "react";
import API from "../../utils/API";
import "./Cart.css";
import Form from '../../components/Form';
import CartItem from '../../components/CartItem';
import firebase from '../../firebase';
import _ from 'lodash';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            cart:null,
            numProds:null,
            totalPrice:null
        }
    }

    componentDidMount() {    
        
      }

//Test for saving address // This successfully save strings but needs to be modified
//Check componentDidMount
      handleAddressSave = () => {
        API.saveAddress(
        {
         uid: this.state.currentUser.uid,
         address: {
            street: "Test St.",
            city: "Test City",
            state: "CA",
            zipCode: "90025"  }}
        )};

    loadCart = (id) => {
        API.getCustomer(id)
        .then(res => 
        this.setState({cart:_.uniqBy(res.data.cart, 'prodName'), numProds: _.countBy(res.data.cart,'prodName'), totalPrice:_.sumBy(res.data.cart,'prodPrice')}))
        .catch(err => console.log(err));
    }

    componentWillMount(){
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              this.setState({
                  currentUser:user
              });
              this.loadCart(this.state.currentUser.uid)
            } else{
              console.log("no user signed in")
            }
          })

    }

    render() {
        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="row">
                            </div>
                            <div className="container">
                                <CartItem
                                user={this.state.currentUser}
                                cart={this.state.cart}
                                numProds={this.state.numProds}
                                />
                            </div>
                        </div>
                        <div className="col-sm-3 align-self-end text-center">
                            <h2 className=""><strong>Total</strong></h2>
                            <hr/>
                            <h5 className="pt-0 mb-3">${this.state.totalPrice}</h5>
                            <button className="btn btn-primary checkoutBtn">Checkout</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="container">
                                <Form 
                                user={this.state.currentUser}/>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }

}
export default Cart;