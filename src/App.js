import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Card, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import {BrowserRouter as Router,
  Switch, Route, Link} from 'react-router-dom';
import routes from './routes';
import Navigation from './Navbar';
import React, {Component} from 'react';
import GraphDotmap from './pages/GraphDotmap';
import Home from './pages/Home';
import Intro from './pages/Intro';
//라우터, 네비게이션 이용해 페이지 연결하는 파일
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