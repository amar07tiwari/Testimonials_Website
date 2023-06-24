import React, { useState } from "react";
import "./Testimonial.css"
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index -1 <0 ){
            setIndex(reviews.length -1);
        }
        else{
;            setIndex(index-1)
        }
    };

    function rightShiftHandler() {
        if(index +1 > reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    };

    function surpriseHandler() {
       let randomIndex= Math.floor(Math.random() * reviews.length);
       setIndex(randomIndex);
    };

    return(
        <div className="card">
            <Card review = {reviews[index]}></Card>

            <div className="button">
                <button onClick ={leftShiftHandler} className="button-1"><FiChevronLeft/></button>
                <button onClick ={rightShiftHandler} className="button-1"><FiChevronRight/></button>
            </div>

            <div>
                <button onClick ={surpriseHandler}className="surprise">Surprise Me</button>
            </div>

        </div>
    );
}

export default Testimonial;