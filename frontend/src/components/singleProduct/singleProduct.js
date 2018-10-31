import React from "react"

class SingleProduct extends React.Component {

  render() {
    return (
      <div className="singleProductContainer">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>$ {this.props.price}</p>
        <p>{this.props.category}</p>
        <p>{this.props.rating}</p>
      </div>
    )
  }

}

export default SingleProduct
