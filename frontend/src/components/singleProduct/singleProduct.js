import React from "react"
import ratingCounter from "../../RatingCounter"

class SingleProduct extends React.Component {

  render() {
    return (
      <div className="singleProductContainer">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>$ {this.props.price}</p>
        <p>{this.props.category}</p>
        <p>{this.props.rating}</p>

        <RatingCounter
          changeRating={(ratingCounter_index, delta) => changeRating(ratingCounter_index, delta)}
          index={index}
          rating={rating} />
      </div>
    )
  }

}

export default SingleProduct
