import React from "react"
import "./singleProduct.scss"
import RatingCounter from "../RatingCounter/RatingCounter"
import { Link } from "react-router-dom"

class SingleProduct extends React.Component {

  checkIcon = () => {
    let image = ""
    switch (this.props.category) {
      case "clothing":
        image = "/jeans.svg"
        break
      case "shoes":
        image = "/shoes.svg"
        break
      case "bears":
        image = "/angrybear.svg"
        break
      default:
        image = "/music.svg"
    }
    return image
  }

render() {
  const productUrl = `/products/${this.props.productId}`
    return (
      <div>

        <div className="singleProductContainer">
          <div className="productImage">
            <Link to={productUrl}>
              <img src={this.props.image} alt="product" />
            </Link>
          </div>
          <div className="singleProductInfoContainer">
            <div className="productText">
              <h3>{this.props.title}</h3>
              <p>{this.props.description}</p>
              <div className="singleProductCategory">
                <img src={this.checkIcon()} alt="category" />
              </div>
              <div className="singleProductDataContainer">
                <div className="productPrice">
                  <span>$ {this.props.price}</span>
                </div>
                <div className="productRating">
                  <RatingCounter
                    changeRating={(ratingCounter_index, delta) => this.props.changeRating(ratingCounter_index, delta)}
                      productId={this.props.productId}
                      rating={this.props.rating} />
                    <p>Number of votes: {this.props.nrOfVotes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
}


export default SingleProduct
