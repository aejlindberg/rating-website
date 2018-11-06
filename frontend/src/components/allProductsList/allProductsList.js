import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./allProductsList.scss"

class AllProductsList extends React.Component {

  render() {
    return (
      <div className="allProductsListContainer">
        {this.props.products.map((product, index) => <SingleProduct
          key={index}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          changeRating={(index, delta) => this.props.changeRating(index, delta)}
                                                     />
        )}
      </div>
    )
  }
}

export default AllProductsList
