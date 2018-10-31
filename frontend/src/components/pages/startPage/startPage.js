import React from "react"
import SingleProduct from "../../singleProduct/singleProduct.js"
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
  const { products } = this.state
  return (
    <div className="wrapper">
      {products.map((product, index) => {
        return <SingleProduct
          key={index}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating} />
      })}
    </div>
  )
}

}

export default StartPage
