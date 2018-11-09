import React from "react"
import AllProductsList from "../../allProductsList/allProductsList.js"
import TopProductsList from "../../topProductsList/topProductsList.js"
import Hero from "../../hero/hero.js"
import "./startPage.scss"

class StartPage extends React.Component {

state = {
  products: [],
  filter: ""
}

getProducts = () => {
  const productsUrl = "http://localhost:8081/products/"
  fetch(productsUrl)
    .then(response => response.json())
    .then(products => {
      this.setState({
        products: products,
      })
      console.log(products)
    })
}

handleRatingChange = (index, delta) => {
  console.log(index)
  const rateProduct = this.state.products.find(product => (product.productId === index))
  const rateProductIndex = this.state.products.indexOf(rateProduct)
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


componentDidMount() {
  this.getProducts()
}

// componentDidUpdate (prevProps, prevState) {
//   if (prevState.filter !== this.state.filter) {
//     fetch(`http://localhost:8081/products?category=${this.state.filter}`)
//       .then(response => response.json())
//       .then(json => {
//         this.setState({ products: json })
//       })
//   }
// }

handleFilterChange= (e) => {
  this.setState({
    filter:e.target.value
  }, () => {console.log(this.state.filter)})
}

render() {
  const { products } = this.state
  return (
    <div className="wrapper">
      <Hero />
      <div className="startpage-FilterContainer">
        <select onChange={this.handleFilterChange}>
          <option value=""> All &darr; </option>
          <option value="clothing"> Clothing </option>
          <option value="shoes"> Shoes </option>
          <option value="music"> Music </option>
          <option value="bears"> Bears </option>
        </select>
      </div>
      <div className="startPage-listContainer">
        <div className="startPage-topListContainer">
          <TopProductsList
            products={this.state.products}
            changeRating={(index, delta) => this.handleRatingChange(index, delta)}
          />
        </div>
        <div className="startPage-allProductsContainer">
          <AllProductsList
            products={this.state.products}
            filter={this.state.filter}
            changeRating={(index, delta) => this.handleRatingChange(index, delta)}
          />
        </div>
      </div>

    </div>
  )
}
}


export default StartPage
