import React from 'react';
import logo from './images/logo.png';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import patientLogin from './components/patientLogin.js';
import Home from './components/Home.js';
import caretaker from './components/caretaker.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div class="head">
        <div className="logo">
        <img src={logo} alt="elderCare" />
        </div>
        Remote treatment for elderly patients!
      </div>

      <div className="topnav">
        Please Login:
        <Link to="/patient">
        <Button variant="primary">Login as Patient</Button>{' '}
           </Link>
     
       
        <Link to="/caretaker">
        <Button variant="primary">Login as Caretaker</Button>{' '}

        </Link>
       
        
      
        </div>

      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/patient" component={patientLogin} />
          <Route path="/caretaker" component={caretaker} />
       
        </Switch>
    </div>
  );
}

export default App;
