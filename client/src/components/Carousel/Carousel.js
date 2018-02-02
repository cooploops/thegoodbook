import React from "react";

const Carousel = (props) =>
    <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="./img/gummies.jpeg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./img/bakedGoods.jpeg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./img/ChocolateTreats.jpeg" alt="Third slide"></img>
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