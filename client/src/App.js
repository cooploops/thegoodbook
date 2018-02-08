import React, { Component }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, provider } from './firebase';
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import API from "./utils/API";
import Home from "./pages/Home";
import About from "./pages/About";

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
      this.handleCustomerSubmit();
    });
  }

  //Need to add oauth token too
  handleCustomerSubmit = event => {
    console.log(this.state.user.email);

      API.saveCustomer({
        uid: this.state.user.uid,
        firebaseID: this.state.user.uid,
          displayName: this.state.user.displayName,
          email: this.state.user.email,
          photoURL: this.state.user.photoURL,
          address: {
            street: "",
            city: "",
            state: "",
            zipCode: ""
          },
          paymentInfo: ""
        })
  };

  logout = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      if(user){
        this.setState({ user })
      }
    });
  }

  render(){
    return(
      <Router>
        <div>
          <Nav 
          userStatus={this.state.user}
          login={this.login}
          logout={this.logout}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/Cart" component={Cart} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
