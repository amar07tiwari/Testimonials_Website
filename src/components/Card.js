import React from "react";
import "./Card.css"
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Card(props) {
    let review = props.review;
    return (
        <div className="card">
            
            <div className="main-image">
                <img  className="image" src={review.image} alt="img"></img>
            </div>

            <div className="name">
                <p className="nameee">{review.name}</p> 
            </div>

            <div>
                <p className="job">{review.job}</p>
            </div>

            <div className="quote">
                <FaQuoteLeft/>
            </div>

            <div className="text">
                {review.text}
            </div>

            <div className="quote">
                <FaQuoteRight/>
            </div>

        </div>
    );
}
export default Card;