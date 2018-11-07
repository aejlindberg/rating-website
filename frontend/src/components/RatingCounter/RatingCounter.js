import React, {Component} from 'react';

const RatingCounter =({productId, rating, changeRating}) => {



  return (
    <div className="counter">
      <button className="counter-action decrement" onClick ={()=> changeRating(productId, +1)}>
        <img src="./thumbs_up.png" alt="minus" />
      </button>
      <span className="counter-rating"> {rating} </span>
      <button className="counter-action increment" onClick ={()=> changeRating(productId, -1)}>
        <img src="./thumbs_down.png" alt="minus" />
      </button>
    </div>
  );
}


export default RatingCounter
