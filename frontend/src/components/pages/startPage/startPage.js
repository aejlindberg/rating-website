import React from "react"
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
        products: products
      })
      console.log(products)
    })
}

componentDidMount() {
  this.getProducts()
}

render() {
  return (
    <div>
      <br />
    </div>
  )
}

}

export default StartPage
