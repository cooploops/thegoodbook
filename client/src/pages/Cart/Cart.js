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
        .then(() => console.log(`this is cart state ${JSON.stringify(this.state.cart)} : this is numProds state ${JSON.stringify(this.state.numProds)} : this is totalPrice state ${JSON.stringify(this.state.totalPrice)}`))
        .catch(err => console.log(err));
    }

    componentWillMount(){
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              console.log(user);
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
                        <div className="col-sm-3 text-center">
                            <h3 className=""><strong>Total</strong></h3>
                            <h6 className="pt-0">{this.state.totalPrice}</h6>
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