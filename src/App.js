import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {BrowserRouter as Router,
  Switch, Route} from 'react-router-dom';
import Navigation from './Navbar';
import React from 'react';
import Home from './pages/Home';
import Intro from './pages/Intro';
import GraphDotmap from './pages/GraphDotmap';
import DataImage from './pages/DataImage';

function App(){
  return(
    <Router>
      <Navigation/>
        <div className='container'> 
        <Route path="/" component={Home} exact/>
        <Route path="/intro" component={Intro} />
        <Route path="/graph-dotmap" component={GraphDotmap}/>
        <Route path="/data-image" component={DataImage} />
        </div>
    </Router>
  )
}

export default App;