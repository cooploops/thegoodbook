import React, { Component }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {auth, provider} from './firebase';
import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  login = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      this.setState({
        user
      });
    });
  }

  logout = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  render(){
    return(
      <Router>
        <div>
          <Nav 
          userStatus={this.state.user}
          login={this.login}
          logout={this.logout}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
