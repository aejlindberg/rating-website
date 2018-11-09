import React from "react"
import "./postingForm.scss"

class PostingForm extends React.Component {
state = {
  title: "",
  email: "",
  description: "",
  price: "",
  image: "",
  category: "clothing"
}

handleFormChange= (e)=> {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
}
clearFields= () => {
  this.setState ({
    title: "",
    email: "",
    description: "",
    price: "",
    image: "",
    category: "clothing"
  })
}

viewNewProduct = (productId) => {
  console.log("Take me to new product!")
  window.location.replace(`http://localhost:3000/products/${productId}`)
}

submitForm = (e) => {
  e.preventDefault()
  const newProduct= {
    title: this.state.title,
    email: this.state.email,
    description: this.state.description,
    price: this.state.price,
    image: this.state.image,
    category: this.state.category,
    productId: Date.now()
  }

  fetch("http://localhost:8081/products", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "Post",
    body: JSON.stringify(newProduct)
  })
  .then(data => {
    console.log('Request success: ', data)
    // alert( this.state.title + " has been created!")
    this.viewNewProduct(newProduct.productId)
    // this.clearFields()
    })
  .catch(error => {
    console.log('Request failure: ', error)
    alert(error)
  })
}

  render() {
    return (
      <div className="postingFormContainer">
        <h2>Post your item</h2>
        <form id="postingForm" className="postingForm" onSubmit={this.submitForm}>
          <input className="formInput" value={this.state.title} type="text" placeholder="Title" name="title" required onChange={this.handleFormChange}/>
          <input className="formInput" value={this.state.email} type="email" placeholder="E-mail" name="email" required onChange={this.handleFormChange}/>
          <textarea className="formInput" value={this.state.description} rows="4" cols="50" placeholder="Add a description" name="description" form="postingForm" required onChange={this.handleFormChange}/>
          <input className="formInput" value={this.state.price} type="number" placeholder="Price" name="price" required onChange={this.handleFormChange}/>
          <input className="formInput" value={this.state.image} type="url" placeholder="Image" name="image" required onChange={this.handleFormChange}/>
          <select className="formInput" name="category" size="1" onChange={this.handleFormChange}>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="music">Music</option>
            <option value="bears">Bears</option>
          </select>
          <input className="submitButton" type="submit" />
        </form>
      </div>
    )
  }
}

export default PostingForm
