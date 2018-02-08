import React, { Component } from "react";
import API from "../../utils/API";
import "./Cart.css";
import Form from '../../components/Form';
import CartItem from '../../components/CartItem';
import firebase from '../../firebase';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {    
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            console.log(user);
            this.setState({
                currentUser:user
            });
            this.handleAddressSave();
          } else{
            console.log("no user signed in")
          }
        })
      }

//Test for saving address // This successfully save strings but needs to be modified
//Check componentDidMount
      handleAddressSave() {
        API.saveAddress(
        {
         uid: this.state.currentUser.uid,
         address: {
            street: "Test St.",
            city: "Test City",
            state: "CA",
            zipCode: "90025"  }}
        )};

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
                                <CartItem
                                user={this.state.currentUser} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <p>Total Column</p>
                            <button className="btn btn-primary checkoutBtn mx-auto">Checkout</button>
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