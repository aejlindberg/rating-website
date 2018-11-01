import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./topProductsList.scss"

class TopProductsList extends React.Component {

state = {
  topList: []
}

sortProductsByRating = () => {
  this.setState({
    topList: this.props.products
  }, () => console.log("Props: ", this.props.products))
}

componentDidMount() {
  this.sortProductsByRating()
}

render() {
  console.log(this.props.products)
  console.log(this.state.topList)
  return (
    <div className="topProductsListContainer">
      {this.state.topList.map((product, index) => <SingleProduct
        key={index}
        email={product.email}
        title={product.title}
        description={product.description}
        price={product.price}
        category={product.category}
        rating={product.rating} />)}
    </div>
  )
}
}

export default TopProductsList
