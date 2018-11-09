import React from "react"
import "./singleProductPage.scss"
import SingleProduct from "../../singleProduct/singleProduct.js"
import { Link } from "react-router-dom"

class SingleProductPage extends React.Component {

  state = {
    products: {}
  }
  handleRatingChange = (index, delta) => {
    this.setState(prevState => {
      prevState.products.rating += delta
    }, () => this.updateDBRating())
  }

  updateDBRating = () => {
    const updatedProduct = JSON.stringify(this.state.products)
    const query = `http://localhost:8081/products/${this.state.products._id}`
    fetch(query, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: updatedProduct
    })
    .then(data => {
      console.log('Request success: ', data)
      this.getProducts()
    })
    .catch(error => {
      console.log('Request failure: ', error)
    })
  }

  getProducts = () => {
    const id = this.props.match.params.id
    const productsUrl = `http://localhost:8081/products/${id}`
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => {
        console.log("RESPONSE: ", products)
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
    if (this.state.products) {
      const product = this.state.products
    }
    return (
      <div className="singleProductContainer">
        <Link to="/">
          <button className="singleProductBackButton">&#8592; Back to all products</button>
        </Link>
        {this.state.products &&
        <SingleProduct
          productId={product.productId}
          nrOfVotes={product.nrOfVotes}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          image={product.image}
          rating={product.rating}
          changeRating={(bIndex, delta) => this.handleRatingChange(bIndex, delta)}
        />}
      </div>
    )
  }

}

export default SingleProductPage
