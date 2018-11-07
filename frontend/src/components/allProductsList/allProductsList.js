import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./allProductsList.scss"

class AllProductsList extends React.Component {

  render() {
    return (
      <div className="allProductsListContainer">
        <h2>All products</h2>
        {this.props.products.map((product, index) => <div className="allProductsListContainer">
          <SingleProduct
            key={index}
            productId={product._id}
            nrOfVotes={product.nrOfVotes}
            email={product.email}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
            rating={product.rating}
            changeRating={(bIndex, delta) => this.props.changeRating(bIndex, delta)}
          />
      </div>

        )}
      </div>
    )
  }
}

export default AllProductsList
