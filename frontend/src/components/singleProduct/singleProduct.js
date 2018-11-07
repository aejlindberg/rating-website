import React from "react"
import "./singleProduct.scss"
import RatingCounter from "../RatingCounter/RatingCounter"

class SingleProduct extends React.Component {

  render() {
    return (
      <div className="singleProductContainer">
        <img className="productImage" src={this.props.image} />
        <div className="productText">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>Category: {this.props.category}</p>
        <span>$ {this.props.price}</span>
        <p>Rating: {this.props.rating}</p>
        <RatingCounter
          changeRating={(ratingCounter_index, delta) => this.props.changeRating(ratingCounter_index, delta)}
          index={this.props.productIndex}
          rating={this.props.rating} />
        </div>
      </div>
    )
  }

}

export default SingleProduct
