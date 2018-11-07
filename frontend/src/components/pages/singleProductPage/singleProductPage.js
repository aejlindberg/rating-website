import React from "react"
import SingleProduct from "../../singleProduct/singleProduct.js"

class SingleProductPage extends React.Component {

  state = {
    products: []
  }

  getProducts = () => {
    const productsUrl = "http://localhost:8081/products/"
    const id = this.state.products._id
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => {
        this.setState({
          products
        })
        console.log(products)
      })
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    return (
      <div className="singleProductContainer">
        <SingleProduct />
      </div>
    )
  }

}

export default SingleProductPage
