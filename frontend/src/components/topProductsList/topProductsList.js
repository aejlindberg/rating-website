import React from "react"
import SingleProduct from "../singleProduct/singleProduct.js"
import "./topProductsList.scss"

class TopProductsList extends React.Component {

sortTopRating= () => {
  const sortingList =this.props.products
  console.log(sortingList, "sorting List")
  sortingList.sort((a,b)=>(a.price<b.price) ? 1 : ((b.price<a.price) ? -1 : 0))
  const sortedTopTen =  sortingList.slice(0,9)
}





render() {
  console.log(this.props.products)
  this.sortTopRating()

  const topTenProducts = this.props.products
  return (
    <div className="topProductsListContainer">
      {topTenProducts
        .sort((a,b)=>(a.price<b.price) ? 1 : ((b.price<a.price) ? -1 : 0))
        .splice(2)
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
