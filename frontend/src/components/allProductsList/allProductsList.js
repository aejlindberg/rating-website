import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./allProductsList.scss"

class AllProductsList extends React.Component {

  render() {
    return (
      <div className="allProductsListWrapper">
        <h2>All products</h2>
        {this.props.products.map((product, index) => <div className="allProductsListContainer">
          <SingleProduct
            key={index}
            email={product.email}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            changeRating={(index, delta)=>this.props.handleRatingChange(index, delta)} />
        </div>
        )}
      </div>
    )
  }
}

export default AllProductsList
