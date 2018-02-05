import React, { Component } from "react";
import Card from "../Card"
import testImages from "../../testimonials.json";
import './Testimonials.css'

let imagesArr = testImages;
// let idArr;

class Testimonials extends Component {

    state = {
        images: [],
    };

    componentDidMount = () => {
        let shuffledImages;

        for (let i = imagesArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArr[i], imagesArr[j]] = [imagesArr[j], imagesArr[i]];
        }
        shuffledImages = imagesArr;

        this.setState({ images: [shuffledImages[0], shuffledImages[1], shuffledImages[2]] });




    };

    render() {
        return (
            <div className='wrapper'>
                {this.state.images.map(image => (
                    <Card

                        id={image.id}
                        key={image.id}
                        name={image.name}
                        image={image.image}
                        quote={image.quote}
                    />
                ))}
            </div>
        )
    }
}


export default Testimonials;