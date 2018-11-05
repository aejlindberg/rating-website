import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./topProductsList.scss"

class TopProductsList extends React.Component {

state = {
  products: []
}

componentDidUpdate(prevProps) {
  if (prevProps !== this.props)
  this.setState({ ...this.props })
}

render() {
  const topTenProducts = this.props.products
  return (
    <div className="topProductsListContainer">
      {topTenProducts
        .sort((a,b)=>(a.price<b.price) ? 1 : ((b.price<a.price) ? -1 : 0))
        .slice(0, 10)
        .map((product, index) => <SingleProduct
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
