import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Link to="/">
          <p>StartPage</p>
        </Link>
        <Link to="/posting">
          <p>PostingPage</p>
        </Link>
      </header>
    )
  }

}

export default Header
