import React from 'react';
import './CartItem.css';

const CartItem = props => (
    <div className="media m-1 border rounded">
        <img className="mr-3 cartItemImg" src="..." alt="image of product only 100x100"/>
        <div className="media-body">
            <h5 className="mt-0">Product Name Here through props</h5>
            <strong>Contents:</strong> put contents inline here through props
            <br/>
            <strong>Price:</strong> price of product goes here through props
        </div>
    </div>
);

export default CartItem;