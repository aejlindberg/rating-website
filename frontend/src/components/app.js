import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import PostingPage from "./pages/postingPage/postingPage.js"
import StartPage from "./pages/startPage/startPage.js"
import AllProductsPage from "./pages/allProductsPage/allProductsPage.js"
import SingleProductPage from "./pages/singleProductPage/singleProductPage.js"
import Header from "./header/header.js"
import NotFound from "./pages/notFound/notFound.js"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/posting" component={PostingPage} />
            <Route exact path="/products" component={AllProductsPage} />
            <Route exact path="/products/:id" component={SingleProductPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
