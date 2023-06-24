import React from 'react';
import './App.css';
import reviews from './data'
import Testimonial from "./components/Testimonial.js"

function App() {
  return (
    <div className="App">

     <div className='main'>
        <h1 className='heading'>Our Testimonials</h1>
        
        <div className='line'></div>

        <Testimonial reviews= {reviews}/>
     </div>
    </div>
  );
}

export default App;
