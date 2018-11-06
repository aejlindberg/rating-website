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

handleRatingChange = (index, delta) => {
  this.setState(prevState => {
    prevState.products[index].rating += delta
}, () => console.log(this.state.products[index].rating))
}


componentDidMount() {
  this.getProducts()
}

render() {
  const { products } = this.state
  return (
    <div className="wrapper">
      <AllProductsList
        products={this.state.products}
        changeRating={(index, delta) => this.handleRatingChange(index, delta)}
      />
      <TopProductsList
        products={this.state.products}
        changeRating={(index, delta) => this.handleRatingChange(index, delta)}
      />
    </div>
  )
}
}


export default StartPage
