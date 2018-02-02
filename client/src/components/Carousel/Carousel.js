import React from "react";




//This needs to take in props from the 'products' component
const Carousel = (props) =>
    <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block" width={400} height={400} src="./img/gummies400px.jpeg" alt="First slide"></img>
                    <strong>"The Gummy Book"</strong>
                    <h6>Contains:</h6>
                    Gummy Worms<br/>
                    Jelly Beans<br/>
                    Hard Candy<br/>
                    <h6>Price:</h6>
                    $15.99

                </div>
                <div className="carousel-item">
                    <img className="d-block" width={400} height={400} src="./img/bakedGoods400px.jpeg" alt="Second slide"></img>
                    <strong>"The Pastry Book"</strong>
                    <h6>Contains:</h6>
                    Cupcake<br/>
                    Danish<br/>
                    Cream Puff<br/>
                    <h6>Price:</h6>
                    $18.99
                </div>
                <div className="carousel-item">
                    <img className="d-block" width={400} height={400} src="./img/ChocolateTreats400px.jpeg" alt="Third slide"></img>
                    <strong>"The Chocolate Book"</strong>
                    <h6>Contains:</h6>
                    Candy Bar<br/>
                    Cocoa Crispy Treat<br/>
                    PB and Jays<br/>
                    <h6>Price:</h6>
                    $18.99
                </div>
            </div>
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

export default Carousel;