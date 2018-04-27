import React, { Component } from "react";
import Nav from "./components/Nav"
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import FindPack from "./pages/FindPack";
import MyPack from "./pages/MyPack";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import NavHeader from "./components/NavHeader";
import { BrowserRouter as Router, Route, Switch,  Redirect  } from "react-router-dom"
import API from './utils/API.js'
import "./App.css";

class App extends Component {
   state = {
        session: false,
        firstname: "", 
        email: "", 
        picture: "",
        username: ""

    };

  componentDidMount(){
    this.isLoggedIn(); 
  }

  isLoggedIn = () => {
    API.checkIfsession().then(res =>{
      console.log("this is res.data when check session" , res.data); 
      if (res.data.auth === true){
      this.setState({session: true, 
        firstname: res.data.firstname, 
        email: res.data.email, 
        picture: res.data.picture,
      username: res.data.username})
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavHeader />
          <Nav firstname={this.state.firstname}
          email={this.state.email}
          picture= {this.state.picture}/>
          <Wrapper >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" render={() => (this.state.session === true ? <Profile/> : <Home/>)} />
              <Route exact path="/findpack" 
                render={() => (this.state.session === true ? <FindPack/> : <Home/>)}/> 
              <Route exact path="/mypack" render={() => (this.state.session === true ? <MyPack username={this.state.username} /> : <Home/>)}/>
              <Route exact path="/logout" component={Logout} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
