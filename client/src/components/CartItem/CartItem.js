import React from 'react';
import './CartItem.css';

const CartItem = props => (
    <div className="">
        <h4 className="mb-2">Your Cart</h4>
    {!props.user?
    <div>please sign in if you would like to open a cart</div>
    :
    props.cart === null?
    <div>There are no items in your cart</div>
    :
    props.cart.map(product =>
    <div key={product.prodName} className="media m-1 border rounded">
        <img className="mr-3 cartItemImg align-self-start cart-thumb" alt={product.prodName} src={product.prodIMG}/>
        <div className="media-body">
            <h5 className="mt-0">{product.prodName}</h5>
            <h6 className="mt-0 pt-0"><strong>Price:</strong> ${product.prodPrice}</h6>
            <strong>Order Quantity:</strong> {product.prodName === "The Chocolate Book" ? props.numProds["The Chocolate Book"] : product.prodName === "The Gummy Book" ? props.numProds["The Gummy Book"] : product.prodName === "The Baked Book" ? props.numProds["The Baked Book"] : <div/>}
        </div>
    </div>
        )}
    </div>
);

export default CartItem;