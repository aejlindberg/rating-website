import React from "react"
import RatingCounter from "../RatingCounter/RatingCounter"

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
          changeRating={(ratingCounter_index, delta) => this.props.changeRating(ratingCounter_index, delta)}
          index={this.props.key}
          rating={this.props.rating} />
      </div>
    )
  }

}

export default SingleProduct
