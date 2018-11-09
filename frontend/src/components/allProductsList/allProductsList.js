import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./allProductsList.scss"

class AllProductsList extends React.Component {

constructor(props) {
  super()
   this.state = {
     ...props
    }
}

componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        products: this.props.products,
      })
    }
}

  render() {
    let idSortedProducts = this.state.products
    return (
      <div className="allProductsListContainer">
        <h2>All products</h2>
        {this.state.products
          .sort((a,b)=>(a.productId<b.productId) ? 1 : ((b.productId<a.productId) ? -1 : 0))
          .map((product, index) => <div className="allProductsListContainer">
          <SingleProduct
            key={index}
            productId={product.productId}
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
