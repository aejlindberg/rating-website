import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./allProductsList.scss"

class AllProductsList extends React.Component {

  render() {
    return (
      <div className="allProductsListContainer">
        {this.props.products.map((product, index) => <SingleProduct
          key={index}
          productIndex={index}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          changeRating={(bIndex, delta) => this.props.changeRating(bIndex, delta)}
         />
        )}
      </div>
    )
  }
}

export default AllProductsList
