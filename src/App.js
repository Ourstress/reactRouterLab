import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import ContactDetails from './ContactDetails'
import Secret from './Secret'
import User from './User'
import Nav from './Nav'

class App extends Component {
  state = {
    isLoggedIn:false
  }
  loginHandle = () =>{
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }
  render() {
    return (
      <div>
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route exact path='/'  component = {Home} />
        <Route exact path='/About'  component = {About} />
        <Route exact path='/Contact'  component = {Contact} />
        <Route exact path='/Secret'  component = {Secret} />
        <Route exact path='/user/:name' render={
          (props) => {return this.state.isLoggedIn === true?(<User username={props.match.params.name}/>):(<Redirect to="/"/>)}
        }
        />
        <Route exact path='/Contact/:name' 
        render={props=>{
        return props.match.params.name === 'Gordon' ? (<Redirect 
          to="/Secret"/>):
            //"/Secret" name={props.match.params.name}/>): 
        <ContactDetails username={props.match.params.name}/>
      }}/>
        <Route component = {ErrorPage} />
        </Switch>
        </div>
      </Router>
      <input type="button" value="hihi login here" onClick = {this.loginHandle}/>
      </div>
    );
  }
}

export default App;
