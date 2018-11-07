import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./topProductsList.scss"

class TopProductsList extends React.Component {

render() {
  const topTenProducts = this.props.products
  return (
    <div className="topProductsListWrapper">
      <h2>Top 10 products</h2>
      {topTenProducts
        .sort((a,b)=>(a.rating<b.rating) ? 1 : ((b.rating<a.rating) ? -1 : 0))
        .slice(0, 10)
        .map((product, index) => <div className="topProductsListContainer">
        <SingleProduct
          key={index}
          productId={product._id}
          nrOfVotes={product.nrOfVotes}
          email={product.email}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          changeRating={(bIndex, delta) => this.props.changeRating(bIndex, delta)}
        />
     </div>)}
    </div>
  )
}
}


export default TopProductsList
