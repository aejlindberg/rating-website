import React from "react"
import "./singleProductPage.scss"
import SingleProduct from "../../singleProduct/singleProduct.js"
import { Link } from "react-router-dom"

class SingleProductPage extends React.Component {

  state = {
    products: []
  }

  getProducts = () => {
    console.log('Hello from GetProducts')
    const id = this.props.match.params.id
    const productsUrl = `http://localhost:8081/products/${id}`
    console.log(productsUrl)
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => {
        console.log(products)
        this.setState({
          products
        })
      })
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    const product = this.state.products
    return (
      <div className="singleProductContainer">
        <Link to="/products"><button className="singleProductBackButton">&#8592; Back to all products</button></Link>
        <SingleProduct
          productId={product._id}
          nrOfVotes={product.nrOfVotes}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      </div>
    )
  }

}

export default SingleProductPage
