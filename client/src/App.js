import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import ReactDOM from 'react-dom';

import notification from './Components/notification';
import speaker from './Components/speaker';
import sponsor from './Components/sponsor';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>LIVE-SITE :)</h1>
          <ul>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/hardwarelab">Hardware Lab</Link></li>
          <li><Link to="/mentors">Mentors</Link></li>
          <li><Link to="/hacker-resources">Hacker Resources and Free to use APIs</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          </ul>

      <Route path='/' exact render={
        () => {
          return( <h1> Title Screen </h1>);
        }
      }/>

       <Route path='/map' exact strict render={
        () => {
          return( <h1>Map</h1> );
        }
      }/>

       <Route path='/hardwarelab' exact strict render={
        () => {
          return( <h1>Hardware Lab</h1> );
        }
      }/>

       <Route path='/mentors' exact strict render={
        () => {
          return( <h1>Mentors</h1> );
        }
      }/>
      
      <Route path='/hacker-resources' exact strict render={
        () => {
          return( <h1>Hacker Resources and Free to Use APIs</h1>);
        }
      }/>

       <Route path='/schedule' exact strict render={
        () => {
          return( <h1>Schedule</h1> );
        }
      }/>

      </div>
      </Router>
    );
  }
}

export default App;
