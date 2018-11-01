import React from "react"
import AllProductsList from "../../allProductsList/allProductsList.js"
import TopProductsList from "../../topProductsList/topProductsList.js"
import "./startPage.scss"

class StartPage extends React.Component {

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
    <div className="wrapper">
      <AllProductsList
        products={products} />
      <TopProductsList
        products={products} />
    </div>
  )
}

}

export default StartPage
