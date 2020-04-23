import React from "react";
import HomePage from "./components/homepage";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
