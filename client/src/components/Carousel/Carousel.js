import React from "react";
import "./Carousel.css";



//This needs to take in props from the 'products' component
const Carousel = (props) =>
    <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

                {props.products.map(product => 
                <div key={product.name} className={product.name === 'The Gummy Book' ? 'carousel-item active' : 'carousel-item'}>
                    <img src={product.img} alt={product.name === 'The Gummy Book' ? 'The Gummy Book' : "The Pastry Book" ? 'The Pastry Book': "The Gummy Book" ? "The Gummy Book":""}></img>
                    <div className="prod-descrip">
                    <strong>{product.name}</strong>
                    <h6>Contains:</h6>
                    {product.contents.item1}<br/>
                    {product.contents.item2}<br/>
                    {product.contents.item3}<br/>
                    <h6>Price:</h6>
                    {product.price}<br/>
                    <button data-db-id={product._id} className="btn">Add To Cart</button>
                    </div>
                </div>
                )}

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>

export default Carousel;