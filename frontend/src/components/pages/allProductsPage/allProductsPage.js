import React from "react"
import AllProductsList from "../../allProductsList/allProductsList.js"

class AllProductsPage extends React.Component {

  state = {
    products: []
  }

  getProducts = () => {
    const productsUrl = "http://localhost:8081/products/"
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
  const { products } = this.state
  return (
    <div className="allProductsContainer">
      <AllProductsList
        products={this.state.products}
      />
    </div>
  )
  }

}

export default AllProductsPage
