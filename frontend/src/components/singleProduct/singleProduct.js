import React from "react"
import "./singleProduct.scss"
import RatingCounter from "../RatingCounter/RatingCounter"

class SingleProduct extends React.Component {

  checkIcon = () => {
    console.log("test")
    let image = ""
    switch (this.props.category) {
      case "clothing":
        image = "./clothes.svg"
        break
      case "shoes":
        image = "./shoes.svg"
        break
      default:
        image = "./music.svg"
    }
    return image
  }

render() {

  return (
    <div className="singleProductContainer">
      <img className="productImage" src={this.props.image} />
            <div className="singleProductInfoContainer">
        <div className="productText">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
      <div className="singleProductCategory">
            <img src={this.checkIcon()} alt="category" />
            <p>Category: {this.props.category}</p>
          </div>
        </div>
        <div className="singleProductDataContainer">
          <div className="productPrice">
            <span>$ {this.props.price}</span>
          </div>
          <div className="productRating">
            <RatingCounter
              changeRating={(ratingCounter_index, delta) => this.props.changeRating(ratingCounter_index, delta)}
              index={this.props.productIndex}
              rating={this.props.rating} />
              <p>Number of votes: {this.props.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}


export default SingleProduct
