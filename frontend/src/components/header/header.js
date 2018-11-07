import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="navbar">
        <div className="navbarLogo">
          <p>Logo</p>
        </div>
        <div className="navbarLinks">
          <Link to="/">
            <p>Start</p>
          </Link>
          <Link to="/products">
            <p>All products</p>
          </Link>
          <Link to="/posting">
            <p>Post an item</p>
          </Link>
        </div>
      </header>
    )
  }

}

export default Header
