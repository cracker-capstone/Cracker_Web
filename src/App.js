import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Card, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import {BrowserRouter as Router,
  Switch, Route, Link} from 'react-router-dom';
import routes from './routes';
import Navigation from './Navbar';
import React, {Component} from 'react';
import Graph_Dotmap from './Graph_Dotmap';
import Home from './Home';
import Intro from './Intro';
function App(){
  return(
    <Router>
      <Navigation/>
        <div className='container'> 
          <Switch>
            { routes.map((route) => {
              return <Route key={route.path}
              exact path={route.path}
              component={route.component}/>
            })} 
          </Switch>
        </div>
    </Router>
  )
}

export default App;