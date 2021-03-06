import React, { Component } from "react";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import FindPack from "./pages/FindPack";
import MyPack from "./pages/MyPack";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import API from './utils/API.js'
import "./App.css";
import Sidebar from "./components/Sidebar";
import Favicon from 'react-favicon';
import Footer from "./components/Footer";

class App extends Component {
   state = {
        session: false,
        firstname: "", 
        email: "", 
        picture: "",
        username: "",
        startDate: "",
        endDate: ""
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
        username: res.data.username,
        startDate: res.data.startDate,
        endDate: res.data.endDate})
      }
    })
  };

  HomePage = ( props ) => {
    return (
      <Home loggedIn={this.state.session}  />
    )
  };
  
  render() {
    return (
      <div>
      <Favicon url="http://sweetclipart.com/multisite/sweetclipart/files/dog_paw_print_blue.png" />
      <Router>
        <div>
          <Sidebar 
            userName={this.state.username}
            email={this.state.email}
            picture= {this.state.picture}
            loggedIn = {this.state.session}
          />
          <Wrapper >
            <Switch>
              <Route exact path="/" render={this.HomePage} />
              <Route exact path="/profile" render={() => (this.state.session === true ? <Profile/> : <Home/>)} />
              <Route exact path="/findpack" 
                render={() => (this.state.session === true ? <FindPack username={this.state.username}/> : <Home/>)}/> 
              <Route exact path="/mypack" render={() => (this.state.session === true ? <MyPack username={this.state.username} /> : <Home/>)}/>
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
      {/* <Footer/> */}
      </div>
    )
  }
}

export default App;