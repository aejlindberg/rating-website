import React, {Component} from 'react';

const RatingCounter =({index, rating, changeRating}) => {



  return (
    <div className="counter">
      <button className="counter-action decrement" onClick ={()=> changeRating(index, -1)}> - </button>
      <span className="counter-rating"> {rating} </span>
      <button className="counter-action increment" onClick ={()=> changeRating(index, +1)}> + </button>
    </div>
  );
}


export default RatingCounter
