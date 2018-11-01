import React from "react"
import "./postingForm.scss"

class PostingForm extends React.Component {

  render() {
    return (
      <div className="postingFormContainer">
        <form id="postingForm" className="postingForm" method="post" action="http://localhost:8081/products">
          <input type="text" placeholder="Enter your email address" name="email" required />
          <input type="text" placeholder="Title" name="title" required />
          <textarea rows="4" cols="50" placeholder="Add a description" name="description" form="postingForm" required />
          <input type="number" placeholder="Price" name="price" required />
          <input type="file" placeholder="Image" name="image" required />
          <select name="category" size="1">
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="music">Music</option>
            <option value="bears">Bears</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default PostingForm
