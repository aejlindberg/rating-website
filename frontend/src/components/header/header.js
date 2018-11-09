import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="navbar">
        <div className="navbarLogo">
          <Link to="/">
            <img src="../logo.png" alt="logo" width="30px" />
          </Link>
        </div>
        <div className="navbarLinks">
          <Link to="/">
            <p>Products</p>
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
