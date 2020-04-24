import React from "react";
import HomePage from "./components/homepage";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./components/signin-and-signup/signin-and-signup";
import { Route, Switch } from "react-router-dom";
import { auth } from "./components/firebase/firebase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
