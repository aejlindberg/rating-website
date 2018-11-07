import React from "react"
import "./postingForm.scss"

class PostingForm extends React.Component {

  render() {
    return (
      <div className="postingFormContainer">
        <h2>Post your item</h2>
        <form id="postingForm" className="postingForm" method="post" action="http://localhost:8081/products">
          <input className="formInput" type="text" placeholder="Title" name="title" required />
          <input className="formInput" type="email" placeholder="E-mail" name="email" required />
          <textarea className="formInput" rows="4" cols="50" placeholder="Add a description" name="description" form="postingForm" required />
          <input className="formInput" type="number" placeholder="Price" name="price" required />
          <input className="formInput" type="file" placeholder="Image" name="image" required />
          <select className="formInput" name="category" size="1">
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
