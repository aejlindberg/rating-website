import React from "react"
import "./singleProductPage.scss"
import SingleProduct from "../../singleProduct/singleProduct.js"
import { Link } from "react-router-dom"

class SingleProductPage extends React.Component {

  state = {
    products: []
  }
  handleRatingChange = (index, delta) => {
    const rateProduct = this.state.products.find(product => (product._id === index))
    const rateProductIndex = this.state.products.indexOf(rateProduct)
    console.log(rateProduct)
    console.log(rateProductIndex)
    this.setState(prevState => {
      prevState.products[rateProductIndex].rating += delta
    }, () => this.updateDBRating(rateProductIndex))
  }

  updateDBRating = index => {
    console.log(this.state.products[index].rating)
    const updatedProduct = JSON.stringify(this.state.products[index])
    const query = `http://localhost:8081/products/${this.state.products[index]._id}`
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
        <Link to="/products">
          <button className="singleProductBackButton">&#8592; Back to all products</button>
        </Link>
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
