import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { BrowserRouter as Router,
  Switch, Route, Link
 } from 'react-router-dom';

 export default class Intro extends Component {
  render(){
    return(
        <div className='intro_page'>
        <h1 color='white'>We provide<br/>the way to find pavement crack</h1>
        <Link className='nav-button' to='/graph-dotmap'>
        <button> 실시간 크랙 정보 확인하기 </button>
        </Link> 
      </div>
    );
  }
 }